import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db, isFirebaseConfigured } from "../../firebase";

const CACHE_KEY = "hakuna_stores_cache_v1";
const CACHE_TTL_MS = 1000 * 60 * 60; // 1h

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.data) || typeof parsed.ts !== "number") {
      return null;
    }
    if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    // ignore
  }
}

function normalizeStore(doc) {
  return {
    city: doc.city ?? "",
    address: doc.address ?? "",
    phone: doc.phone ?? "",
    link: doc.link ?? "",
    order: typeof doc.order === "number" ? doc.order : undefined,
  };
}

export function useStores() {
  const cached = useMemo(() => readCache(), []);
  const [stores, setStores] = useState(cached?.length ? cached : []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!isFirebaseConfigured || !db) return;

      try {
        const col = collection(db, "stores");
        let snap;
        try {
          const q = query(col, orderBy("order", "asc"));
          snap = await getDocs(q);
        } catch {
          snap = await getDocs(col);
        }

        const remote = snap.docs
          .map((d) => normalizeStore(d.data()))
          .filter((s) => s.city || s.address || s.phone || s.link);

        remote.sort((a, b) => {
          const ao = typeof a.order === "number" ? a.order : Number.MAX_SAFE_INTEGER;
          const bo = typeof b.order === "number" ? b.order : Number.MAX_SAFE_INTEGER;
          return ao - bo;
        });

        if (cancelled) return;

        if (remote.length) {
          setStores(remote);
          writeCache(remote);
        }
      } catch {
        // fallback already set
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return stores;
}

import styled from "styled-components";

export const ReviewContainer = styled.div`
  background: #ffcc00;
  display: flex;
  padding: 0 30px;
  height: 700px;
  justify-content: center;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const ReviewBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImgBG = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ReviewContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReviewH1 = styled.h1`
  padding-top: 100px;
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ReviewWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ReviewCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ReviewIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 5px;
`;

export const ReviewH4 = styled.h1`
  padding-top: 50px;
  font-size: 2.5rem;
  color: #ffcc00;
  margin-bottom: 32px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ReviewH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;


export const ReviewH3 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const ReviewP = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;
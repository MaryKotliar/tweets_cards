import styled from 'styled-components';
import image1 from '../../images/picture21.png';
import image2x from '../../images/picture21@2x.png';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 28px 36px 36px;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const BackgroundWrapper = styled.div`
  width: 308px;
  height: 168px;
  background-image: url(${image1});

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${image2x});
  }
`;
export const Rectangle = styled.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  margin-top: 18px;
`;
export const ImageBlock = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 174px;
  border: 8px solid #ebd8ff;
  color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
  & img {
    width: 100%;
    height: auto;
    border-radius: 85.9232px;
    position: center;
  }
`;
export const TextTweets = styled.div`
  margin-top: 62px;
`;
export const FollowersTweets = styled.div`
  margin-top: 16px;
`;
export const LogoWrapper = styled.div`
  position: absolute;
  display: inline-block;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  z-index: 1;
`;

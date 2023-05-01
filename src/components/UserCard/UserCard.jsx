import {
  Wrapper,
  BackgroundWrapper,
  Rectangle,
  ImageBlock,
  FollowersTweets,
  TextTweets,
  LogoWrapper,
} from './UserCard.styled';
import logo from '../../images/Logo.png';
import { useRef, useEffect } from 'react';
import { Button } from 'components/Button/Button';
import { scrollToElem } from 'helpers/scrollToElem';

export const UserCard = ({
  user: { id, avatar, tweets, followers },
  arr,
  setArr,
}) => {
  const [plus] = arr.filter(item => item.id === id).map(item => item.plus);

  const isFollow = arr.find(item => item.id === id);

  const imgRef = useRef();
  useEffect(() => {
    if (!imgRef.current) return;
    scrollToElem(imgRef.current, 90);
  }, []);
  const toggle = () => {
    if (!isFollow) {
      const plus = Number(followers) + 1;

      setArr(prev => [...prev, { id, plus }]);

      return;
    } else {
      const arr2 = arr.filter(item => item.id !== id);
      setArr(arr2);
      localStorage.setItem('followings', JSON.stringify(arr2));
      return;
    }
  };

  localStorage.setItem('followings', JSON.stringify(arr));

  const followersComma = String(plus ? plus : followers).replace(
    /(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g,
    '$1,'
  );
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <img src={logo} alt="logo"></img>
        </LogoWrapper>
        <BackgroundWrapper />
        <Rectangle />
        <ImageBlock>
          <img
            src={avatar}
            alt="user avatar"
            ref={imgRef ? imgRef : null}
          ></img>
        </ImageBlock>
        <TextTweets>{tweets} TWEETS</TextTweets>
        <FollowersTweets>{followersComma} FOLLOWERS</FollowersTweets>
        {isFollow ? (
          <Button
            type="button"
            text="FOLLOWING"
            styled="green"
            onClick={toggle}
          />
        ) : (
          <Button type="button" text="FOLLOW" styled="pink" onClick={toggle} />
        )}
      </Wrapper>
    </>
  );
};

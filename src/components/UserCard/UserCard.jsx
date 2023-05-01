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
import { useRef, useEffect, useState } from 'react';
import { Button } from 'components/Button/Button';
import { scrollToElem } from 'helpers/scrollToElem';

export const UserCard = ({ user: { id, avatar, tweets, followers } }) => {
  const [arr, setArr] = useState(() => {
    return JSON.parse(localStorage.getItem('followings')) || [];
  });

  const [plus] = arr.filter(item => item.id === id).map(item => item.plus);
  const [updatedFollowers, setUpdatedFollowers] = useState(plus ?? followers);

  const isFollow = arr.find(item => item.id === id);

  const imgRef = useRef();
  useEffect(() => {
    if (!imgRef.current) return;
    scrollToElem(imgRef.current, 90);
  }, []);
  const toggle = () => {
    if (!isFollow) {
      const plus = Number(followers) + 1;
      setUpdatedFollowers(plus);
      arr.push({ id, plus });
      setArr(arr);
      localStorage.setItem('followings', JSON.stringify(arr));
    } else {
      setUpdatedFollowers(prev => Number(prev) - 1);
      const arr2 = arr.filter(item => item.id !== id);
      setArr(arr2);
      localStorage.setItem('followings', JSON.stringify(arr2));
      return;
    }
  };

  const followersComma = String(updatedFollowers).replace(
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

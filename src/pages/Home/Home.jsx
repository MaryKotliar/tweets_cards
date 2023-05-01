import { Container } from 'components/Container/Container';
import { Text, Link } from './Home.styled';
export const Home = () => {
  return (
    <Container>
      <Text>
        Welcome! <Link to="/tweets">Here</Link> you can see tweetcards. Please
        choose necessary option in select. Enjoy :){' '}
      </Text>
    </Container>
  );
};

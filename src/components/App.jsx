import { GlobalStyle } from './GlobalStyle';
import { Tweets } from 'pages/Tweets/Tweets';
import { Home } from 'pages/Home/Home';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tweets" element={<Tweets />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};

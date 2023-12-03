import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Tweets } from 'pages/Tweets/Tweets';
import { SharedLayout } from 'components/SharedLayout/SharedLayout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;

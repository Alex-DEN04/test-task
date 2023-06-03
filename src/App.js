import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Tweets } from 'pages/Tweets/Tweets';
import { AppBar } from 'components/AppBar';

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;

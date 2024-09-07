import { Global, Main } from './App.styles';
import CatList from './features/cats/CatList';
import NavBar from './features/navbar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <Global />
      <Main>
        <NavBar />
        <Routes>
          <Route path="/" element={<CatList />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;

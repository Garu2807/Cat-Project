import { useEffect } from 'react';
import { Main } from './App.styles';
import CatList from './features/cats/CatList';
import { useAppDispatch } from './features/store';
import { getCats } from './features/cats/CatSlice';

function App(): JSX.Element {
  return (
    <>
      <Main>
        <CatList />
      </Main>
    </>
  );
}

export default App;

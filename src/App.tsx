import { FC } from 'react';
import Routing from './pages';
import AppWrapper from './components/AppWrapper/AppWrapper';

const App:FC=()=> {
    return (
      <AppWrapper>
        <Routing />
       </AppWrapper>
    )
  
}

export default App;

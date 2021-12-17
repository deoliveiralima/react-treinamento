
import React,{useState, useReducer, useContext} from 'react';

import PanielAtividade from './components/atividades/PainelAtividade';
import PainelLink from './components/links/PainelLink';
import appReducer  from './reducers';
import Opcao from './components/opcoes/Opcao';

import { StateContext } from './context';

function App() {
  const [state, dispatch] = useReducer(appReducer,{links: [], atividades : [] })

  const {links, atividades} = state
  
  console.log(links)
  return ( 

    
     <StateContext.Provider value={{state, dispatch}}> 

     <Opcao/>
     </StateContext.Provider>
    
  );
}

export default App;

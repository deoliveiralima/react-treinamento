
import React,{useState, useReducer} from 'react';

import PanielAtividade from './components/atividades/PainelAtividade';
import PainelLink from './components/links/PainelLink';
import appReducer  from './reducers';
import Opcao from './components/opcoes/Opcao';
function App() {
  const [state, dispatch] = useReducer(appReducer,{links:[], atividades:[] })
 
  const {links, atividades} = state
  console.log('em App')
  console.log(links)
  
 
  return ( 

    <div className="App">
      <Opcao dispatch={dispatch}/>

     <PainelLink dispatch={dispatch} links={links} />
     
    <PanielAtividade dispatch={dispatch} atividade={atividades}/>
    </div>
  );
}

export default App;

import React,{useContext} from "react";

import CadastroAtividade from "./CadastroAtividade";
import ExibirAtividade from "./ExibirAtividade";

import { StateContext } from "../../context";


export default function PanielAtividade(){
    const {state} = useContext(StateContext)
    const {atividades} = state

    return(
        <React.Fragment>
            <CadastroAtividade  />
           
            
             { atividades.length>0 && <ExibirAtividade />}
            

        </React.Fragment>
    )


}
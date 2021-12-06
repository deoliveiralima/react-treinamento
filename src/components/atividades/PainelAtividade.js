import React,{useState} from "react";
import CadastroAtividade from "./CadastroAtividade";
import ExibirAtividade from "./ExibirAtividade";


export default function PanielAtividade(){

    const [atividade, setAtividade] = useState([])
    return(
        <React.Fragment>
            <CadastroAtividade  atividade={atividade} setAtividade={setAtividade} />

            {
            atividade.length>0 && <ExibirAtividade atividade={atividade}/>
            }

        </React.Fragment>
    )


}
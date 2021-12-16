import React,{useContext} from "react";
import { StateContext } from "../../context";

export default function ExibirAtividade(){
    
    const {state} = useContext(StateContext)
    const {atividades} = state

    if(atividades){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descricao</th>
                        </tr>
                    </thead>
                    <tbody>
                    { atividades.map( (item, i) => 

                        <tr key={i}>
                            <td scope="row">{i}</td>
                            <td>{item.nome_atividade}</td>
                            <td>{item.descricao_atividade}</td>
                        </tr>
                   ) 
                    
                    }
                      
                    </tbody>
                </table>
            </div>
        )
    }else{
        return(
            <div>
               
            </div>
        )
    }

}
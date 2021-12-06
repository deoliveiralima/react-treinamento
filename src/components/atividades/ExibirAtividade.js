import React from "react";


export default function ExibirAtividade({atividade}){
   

    if(atividade){
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
                    { atividade.map( (item, i) => 

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
                Nao encontrado
            </div>
        )
    }

}
import React from "react";


export default function ExibirLink({links}){
    console.log(links)

    if(links){
        return(
            <div>
                
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                      
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
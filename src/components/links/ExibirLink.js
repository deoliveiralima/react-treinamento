import React from "react";
import { useContext } from "react/cjs/react.development";
import { StateContext } from "../../context";


export default function ExibirLink(){

    const {state} = useContext(StateContext)
    const {links} = state

    

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
                    { links.map( (item, i) => 

                    <tr key={i}>
                        <td scope="row">{i}</td>
                        <td>{item.nome_link}</td>
                        <td>{item.url_link}</td>
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
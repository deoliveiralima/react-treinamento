import React from "react";


export default function Exibir({link}){
    console.log(link)

    if(link){
        return(
            <div>
                {link}
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
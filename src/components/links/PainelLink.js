import React,{useState} from "react";
import CadastroLink from "./CadastroLink";
import ExibirLink from "./ExibirLink";



export default function PainelLink({dispatch, links = []}){

    
    return(
        <React.Fragment>
            <CadastroLink dispatch={dispatch}  />

            <ExibirLink links = {links}/>

        </React.Fragment>
    )


}
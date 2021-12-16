import React,{useContext} from "react";
import CadastroLink from "./CadastroLink";
import ExibirLink from "./ExibirLink";

import { StateContext } from "../../context";


export default function PainelLink(){
    const {state} = useContext(StateContext)
    const {links}  = state

   

    
    return(
        <React.Fragment>
            
            <CadastroLink />

            { links.length>0 && <ExibirLink /> }

        </React.Fragment>
    )


}
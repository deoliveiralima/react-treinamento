import React from "react";
import { useContext } from "react/cjs/react.development";
import { StateContext } from "../../context";



export default function CadastroAtividade(){

    const {dispatch} = useContext(StateContext)

    
    function handleSubmit(evt){
        evt.preventDefault()

        const nome_atividade = evt.target.nome_atividade.value
        const descricao_atividade = evt.target.descricao_atividade.value
       
        dispatch({type:'ATIVIDADE', nome_atividade: nome_atividade, descricao_atividade: descricao_atividade})

    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome da Atividae</label>
            <input type="text" name="nome_atividade" id="id_atividade"/>

            <label htmlFor="nome">Descricao da Atividae</label>
            <input type="text" name="descricao_atividade" id="descricao_atividade"/>
            
            <input type="submit" value="Enviar"/>

        </form>

       

        </>
    )
}
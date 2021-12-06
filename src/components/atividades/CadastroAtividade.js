import React from "react";


let send = false
export default function CadastroAtividade({atividade, setAtividade}){
    
    function handleSubmit(evt){
        evt.preventDefault()

        const nome_atividade = evt.target.nome_atividade.value
        const descricao_atividade = evt.target.descricao_atividade.value

        setAtividade(atividade => [...atividade ,{nome_atividade: nome_atividade, descricao_atividade: descricao_atividade}])
        send = true

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
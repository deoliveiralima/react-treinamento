import React, {useState} from "react"
import PanielAtividade from "../atividades/PainelAtividade"
import PainelLink from "../links/PainelLink"

export default function Opcao({setOpcao}){
    const [painel, setPainel] = useState('')



    function abrePainelAtividade(){
        setPainel('atividade')
       
    }

    function abrePainelLink(){
        setPainel('link')
    }

    function handleSubmit(evt){
        evt.preventDefault()
        
        const opcao = evt.target.opcao.value

        setOpcao = opcao
        console.log(opcao)


    }

    return(

        <>

            <button onClick={abrePainelAtividade}> Atividades </button> 
            <button onClick={abrePainelLink}> Links</button>
            {painel === 'atividade' && <PanielAtividade/>}
            {painel === 'link' && <PainelLink/>}

        </>
    )
}
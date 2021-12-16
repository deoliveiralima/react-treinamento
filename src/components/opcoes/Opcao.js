import React from "react"


export default function Opcao({setOpcao}){

    function handleSubmit(evt){
        evt.preventDefault()
        
        const opcao = evt.target.opcao.value

        setOpcao = opcao
        console.log(opcao)


    }

    return(

        <>
            <form onSubmit = {handleSubmit}>
                <input type='radio' name='opcao' id='link' value='link' />
                <label htmlFor='link'>Link</label>

                <input type='radio' name='opcao' value='atividade' id='atividade'/>
                <label htmlFor='link'>Atividade</label>
                
                <input type='submit' value="Escolher"/>                
            </form>
        </>
    )
}
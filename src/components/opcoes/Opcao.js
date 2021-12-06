import React from "react"


export default function Opcao({dispatch}){

    function handleSubmit(evt){
        evt.preventDefault()
        
        const opcao = evt.target.opcao.value

        opcao === 'link' ? dispatch({type:'LINK'}) : dispatch({type: 'ATIVIDADE'})
        console.log(dispatch.type)
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
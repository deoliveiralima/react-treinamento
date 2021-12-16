import React,{useContext} from "react";
import { StateContext } from "../../context";

export default function CadastroLink(){

    const {dispatch} = useContext(StateContext)
    

    function handleSubmit(evt){
   
        evt.preventDefault()
        

        const link_name = evt.target.link_name.value
        const link_url = evt.target.link_url.value

        //atualizar array com react hook
        //setLink(link => [...link ,link_name, link_url])
        
        dispatch({type: 'LINK', link_name: link_name, link_url: link_url })


    }

    return(
    <div> 
        <form onSubmit = {handleSubmit}>
            <label htmlFor='link'>Nome</label>
            <input type='text'  name='link_name' id='link_name' />
            <label htmlFor='link'>URL</label>
            <input type='text'  name='link_url' id='link_url' />
            <input type='submit' value='enviar'/>
        </form>
      
    </div>
    )
}
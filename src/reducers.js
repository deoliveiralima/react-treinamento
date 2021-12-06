// function linkReducer(state, action){
//     switch(action.type){
//         case 'ATIVIDADE'
//     }
import React from "react"
import PanielAtividade from "./components/atividades/PainelAtividade"
import PainelLink from "./components/links/PainelLink"

// }

// function atividadeReducer(state,){

// }
function linkReducer(state, action){
    switch(action.type){
        case 'LINK':

            const newLink = {link_name: action.link_name, link_url: action.link_url}

            return [newLink, ...state]
    }

}

export default function appReducer(state, action){

    return{
        links: linkReducer(state.links, action),

    }


    // switch(action.type){
    //     case 'ATIVIDADE':
    //         console.log('atividade')
    //         return <div> <PainelLink /> </div>
    //     case 'LINK':
    //         console.log(action.link_name)
    //         console.log(state.links)
    //         const newLink = {link_name: action.link_name, link_url: action.link_url}
    //         //(link => [...link ,link_name, link_url])
            


    //         return state

    }




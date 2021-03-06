function linkReducer(state, action){
    switch(action.type){
        case 'LINK':

            const newLink = {nome_link: action.link_name, url_link: action.link_url}
            

            return [newLink, ...state]

            default:
                return state
    }

}

function atividadeReducer(state, action){
    switch(action.type){
        case 'ATIVIDADE':

            const newAtividade = {nome_atividade: action.nome_atividade, descricao_atividade: action.descricao_atividade}
            

            return [newAtividade, ...state]
        default:
            return state
    }

}

export default function appReducer(state, action){
    
    return{
        links: linkReducer(state.links, action),
        atividades: atividadeReducer(state.atividades, action)

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




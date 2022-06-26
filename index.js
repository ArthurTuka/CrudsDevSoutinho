const redeSocial = {
    user: 
    [
        {
            username: 'TukaDaLive'
        },
    ], 
    posts: [
        {
            id:1,
            dono:'TukaDaLive',
            conteudo: 'Meu primeiro post'
        }
    ]
};



//criar
function criaPost(dados){

    redeSocial.posts.push({
        id: redeSocial.posts.length +1, 
        dono: dados.dono,
        conteudo: dados.conteudo
    })

}

criaPost({dono: 'TukaDaLive', conteudo:'conteudo 2'});

//ler

function pegaPosts(){
    return redeSocial.posts
}


//update

function atualizaPost(id, novoConteudo){
    const postQueVaiAtu = pegaPosts().find((posts)=> {
        return posts.id === id;
    })
    postQueVaiAtu.conteudo = novoConteudo    
}

// delete

function apagaPost(id){
    const postsAtualizados = pegaPosts().filter((posts)=> {
        return posts.id !== id;
        
})
    redeSocial.posts = postsAtualizados;
}
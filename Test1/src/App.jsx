import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    const undiletante = { 
        initialIsFollowing: true, 
        userName:'@undiletante', 
        name: 'Jesús Antonio López Juscamaita'
    }

    const usuarios = [
        {
            isFollowing: true, 
            userName:'@undiletante', 
            name: 'Jesús Antonio López Juscamaita'
        }, 
        {
            isFollowing: true, 
            userName:'midudev', 
            name: 'Miguel Ángel Durán'
        }, 
        {
            isFollowing: false, 
            userName:'pheralb', 
            name: 'Pablo H'
        }, 
        {
            isFollowing: false, 
            userName:'TMChein', 
            name: 'Tomás'
        }, 
    ]

    return(
        <section className='App'>
            {/*
            <TwitterFollowCard 
                name = "Midu"
                userName = "@midudev" 
                initialIsFollowing={false}
            />
            <TwitterFollowCard {...undiletante}/>
            <TwitterFollowCard 
                name = "Elon Musk"
                userName = "@elonmusk"
            />
            <TwitterFollowCard 
                name = "Vanderhart"
                initialIsFollowing
            />
            */}

            {
                /*usuarios.map(user => {
                    const { userName, name, isFollowing } = user*/
                usuarios.map(({ userName, name, isFollowing }) => {
                    return(
                        <TwitterFollowCard 
                            key = { userName }
                            name = { name }
                            userName = { userName }
                            initialIsFollowing={ isFollowing }
                        />
                    )
                })
            }
            
        </section>        
    );
}
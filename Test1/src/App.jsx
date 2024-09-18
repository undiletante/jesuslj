import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    const undiletante = { 
        initialIsFollowing: true, 
        userName:'@undiletante', 
        name: 'Jesús Antonio López Juscamaita'
    }

    return(
        <section className='App'>
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
        </section>        
    );
}
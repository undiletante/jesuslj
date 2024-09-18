import { useState } from "react"

export function TwitterFollowCard({ userName = 'unknown', name }) {
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    const [isFollowing, setIsFollowing] = useState(false)

    const imageSrc = `https://unavatar.io/${userName}`
    const texto = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    // const userName2 = `@${userName}`

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={imageSrc}  
                    alt={name}
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {texto}
                </button>
            </aside>
        </article>
    );
}
export default function Avatars ({avatars}){
    return(
        <div>
            <h1 className="mb-5 text-center +">Avatars</h1>
            {/* <p>All of the Avatars that appeared in the show :</p> */}
            <ul style={{display : 'grid', 'grid-template-columns' : '1fr 1fr 1fr', 'grid-gap' : '4em'}}>    
                {avatars.map(avatar => {
                    return(
                        <li key={avatar.id}>
                            <p>{ avatar.title}</p>
                            <img src={avatar.thumbnailUrl} width="100%" alt="" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export async function getStaticProps(){
    const avatars = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());
    return {
        props: {
            avatars
        }
    }
}
export default function CoreConcepts(props) {
    return (
        <div 
        >
            <li>
                <img src={props.image} alt="" />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </li>
        </div >
    )
}

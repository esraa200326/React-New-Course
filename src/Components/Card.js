export default function Card(props){
    return (
        <div>
            <img src="{props.pic}" alt="pic"></img>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <h4><i class="fa-solid fa-star" />{props.review}</h4>
            <h4>{props.Price}</h4>
        </div>
    );
};
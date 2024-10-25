import './obraz.css';

function Pozycja(props){ return(
<div className='pos'>
    <img src={props.wypis.graf}/>
    <p className='tekst1'>{props.wypis.nr}</p>
    <p className='tekst1'>{props.wypis.nazwa}</p>
    <p className='tekst1'>{props.wypis.opis}</p>
    <p className='tekst2'>{props.wypis.cena}</p>
</div>
);}
export default Pozycja;
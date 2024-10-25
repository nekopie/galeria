import './App.css';
import zdj1 from './zdj1.jpg';
import zdj2 from './zdj2.jpg';
import zdj3 from './zdj3.jpg';
import zdj4 from './zdj4.jpg';
import zdj5 from './zdj5.jpg';
import zdj6 from './zdj6.jpg';
import zdj7 from './zdj7.jpg';
import zdj8 from './zdj8.png';
import Pozycja from './obraz.jsx';

const tablica=[
  {nr:"1", graf:zdj1, nazwa:"kot", opis:"obraz kota",cena:"10000zł" },
  {nr:"2", graf:zdj2, nazwa:"pies", opis:"obraz psa",cena:"670000zł" },
  {nr:"3", graf:zdj3, nazwa:"jeż", opis:"obraz jeża",cena:"500zł" },
  {nr:"4", graf:zdj4, nazwa:"chomik", opis:"obraz chomika",cena:"5zł" },
  {nr:"5", graf:zdj5, nazwa:"golab", opis:"obraz golebia",cena:"100zł" },
  {nr:"6", graf:zdj6, nazwa:"wkurzajacy ptak", opis:"obraz wkurzajacego ptaka",cena:"1zł" },
  {nr:"7", graf:zdj7, nazwa:"malpa", opis:"obraz malpy",cena:"999zł" },
  {nr:"8", graf:zdj8, nazwa:"mnich", opis:"obraz mnicha",cena:"5555zł" },]
function App() {
  return (
    <div className='strona'>
      <Pozycja wypis={tablica[0]}/>
      <Pozycja wypis={tablica[1]}/>
      <Pozycja wypis={tablica[2]}/>
      <Pozycja wypis={tablica[3]}/>
      <Pozycja wypis={tablica[4]}/>
      <Pozycja wypis={tablica[5]}/>
      <Pozycja wypis={tablica[6]}/>
      <Pozycja wypis={tablica[7]}/>
    </div>
  );
}

export default App;

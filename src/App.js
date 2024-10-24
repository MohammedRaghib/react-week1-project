import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Hobbit from './hobbit.jpg';
import Percy from './percy_jackson.jpg';
import Harry_Potter from './Harry_Potter.jpg';
import Lord_of_the_Rings from './Lord_of_the_Rings.jpg';
import Chronicles_of_Narnia from './Chronicles_of_Narnia.jpg';
import Hunger_Games from './Hunger_Games.jpg';
import Divergent from './Divergent.jpg';

function App() {
  const books = [
    {
      img: Percy,
      title: 'Percy Jackson - The Last Olympian',
      description: `A brave young boy setting out to destroy the now awakened Lord of the Titans: Kronos.`,
    },
    {
      img: Hobbit,
      title: 'The Hobbit',
      description: `A book about a hobbit.`,
    },
    {
      img: Harry_Potter,
      title: 'Harry Potter and the Sorcerers Stone',
      description: 'A young wizard discovers he is the chosen one to defeat the evil Lord Voldemort.',
    },
    {
      img: Lord_of_the_Rings,
      title: 'The Lord of the Rings',
      description: 'A fellowship of hobbits, elves, dwarves, men, and wizards set out to destroy the One Ring and defeat the Dark Lord Sauron.',
    },
    {
      img: Chronicles_of_Narnia,
      title: 'The Chronicles of Narnia',
      description: 'A series of fantasy novels about children who discover a magical land through a wardrobe, a painting, and a wardrobe.',
    },
    {
      img: Hunger_Games,
      title: 'The Hunger Games',
      description: 'A dystopian novel about a girl who volunteers to take her younger sisters place in a deadly televised competition.',
    },
    {
      img: Divergent,
      title: 'Divergent',
      description: 'A dystopian novel about a girl who doesnt fit into any of the five factions in her society.',
    }
  ];

  return (
    <div className="App">
      <Header />
      <div className='cards'>
        {books.map((book, index) => (
          <Main key={index} book={book} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Hobbit from './hobbit.jpg';
import Percy from './percy_jackson.jpg';

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
  ];

  return (
    <div className="App">
      <Header />
      {books.map((book, index) => (
        <Main key={index} book={book} />
      ))}
      <Footer />
    </div>
  );
}

export default App;

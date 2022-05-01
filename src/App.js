import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import notes from './notes'
import Login from './components/Login';


function App() {
  const isLoggedIn = false;

  return (
    <div className="App">
      <Header />
      {isLoggedIn === true
        ? <div className='noteGrid'>
          {notes.map(note => (
            <Note
              key={note.key}
              note={note}
            />
          ))}
        </div>
        : <Login />
      }

      <Footer />
    </div>
  );
}

export default App;

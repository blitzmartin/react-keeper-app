import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import notes from './notes'
import UserAuth from './UserAuth';



function App() {


  return (
    <div className="App">

      <Header />
      <UserAuth />

      <div className='noteGrid'>
        {notes.map(note => (
          <Note
            key={note.key}
            note={note}
          />
        ))}
      </div>


      <Footer />

    </div>
  );
}

export default App;

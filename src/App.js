import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import notes from './notes'



function App() {
  return (
    <div className="App">
      <Header />
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

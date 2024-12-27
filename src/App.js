
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Home from './pages/Home';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert />
        <div className='container-fluid py-4' style={{ minHeight: window.innerHeight - 112 }}>
          <Home />
        </div>
        <Footer />
      </NoteState>
    </>
  );
}

export default App;

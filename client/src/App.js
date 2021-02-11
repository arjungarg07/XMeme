import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MemeForm from './components/memeForm';
import Header from './components/header';
import Meme from './components/meme';

function App() {
  return (
    <div className = 'container'>
    <Header/>
    <MemeForm/>
    <Meme/>
    </div>
  );
}

export default App;


import './App.css';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
<NavBar/>
<Banner/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;

import logo from './assets/logo.svg';
import './styles/App.css';
import PersonalDetails from './components/PersonalDetails';
import ProfessionalWork from './components/ProfessionalWork';
import PersonalProjects from './components/PersonalProjects';

function App() {
  return (
    <div className="App">
      <PersonalDetails />
      <ProfessionalWork />
      <PersonalProjects />
    </div>
  );
}

export default App;

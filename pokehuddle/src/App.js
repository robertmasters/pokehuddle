import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/LoginRegister/Header';
import RoutesApp from './RoutesApp';

function App() {
    return (
        <Router>
            <div data-testid="app" className="main-container">
                <div className="Route-container">
                    <Header />
                    <RoutesApp />
                    <a target="_blank" className = "link" rel="noreferrer" href="https://github.com/robertmasters/pokehuddle/blob/main/Application_build_plan.md">Front End repository </a>with roadmap for app
                    <div> </div>
                    <a target="_blank" className = "link" rel="noreferrer" href="https://github.com/robertmasters/pokehuddleSpringApp">REST API repository </a>

                </div>
            </div>
        </Router>
    );
}

export default App;

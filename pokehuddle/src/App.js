import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/LoginRegister/Header';


function App() {
    return (
        <Router>
            <div data-testid="app" className="main-container">
                <div className="Route-container">
                    <Header />
                    <a target="_blank" className = "link" rel="noreferrer" href="https://github.com/robertmasters/pokehuddle/blob/main/Application_build_plan.md">Github  </a>with roadmap for app
                </div>
            </div>
        </Router>
    );
}

export default App;

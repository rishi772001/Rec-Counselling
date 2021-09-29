import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Student from './pages/Student';
import Staff from "./pages/Staff";
import Admin from "./pages/Admin";

function App() {
    return (
        <div>
            <Router>
                <Route exact component={Student} path="/"/>
                <Route exact component={Staff} path="/staff"/>
                <Route exact component={Admin} path="/admin"/>
            </Router>
        </div>
    );
}

export default App;

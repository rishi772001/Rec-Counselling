import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Student from './pages/Student';
function App() {
  return (
    <div>
      <Router>
        <Route component={Student} path="/"></Route>
      </Router>
    </div>
  );
}

export default App;

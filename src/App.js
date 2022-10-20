import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gradebook from './components/Gradebook';
import Assignment from './components/Assignment';
import Enrollment from './components/Enrollment';
import StudentGrades from './components/StudentGrades';
import Login from './components/Login';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Gradebook
           </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/assignment' component={Assignment} />
        <Route path='/studentgrades' component={StudentGrades} />
        <Route path='/gradebook' component={Gradebook} />
        <Route path='/enrollment' component={Enrollment} />

       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
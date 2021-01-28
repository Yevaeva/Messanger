import './App.css';
import HomePage from './components/homePage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom'
import Register from './components/register/Register'
import SignIn from './components/signIn/SignIn'
import NotFound from './components/notFound/NotFound'



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/register' exact component={Register} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/404' exact component={NotFound} />
        <Redirect to='/404'/>
      </Switch>
    </div>
  );
}

export default App;


import './App.css';
import HomePage from './components/homePage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom'
import Register from './components/register/Register'
import SignIn from './components/signIn/SignIn'
import NotFound from './components/notFound/NotFound'
import ChatPage from './components/chatPage/ChatPage';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/register' exact component={Register} />
        <Route path='/sign-in' exact component={SignIn} />
        <Route path='/logged' exact component={ChatPage} />
        <Route path='/404' exact component={NotFound} />
        <Redirect to='/404'/>
      </Switch>
    </div>
  );
}

export default App;

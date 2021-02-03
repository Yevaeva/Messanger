
import './App.css';
import HomePage from './components/homePage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom'
import Register from './components/register/Register'
import SignIn from './components/signIn/SignIn'
import NotFound from './components/notFound/NotFound'
import ChatPage from './components/chatPage/ChatPage';
import DashboardPage from './components/dashboard/Dashboard';
import IndexPage from './components/index/Index';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={HomePage} />
        {/* <Route path="/" component={IndexPage} exact /> */}
        <Route path='/register' exact component={Register} />
        <Route path='/sign-in' exact component={SignIn} />
        <Route path='/logged:id' exact component={ChatPage} />
        <Route path='/dashboard' exact component={DashboardPage} />
        <Route path='/404' exact component={NotFound} />
        <Redirect to='/404'/>
      </Switch>
    </div>
  );
}

export default App;

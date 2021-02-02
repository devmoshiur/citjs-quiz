import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import Create from './components/admin/question/Create';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import ExamPapper from './components/exam/ExamPapper';
import HomeBanner from './components/layout/HomeBanner';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path="/" exact component={HomeBanner} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/controlroom" component={ExamPapper} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/admin" exact component={AdminDashboard} />
            <Route path="/admin/create" component={Create} />
          </Switch>        
    </BrowserRouter>
  );
}

export default App;

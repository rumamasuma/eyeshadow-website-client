
import './App.css';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";

import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Orders from './pages/Orders/Orders/Orders';
import Registration from './pages/Login/Registration/Registration';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import PayOrder from './pages/Dashboard/PayOrder/PayOrder';
import Review from './pages/Dashboard/Review/Review';

function App() {
  return (
    <div className="App">
 <AuthProvider>
 <Router>
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/login'>
      <Login></Login>
      </Route>
      <Route path='/registration'>
     <Registration></Registration>
      </Route>
      <PrivateRoute path='/products/:productId'>
     <Orders></Orders>
      </PrivateRoute>
      <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>
      <PrivateRoute path='/orders'>
        <MyOrders></MyOrders>
      </PrivateRoute>
      <Route path='/payOrder'>
        <PayOrder></PayOrder>
      </Route>
      <Route path='/review'>
       <Review></Review>
      </Route>
    </Switch>
  </Router>
 </AuthProvider>
    </div>
  );
}

export default App;

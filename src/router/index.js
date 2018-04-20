import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../component/Spin/index'
const Home = Loadable({
  loader: () => import('../pages/home/home'),
  loading: Loading,
})
const Login_Box = Loadable({
  loader: () => import('../pages/login/index'),
  loading: Loading,
});
class Router extends React.Component{
  render() {
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login_Box}/>
      </Switch>
    </BrowserRouter>
    )
  }
}

  


export default Router
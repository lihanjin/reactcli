import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>
const Home = Loadable({
  loader: () => import('../pages/home/home'),
  loading: Loading,
});
class Router extends React.Component{
  render() {
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
    )
  }
}

  


export default Router
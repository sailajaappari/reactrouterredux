import { Router, Route, browserHistory } from 'react-router'
import { MainLayout, Home } from './presentcomp'
import { UserListContainer } from './containercomp'

export const router = function () {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <Route path="home" component={Home} />
        <Route path="users" component={UserListContainer} />
         
      </Route>
    </Router>
  );
}
 

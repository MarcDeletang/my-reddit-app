import React from 'react'
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RedditCallBackContainer from './container/RedditCallBackContainer';
import Login from './component/Login';
import Home from './container/Home';

const Root = ({store}) => {
 return (
     <Provider store={store}>
       <BrowserRouter>
         <Switch>
           <Route exact path={"/"} component={Login}/>
           <Route exact path={"/authorize_callback/"} component={RedditCallBackContainer} />
           <Route exact path={"/home"} component={Home}/>
         </Switch>
       </BrowserRouter>
     </Provider>
 );
};

export default Root;
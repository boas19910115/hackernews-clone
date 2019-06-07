import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Comments from './Comments'

class Routes extends Component{
    render(){
        return(
           <Router>
               {/* <Link to='/comments'>Comments</Link> */}
               <Route path='/comments' component={Comments} />
           </Router> 
        )
    }
}

export default Routes;
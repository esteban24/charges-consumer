import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Create from './Create';
import Show from './Show';
import Index from './Index';

class Header extends Component {
  	render() {
    	return (
    		<Router>
			  	<div>
				  	<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  		<Link className="navbar-brand" to="/">Home</Link>
				  		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="navbar-toggler-icon"></span>
						</button>
				  		<div className="collapse navbar-collapse" id="navbarSupportedContent">
						    <ul className="navbar-nav mr-auto">
						      	<li className="nav-item active">
				  					<Link className="nav-link" to="/charges">Charges</Link>
						      	</li>
						    </ul>
						</div>
				    </nav>
				    <div className="container-fluid">
				    	<Route exact path="/" component={Index}/>
				    	<Route exact path="/charges" component={Home}/>
				      	<Route exact path="/charges/new" component={Create}/>
				      	<Route exact path="/charges/show/:chargeId" component={Show} />
				    </div>
			    </div>
			  </Router>
    	);
	}
}

export default Header;

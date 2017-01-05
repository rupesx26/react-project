import React from 'react';
import { IndexLink, Link } from 'react-router';
import Title from './Title';


class Header extends React.Component {
  render() {
    const active = { borderBottomColor: '#3f51b5', backgroundColor: '#f1f1f1' };
    console.log(this.props);
    return (
     <div>
     <div>
       <Title title={this.props.title} />
     </div>
      <nav className="navbar navbar-default navbar-static-top">
      
       <div>{this.props.title}</div>
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">Rupesh Mayekar</IndexLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><IndexLink to="/" activeStyle={active}>Home</IndexLink></li>
               <li><Link to="/about" activeStyle={active}>About me</Link></li>
               <li><Link to="/portfolio" activeStyle={active}>Portfolio</Link></li>
              <li><Link to="/contact" activeStyle={active}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default Header;
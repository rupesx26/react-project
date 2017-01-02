import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router';



// class Layout extends React.Component {
//   render() {
//    // debugger
//     return (
//      <Header/>
//       <div className="app-container">
//         <div className="app-content">{this.props.children}</div>
//       </div>
//       <Footer/>
//     );
//   }
// }

// export default Layout;




export default class Layout extends React.Component {
  render() {
    return (
      <div>
      
      <div className="app-container">
        <div className="app-content">{this.props.children}</div>
      </div>
       
      </div>
    );
  }
}


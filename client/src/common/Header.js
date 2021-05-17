import React from 'react';
import {Link} from 'react-router-dom';
const Header = () =>
  (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <Link className="navbar-brand" to="/">Quotation</Link>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button>
   </nav>
  )

export default Header;
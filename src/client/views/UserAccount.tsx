import * as React from 'react';
import Image from 'react-bootstrap/Image'


const UserAccount = () => {
  
  return(
   <>
    <div>
    <title>User Account</title>
    
    <link rel="icon" href="/favicon.ico"></link>
    <link  rel="noopener noreferer" href="https://mysite.com/mypage"></link>



  
        <span className="navbar-brand-text">Performance User Account</span>
  
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <h1 className="my-3">Bio</h1>
          <div className="form-group">
            <label htmlFor="exampleInput">Example label</label>
            <textarea className="form-control" id="exampleInput"></textarea>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a className="btn btn-primary" href="#">Log Out</a>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <p className="text-muted">&copy; 2021 Performance LLC.</p>
      </div>
    </footer>
  </>
  );
}

export default UserAccount;
    
      
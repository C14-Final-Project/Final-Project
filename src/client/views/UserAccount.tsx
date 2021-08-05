import * as React from 'react'



function UserAccount(props: any) {
  
  return(
   <>
    <div>
    <title>User Account</title>
    
    {/* <link rel="icon" href="/favicon.ico"></link>
    <link rel="_blank noopener noreferer" href="./"></link> */}



  
        <span className="navbar-brand-text">Performance User Account</span>
  
 
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
        
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <p className="text-muted">&copy; 2021 Performance LLC.</p>
      </div>
    </footer>
  </div>
  </>
  );
}

export default UserAccount;
    
      
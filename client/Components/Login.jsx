import React from 'react';

const LOGIN = props => (
  <div className="innerbox" id="loginBox">
    <div>
      Log In:
      <form> 
        <input type="text" id="userName" />
        <input type="text" id="password" />
      </form>
    </div>
    <div>
      SIGN UP:
      <form> 
        <input type="text" id="signUser" />
        <input type="text" id="signPass" />
      </form>
    </div>
  </div>
);
export default LOGIN;
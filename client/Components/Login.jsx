import React from 'react';

const LOGIN = ({
  username,
  password,
  login,
  signup
}) => (
  <div className="innerbox" id="loginBox">
    <div>
      LOG IN:
      <form onSubmit={login}>
        <input type="text" id="userName" value="Username" onChange={username}/>
        <input type="text" id="password" value="Password" onChange={password}/>
        <button className="logButton" type="submit">Submit</button>
      </form>
    </div>
    <div>
      SIGN UP:
      <form onSubmit={signup}> 
        <input type="text" id="signUser" value="Username" onChange={username}/>
        <input type="text" id="signPass" value="Password" onChange={password}/>
        <button className="logButton" type="submit">Submit</button>
      </form>
    </div>
  </div>
);
export default LOGIN;
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import Login from '../components/Login.jsx';
import UserContainer from './UserContainer.jsx';

const mapStateToProps = store => ({
  // add pertinent state here
  planList: store.lessons.planList,
  resultList: store.lessons.resultList,
  user: store.lessons.user,
  login: store.lessons.login
});

const mapDispatchToProps = dispatch => ({
  user
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let Display = [];
    const logComponent = <Login login={this.props.login} user={this.props.user}/>;
    const userContainer = <UserContainer planList={this.props.planList} resultList={this.props.resultList} user={this.props.user}/>
    console.log('login: ', this.props.login);
    if(this.props.login){
      Display.push(logComponent, userContainer);
    } else Display = logComponent;
    //Display = logComponent;

    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header"></h1>
          { Display }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
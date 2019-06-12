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
  
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let Display;
    const logComponent = <Login login={this.props.login} user={this.props.user}/>;
    const userComponent = <UserContainer planList={this.props.planList} resultList={this.props.resultList}/>
    if(login){
      Display = [logComponent, userComponent];
    } else Display = logComponent;

    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">Welcome to Lessonopedia</h1>
          {Display}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
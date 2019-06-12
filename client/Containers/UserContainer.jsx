import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file

import * as actions from '../actions/actions';
// import child components...
import Creator from '../components/Creator.jsx';
import Search from '../components/Search.jsx';

const mapStateToProps = store => ({
  // provide pertinent state here
  planList: store.lessons.planList,
  resultList: store.lessons.resultList
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addPlan: (user) => dispatch(actions.addPlan(user)),
  search: (keyword) => dispatch(actions.search(keyword)),
});

class UserContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="innerbox">
        <Creator addPlan={this.props.addPlan} />
        <Search planList={this.props.planList} resultList={this.props.resultList}/>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
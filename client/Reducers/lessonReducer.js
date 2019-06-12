import * as types from '../constants/actionTypes';

const initialState = {
  totalPlans: 0,
  resultList: [],
  planList: [],
  login: false,
  user: "",
  keyword: ""
};


const lessonsReducer = (state=initialState, action) => {
  Object.freeze(state);
  let planList;
  let totalPlans;
  let resultList;

  switch(action.type) {
    case types.ADD_PLAN:
      // increment lastMarketId and totalMarkets counters
      totalPlans = state.totalPlans + 1
      userPlans = //userPlans.length from database

      // create the new market object from provided data
      planList = state.planList.slice();
      const newPlan = {
          // what goes in here?
        title: title,
        materials: [],
        steps: {},
        domain:"",
        location: "",
        author: user,
      };
      //add new plan to database

      // push the name of plan onto the planList
      planList.push(newPlan.title);

      // return updated state
      return {
        ...state,
        planList,
        totalPlans,
      };

    case types.LOGIN:

      return {
        ...state,
        user: user,
        login: true
      }

    case types.RESULTS:
      //resultList = returnList from the database
      return {
        ...state,
        resultList
      }

    case types.SEARCH:
       return { ...state,
        keyword: keyword
      }

    default:
      return state;
  }
};

export default lessonsReducer;
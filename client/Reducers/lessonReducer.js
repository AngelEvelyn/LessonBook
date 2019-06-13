import * as types from '../constants/actionTypes';

const initialState = {
  totalPlans: 0,
  resultList: [],
  planList: [],
  login: false,
  username: '',
  password: '',
  userId: '',
  keyword: '',
  title: '',
  materials: '',
  steps: '',
  domain: '',
  location: '',
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

      // create the new market object from provided data
      planList = state.planList.slice();
      planList.push(action.payload.title);

      // return updated state
      return {
        ...state,
        planList,
        totalPlans,
      };

    case types.LOGIN:

      return {
        ...state,
        userId: action.payload,
        login: true
      }
    case types.USERNAME:

        return {
          ...state,
          username: action.payload,
        }

    case types.PASSWORD:

      return {
        ...state,
        password: action.payload,
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
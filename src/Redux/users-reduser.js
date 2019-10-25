const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

let initialState = {
  users: [],
  pageSize: 9,
  totalUsersCount:22,
  currentPage:2
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      };

    case SET_USERS:
      return {
        ...state, users: [action.users]
      };

      case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage:action.currentPage
      };

      case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount:action.count
      };

    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (num) => ({type: SET_CURRENT_PAGE, currentPage:num});
export const setTotalUserCountAC = (count) => ({type: SET_TOTAL_USER_COUNT, count});

export default usersReducer;
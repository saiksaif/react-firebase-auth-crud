const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        // console.log("LOGIN REDUCER")
        return {
          currentUser: action.payload,
        };
      }
      case "LOGOUT": {
        // console.log("LOGOUT REDUCER")
        return {
          currentUser: null,
        };
      }
      default:
        // console.log("DEFAULT REDUCER")
        return state;
    }
  };
  
  export default AuthReducer;
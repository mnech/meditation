function AuthReducer(state, { type, payload }) {
  switch (type) {
    case "LOGIN": {
      return {
        currentUser: payload,
      };
    }
    case "LOGOUT": {
      return {
        currentUser: null,
      };
    }
    default: {
      return { state };
    }
  }
}

export default AuthReducer;

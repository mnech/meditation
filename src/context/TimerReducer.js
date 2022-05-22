function TimerReducer(state, { type, payload }) {
  switch (type) {
    case "SET_TIME": {
      return {
        time: payload,
        secondsLeft: payload * 60,
        showSettings: false,
      };
    }
    case "STOP_TIMER": {
      return {
        ...state,
        secondsLeft: state.time * 60,
        showSettings: true,
      };
    }
    case "RESET_TIMER": {
      return {
        ...state,
        secondsLeft: state.time * 60,
      };
    }
    case "CHANGE_LEFT_TIME": {
      return {
        ...state,
        secondsLeft: payload,
      };
    }
    default: {
      return { state };
    }
  }
}

export default TimerReducer;

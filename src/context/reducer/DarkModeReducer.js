function DarkModeReducer(state, { type, payload }) {
  switch (type) {
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }
    default: {
      return { state };
    }
  }
}

export default DarkModeReducer;

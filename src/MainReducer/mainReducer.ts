import {
  RESET_CURRENT_WORDS,
  UPDATE_CURRENT_WORDS,
} from "../TypeScriptTypes/actionTypes";

const initialize: InitialStateType = {
  recentSearches: [],
  currentWords: [],
};

export default function mainReducer(
  state: StateType = initialize,
  action: ActionType
): StateType {
  switch (action.type) {
    case UPDATE_CURRENT_WORDS:
      if (action.payload !== undefined) {
        return {
          recentSearches: state.recentSearches.concat(action.payload),
          currentWords: [...action.payload],
        };
      } else {
        return state;
      }
    case RESET_CURRENT_WORDS:
      return { ...state, currentWords: [] };
    default:
      return state;
  }
}

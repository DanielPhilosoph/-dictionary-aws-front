//* Redux types
type StateType = InitialStateType;
type ActionType = { type: string; payload?: WordType[] };
type DispatchType = (args: ActionType) => ActionType;

//* State types
type WordType = { pos: string; word: string; definitions: string[] };

//* Initial state type
type InitialStateType = {
  recentSearches: WordType[];
  currentWords: WordType[];
};

import {
  ADD_CURRENT_TEMP,
  ADD_HISTORY_RECORD,
  DELETE_HISTORY_RECORD,
} from "./action";

const initialState = {
  currentTemp: [],
  historyRecords: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_TEMP:
      return {
        ...state,
        currentTemp: action.payload,
      };
    case ADD_HISTORY_RECORD:
      const newRecord = {
        ...action.payload,
      };
      return {
        ...state,
        historyRecords: [...state.historyRecords, newRecord],
      };
    case DELETE_HISTORY_RECORD:
      return {
        ...state,
        historyRecords: state.historyRecords.filter(
          (record) => record.dt !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default Reducer;

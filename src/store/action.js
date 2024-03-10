export const ADD_CURRENT_TEMP = "ADD_CURRENT_TEMP";
export const ADD_HISTORY_RECORD = "ADD_HISTORY_RECORD";
export const DELETE_HISTORY_RECORD = "DELETE_HISTORY_RECORD";

const addCurrentTemp = (currentTemp) => ({
  type: ADD_CURRENT_TEMP,
  payload: currentTemp,
});

const addHistoryRecord = (historyRecords) => ({
  type: ADD_HISTORY_RECORD,
  payload: historyRecords,
});

const deleteHistoryRecord = (historyRecords) => ({
  type: DELETE_HISTORY_RECORD,
  payload: historyRecords,
});

export {addCurrentTemp, addHistoryRecord, deleteHistoryRecord}
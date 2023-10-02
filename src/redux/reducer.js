import { combineReducers } from 'redux';
import { filterStatus } from './constants';
import { notesTypes, filterTypes } from './types';

const initialFilter = {
  status: filterStatus.ALL,
};

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case filterTypes.status.CHANGE_STATUS:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

const initialNotes = [
  { id: 1, text: 'Task 1', completed: true },
  { id: 2, text: 'Task 2', completed: false },
  { id: 3, text: 'Task 3', completed: false },
];

const notesReducer = (state = initialNotes, action) => {
  switch (action.type) {
    case notesTypes.ADD_NOTE:
      return [...state, action.payload];

    case notesTypes.DELETE_NOTE:
      return state.filter(note => note.id !== action.payload);

    case notesTypes.COMPLETE_NOTE:
      return state.map(note => {
        if (note.id !== action.payload) return note;

        return {
          ...note,
          completed: !note.completed,
        };
      });
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  filters: filterReducer,
  notes: notesReducer,
});

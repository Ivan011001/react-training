import { nanoid } from 'nanoid';
import { notesTypes, filterTypes } from './types';

export const addNote = text => ({
  type: notesTypes.ADD_NOTE,
  payload: {
    id: nanoid(),
    completed: false,
    text,
  },
});

export const deleteNote = id => ({
  type: notesTypes.DELETE_NOTE,
  payload: id,
});

export const completeNote = id => ({
  type: notesTypes.COMPLETE_NOTE,
  payload: id,
});

export const changeFilter = status => ({
  type: filterTypes.status.CHANGE_STATUS,
  payload: status,
});

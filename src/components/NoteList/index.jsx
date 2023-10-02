import { useSelector, useDispatch } from 'react-redux';
import { getFilterStatus, getNotes } from 'redux/selectors';
import { deleteNote, completeNote } from 'redux/actions';
import { filterStatus } from 'redux/constants';

const getVisibleNotes = (notes, status) => {
  switch (status) {
    case filterStatus.ACTIVE:
      return notes.filter(note => !note.completed);

    case filterStatus.COMPLETED:
      return notes.filter(note => note.completed);

    default:
      return notes;
  }
};

export default function NoteList() {
  const dispatch = useDispatch();
  const notes = useSelector(getNotes);
  const status = useSelector(getFilterStatus);

  const onDeleteHandle = id => dispatch(deleteNote(id));

  const onCompleteHandle = id => dispatch(completeNote(id));

  const visibleNotes = getVisibleNotes(notes, status);

  return (
    <div>
      {visibleNotes.map(note => (
        <li key={note.id}>
          <input
            type="checkbox"
            name="completed"
            checked={note.completed}
            onChange={() => onCompleteHandle(note.id)}
          />
          {note.text}
          <button type="button" onClick={() => onDeleteHandle(note.id)}>
            X
          </button>
        </li>
      ))}
    </div>
  );
}

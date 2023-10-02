import { useDispatch } from 'react-redux';
import { addNote } from 'redux/actions';

export default function NoteForm() {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { value } = form.elements.note;
    dispatch(addNote(value));
    form.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" name="note" />
      <button>Add</button>
    </form>
  );
}

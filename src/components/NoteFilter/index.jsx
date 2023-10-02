import { useSelector, useDispatch } from 'react-redux';
import { getFilterStatus } from 'redux/selectors';
import { filterStatus } from 'redux/constants';
import { changeFilter } from 'redux/actions';

export default function NoteFilter() {
  const dispatch = useDispatch();
  const status = useSelector(getFilterStatus);

  const onFilterChange = status => dispatch(changeFilter(status));

  return (
    <div>
      <button
        type="button"
        disabled={status === filterStatus.ALL}
        onClick={() => onFilterChange(filterStatus.ALL)}
      >
        All
      </button>
      <button
        type="button"
        disabled={status === filterStatus.COMPLETED}
        onClick={() => onFilterChange(filterStatus.COMPLETED)}
      >
        Completed
      </button>
      <button
        type="button"
        disabled={status === filterStatus.ACTIVE}
        onClick={() => onFilterChange(filterStatus.ACTIVE)}
      >
        Active
      </button>
    </div>
  );
}

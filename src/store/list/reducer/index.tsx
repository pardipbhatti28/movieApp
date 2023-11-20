import {produce} from 'immer';
import {Action} from '../../../store/list/actions';
import {ActionType} from '../../../store/list/actions-types';

interface RepositoriesStateInterface {
  listLoading: boolean;
  error: string | null;
  lists: any[];
}

const initialState = {
  listLoading: false,
  error: null,
  lists: [],
};

/**
 * @param state
 * @param action
 */
const reducer = (
  state: RepositoriesStateInterface = initialState,
  action: Action,
): RepositoriesStateInterface =>
  produce(state, draft => {
    switch (action.type) {
      // ...
      case ActionType.LIST_ADD:
        draft.lists.push(action.payload);
        return draft;
      //

      case ActionType.LIST_DELETE:
        const listIdToDelete = action.payload;
        draft.lists = draft.lists.filter(list => list.id !== listIdToDelete);
        return draft;

      default:
        return draft;
    }
  });

export default reducer;

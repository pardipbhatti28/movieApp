import {ActionType} from '../../../store/list/actions-types';

interface ListInit {
  type: ActionType.LIST_INIT;
}
interface ListAdd {
  type: ActionType.LIST_ADD;
  payload: any;
}
interface ListDelete {
  type: ActionType.LIST_DELETE;
  payload: number;
}

interface ListSuccessAction {
  type: ActionType.LIST_GET_SUCCESS;
  payload: any;
}

interface ListErrorAction {
  type: ActionType.LIST_GET_FAILED;
  payload: string;
}

export type Action =
  | ListInit
  | ListSuccessAction
  | ListErrorAction
  | ListAdd
  | ListDelete;

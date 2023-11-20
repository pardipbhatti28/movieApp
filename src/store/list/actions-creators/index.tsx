import {Dispatch} from 'redux';
import {ActionType} from '../../../store/list/actions-types';
import {Action} from '../../../store/list/actions';
import service from '../../../service/axios';
import {apiUri} from '../../../service/apiEndPoints';

/**
 * @param fn
 */
// export const getTools = (data: any) => {
//   return async (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.LIST_INIT,
//     });
//     try {
//       const response = await service.get(
//         'https://api.themoviedb.org/3/account/null/lists?page=1',
//       );
//       console.log('Data ==> ', JSON.stringify(response.data));
//       dispatch({
//         type: ActionType.LIST_GET_SUCCESS,
//         payload: response.data,
//       });

//       return response;
//     } catch (e: any) {
//       dispatch({
//         type: ActionType.LIST_GET_FAILED,
//         payload: 'Something went wrong! Please try again later',
//       });
//     }
//   };
// };
/*
 */

export const addList = (list: any) => {
  return {
    type: ActionType.LIST_ADD,
    payload: list,
  };
};

export const deleteList = (listId: number) => {
  return {
    type: ActionType.LIST_DELETE,
    payload: listId,
  };
};

import {combineReducers} from 'redux';
import listData from '../store/list/reducer';

const reducers = combineReducers({
  listData,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;

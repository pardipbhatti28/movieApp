import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {lists} from '../store';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Object.assign({}, lists), dispatch);
};

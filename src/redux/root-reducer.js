import { combineReducers} from 'redux';
import userReducer from './user/slice';

export default combineReducers({
    user: userReducer,
})

//importar todos nossos slices (onde tera nossos reducers, actions, estados espalhados globalmente)
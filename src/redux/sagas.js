import { all } from 'redux-saga/effects';
import user from './user/saga';

//function* é uma funçao geradora, como se fosse async / await
export default function* rootSaga(){
    //passa todos os sagas aq
    return yield all([
        user,
    ])
}
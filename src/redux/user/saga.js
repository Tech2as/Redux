import { all, takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure} from './slice'
import axios from 'axios';
//o yield espera a requisiçao

//funçao que vamos fazer requisiçao
function*fetchUsers(){
    try{
        const response = yield call(axios.get,"https://jsonplaceholder.typicode.com/users/")
        yield put(fetchUsersSuccess(response.data))
    }
    catch(error){
        yield put(fetchUsersFailure(error.message))
    }
}

//exportando para configurar o saga
export default all([
    //toda vez que clica no botao, ele dispara uma saga

    //pega nossa ultima açao e executa ela
    takeLatest("user/fetchUsers", fetchUsers )
])
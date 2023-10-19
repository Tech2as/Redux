import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import  rootSaga  from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
})
//se estamos criando um efeito colateral (usar o redux-saga), precisamos colocar ele como middleware
//toda vez que chamar uma action, ele vai disparar no meio dessa action o efeito colateral que queremos
sagaMiddleware.run(rootSaga)

//importando e usando todos nossos reducers
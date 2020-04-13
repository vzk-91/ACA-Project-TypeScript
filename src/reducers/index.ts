import {combineReducers} from 'redux';
import serviceReducer from './service.reducer';
import userReducer from './user.reducers';
import commonReducer from './common.reducer'


export const rootReducer = combineReducers({
 user : userReducer,
 service : serviceReducer,
 common : commonReducer
})

type CombineReducersType = typeof rootReducer

export type AppStateType = ReturnType<CombineReducersType>


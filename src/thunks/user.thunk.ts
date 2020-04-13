import firebase from '../vendor';
import { history } from '../utils';
import { UserLoginType, UserUpdateType} from '../Types/UserTypes'
import { ThunkAction } from 'redux-thunk';
import {AppStateType} from '../reducers'
import { userRegisterReguest, userRegisterSuccess,userRegisterFailure,
    userLoginRequest, userLoginSuccess, userLoginFailure,
    userLogoutRequest, userLogoutSuccess, userLogoutFailure,
    userUpdateRequest, userUpdateSuccess, userUpdateFailure, modalShow,userPhoneNumber , UserActionsType,CommonActionType} from '../actions';

type UserActionsThunkType =   UserActionsType | CommonActionType  
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UserActionsThunkType >

export const userLoginThunk = (data : UserLoginType) :ThunkType =>  async (dispatch) => {
      try {
          dispatch(userLoginRequest())
          const res = await firebase.login(data.email, data.password)
          if(res) {
            firebase.auth.onAuthStateChanged(user => {
                if(user) {
                    dispatch(userLoginSuccess(user))
                    history.push('/profile')
                } 
            })
          }    
      } catch (error) {
        dispatch(modalShow({
            text: error.message
        }))
        dispatch(userLoginFailure("ERROR NOT LOGINED"))
      }
}

export const userRegisterThunk = (name : string, email : string, password : string, picture?: string) : ThunkType => async (dispatch) => {
    
    try {
        dispatch(userRegisterReguest())
        const res : any = await firebase.register(name, email, password, picture)
        
        if(res) {
            dispatch(userRegisterSuccess())
            history.push('/login')
        }

    } catch (error) {
        dispatch(modalShow({
            title : "REGISTRATION PAGE",
            text: error.message
        }))
        dispatch(userRegisterFailure("ERROR NOT REGISTRATION"))
    }
}
export const userUpdateThunk = (data : UserUpdateType , picture : string | null) : ThunkType => async (dispatch) => {
    
    try {
        dispatch(userUpdateRequest())
        await firebase.update(data, picture)
        firebase.auth.onAuthStateChanged(user => {
            if(user) {
              localStorage.setItem('lp-user', JSON.stringify(user))
            }
            })
            dispatch(userUpdateSuccess())
            history.push('/profile')
    } catch (error) {
        dispatch(modalShow({
            title : "UPDATE PAGE",
            text: error.message
        }))
        dispatch(userUpdateFailure("ERROR NOT UPDATE"))
    }
}

export const userLogoutThunk = () :ThunkType => async (dispatch) => {
    try {
        dispatch(userLogoutRequest())
        const res : any = await firebase.logout()
        if(res) {
            dispatch(userLogoutSuccess())
        }
    } catch (error) {
        dispatch(userLogoutFailure("ERROR NOT LOGOUT"))
    }
}


export const userGetPhoneThunk = (id : string | null) : ThunkType=> async (dispatch) => {
    try {
     if(id) {
        firebase.db.collection("phoneNumber").where("id", "==", id).onSnapshot(snapshot => {
            if(!snapshot.empty){
                const phone : Array<any> =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
               const phonenumber : string = phone[0].phoneNumber
               dispatch(userPhoneNumber(phonenumber))
            } else{
                dispatch(userPhoneNumber(null))
            }
        });
     }
    } catch (error) {
        dispatch(userLogoutFailure("ERROR NOT LOGOUT"))
    }
}
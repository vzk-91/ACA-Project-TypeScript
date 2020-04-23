import firebase from '../vendor';
import { history } from '../utils';
import { UserLoginType, UserUpdateType} from '../Types/UserTypes'
import { ThunkAction } from 'redux-thunk';
import {AppStateType} from '../reducers'
import {  UserActionsType,CommonActionType,userActions,commonActions} from '../actions';

type UserActionsThunkType =   UserActionsType | CommonActionType  
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UserActionsThunkType >

export const userLoginThunk = (data : UserLoginType) :ThunkType =>  async (dispatch) => {
      try {
          dispatch(userActions.userLoginRequest())
          const res = await firebase.login(data.email, data.password)
          if(res) {
            firebase.auth.onAuthStateChanged(user => {
                if(user) {
                    dispatch(userActions.userLoginSuccess(user))
                    history.push('/profile')
                } 
            })
          }    
      } catch (error) {
        dispatch(commonActions.modalShow({
            text: error.message
        }))
        dispatch(userActions.userLoginFailure("ERROR NOT LOGINED"))
      }
}

export const userRegisterThunk = (name : string, email : string, password : string, picture?: string) : ThunkType => async (dispatch) => {
    
    try {
        dispatch(userActions.userRegisterReguest())
        const res : any = await firebase.register(name, email, password, picture)
        
        if(res) {
            dispatch(userActions.userRegisterSuccess())
            history.push('/login')
        }

    } catch (error) {
        dispatch(commonActions.modalShow({
            title : "REGISTRATION PAGE",
            text: error.message
        }))
        dispatch(userActions.userRegisterFailure("ERROR NOT REGISTRATION"))
    }
}
export const userUpdateThunk = (data : UserUpdateType , picture : string | null) : ThunkType => async (dispatch) => {
    
    try {
        dispatch(userActions.userUpdateRequest())
        await firebase.update(data, picture)
        firebase.auth.onAuthStateChanged(user => {
            if(user) {
              localStorage.setItem('lp-user', JSON.stringify(user))
            }
            })
            dispatch(userActions.userUpdateSuccess())
            history.push('/profile')
    } catch (error) {
        dispatch(commonActions.modalShow({
            title : "UPDATE PAGE",
            text: error.message
        }))
        dispatch(userActions.userUpdateFailure("ERROR NOT UPDATE"))
    }
}

export const userLogoutThunk = () :ThunkType => async (dispatch) => {
    try {
        dispatch(userActions.userLogoutRequest())
        const res : any = await firebase.logout()
        if(res) {
            dispatch(userActions.userLogoutSuccess())
        }
    } catch (error) {
        dispatch(userActions.userLogoutFailure("ERROR NOT LOGOUT"))
    }
}


export const userGetPhoneThunk = (id : string | null) : ThunkType=> async (dispatch) => {
    try {
     if(id) {
        firebase.db.collection("phoneNumber").where("id", "==", id).onSnapshot(snapshot => {
            if(!snapshot.empty){
                const phone : Array<any> =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
               const phonenumber : string = phone[0].phoneNumber
               dispatch(userActions.userPhoneNumber(phonenumber))
            } else{
                dispatch(userActions.userPhoneNumber(null))
            }
        });
     }
    } catch (error) {
        dispatch(userActions.userLogoutFailure("ERROR NOT LOGOUT"))
    }
}
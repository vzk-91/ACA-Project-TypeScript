import { ActionTypes } from "../Types"

export const userActions = {
    userPhoneNumber : (data : string | null )=>{
        return{
            type : 'USER_PHONE_NUMBER',
            payload : data
        } as const
    },
    userRegisterReguest : ()=>{
        return{
            type : 'USER_REGISTER_REQUEST'
        } as const
    },
    userRegisterSuccess : ()=>{
        return{
            type : 'USER_REGISTER_SUCCESS'
        } as const
    },
    userRegisterFailure : (data : string)=>{
        return{
            type : 'USER_REGISTER_FAILURE',
            payload : data
        } as const
    },
    userUpdateRequest : ()=> {
        return {
            type : 'USER_UPDATE_REQUEST'
        } as const
    },
    userUpdateSuccess : ()=> {
        return {
            type : 'USER_UPDATE_SUCCESS'
        } as const
    },
    userUpdateFailure : (data : string)=> {
        return {
            type : 'USER_UPDATE_FAILURE',
            payload : data
        } as const
    },
    userLoginRequest : ()=> {
        return {
            type : 'USER_LOGIN_REQUEST'
        } as const
    },
    userLoginSuccess : (user : any ) => {
        return {
            type : 'USER_LOGIN_SUCCESS',
            payload : user
        } as const
    },
    userLoginFailure : (data : string ) => {
        return {
            type : 'USER_LOGIN_FAILURE',
            payload : data
        } as const
    },
    userLogoutRequest:  () => {
        return {
            type : 'USER_LOGOUT_REQUEST'
        } as const
    },
    userLogoutSuccess:  () => {
        return {
            type : 'USER_LOGOUT_SUCCESS'
        } as const
    },
    userLogoutFailure:  (data : string) => {
        return {
            type : 'USER_LOGOUT_FAILURE',
            payload : data
        } as const
    }
}


export type UserActionsType = ActionTypes<typeof userActions>
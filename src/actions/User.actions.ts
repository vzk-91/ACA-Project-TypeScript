export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';
export const USER_REGISTER_HANDLE_INPUTS = 'USER_REGISTER_HANDLE_INPUTS';
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGIN_HANDLE_INPUTS = 'USER_LOGIN_HANDLE_INPUTS';
export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';
export const USER_PHONE_NUMBER = 'USER_PHONE_NUMBER'

type UserPhoneNumberActionType = {
    type : typeof USER_PHONE_NUMBER
    payload : string | null 
}


export const userPhoneNumber = (data : string | null ) : UserPhoneNumberActionType =>{
    return{
        type : USER_PHONE_NUMBER,
        payload : data
    }
}

type UserRegisterReguestActionType = {
    type : typeof USER_REGISTER_REQUEST
}

export const userRegisterReguest = () : UserRegisterReguestActionType =>{
    return{
        type : USER_REGISTER_REQUEST
    }
}

type UserRegisterSuccessActionType = {
    type : typeof USER_REGISTER_SUCCESS
}

export const userRegisterSuccess = () : UserRegisterSuccessActionType =>{
    return{
        type : USER_REGISTER_SUCCESS
    }
}

type UserRegisterFailureActionType = {
    type : typeof USER_REGISTER_FAILURE
    payload : string
}

export const userRegisterFailure = (data : string) : UserRegisterFailureActionType =>{
    return{
        type : USER_REGISTER_FAILURE,
        payload : data
    }
}



// export const userRegisterHandleInputs = (data) =>{
//     return {
//         type : USER_REGISTER_HANDLE_INPUTS,
//         payload : data
//     }
// }

type UserUpdateRequestActionType = {
    type : typeof USER_UPDATE_REQUEST
}

export const userUpdateRequest = () : UserUpdateRequestActionType => {
    return {
        type : USER_UPDATE_REQUEST
    }
}

type UserUpdateSuccessActionType = {
    type : typeof USER_UPDATE_SUCCESS
}

export const userUpdateSuccess = () : UserUpdateSuccessActionType => {
    return {
        type : USER_UPDATE_SUCCESS
    }
}

type UserUpdateFailureActionType = {
    type : typeof USER_UPDATE_FAILURE
    payload : string
}

export const userUpdateFailure = (data : string) : UserUpdateFailureActionType => {
    return {
        type : USER_UPDATE_FAILURE,
        payload : data
    }
}

type UserLoginRequestActionType = {
    type : typeof USER_LOGIN_REQUEST
}

export const userLoginRequest = () : UserLoginRequestActionType=> {
    return {
        type : USER_LOGIN_REQUEST
    }
}

type UserLoginSuccessActionType = {
    type : typeof USER_LOGIN_SUCCESS
    payload : any
}

export const userLoginSuccess = (user : any ) : UserLoginSuccessActionType => {
    return {
        type : USER_LOGIN_SUCCESS,
        payload : user
    }
}

type UserLoginFailureActionType = {
    type : typeof USER_LOGIN_FAILURE
    payload : string
}

export const userLoginFailure = (data : string ) : UserLoginFailureActionType => {
    return {
        type : USER_LOGIN_FAILURE,
        payload : data
    }
}

// export const userLoginHandleInputs = (data : any ) =>{
//     return {
//         type : USER_LOGIN_HANDLE_INPUTS,
//         payload : data
//     }
// }

type UserLogoutRequestActionType = {
    type : typeof USER_LOGOUT_REQUEST
}

export const userLogoutRequest = ()  : UserLogoutRequestActionType => {
    return {
        type : USER_LOGOUT_REQUEST
    }
}

type UserLogoutSuccessActionType = {
    type : typeof USER_LOGOUT_SUCCESS
}

export const userLogoutSuccess = () : UserLogoutSuccessActionType => {
    return {
        type : USER_LOGOUT_SUCCESS
    }
}

type UserLogoutFailureActionType = {
    type : typeof USER_LOGOUT_FAILURE
    payload : string
}

export const userLogoutFailure = (data : string) : UserLogoutFailureActionType => {
    return {
        type : USER_LOGOUT_FAILURE,
        payload : data
    }
}

export type UserActionsType = UserLoginRequestActionType | UserLoginSuccessActionType | UserLoginFailureActionType | 
                              UserLogoutRequestActionType | UserLogoutSuccessActionType | UserLogoutFailureActionType | 
                              UserRegisterReguestActionType | UserRegisterSuccessActionType | UserRegisterFailureActionType |
                              UserUpdateRequestActionType | UserUpdateSuccessActionType | UserUpdateFailureActionType | 
                              UserPhoneNumberActionType
import {UserActionsType} from '../actions'

const defaultState = {
    //  registerDate : {
    //      name : '',
    //      email : '',
    //      password : ''
    //  },
    //  loginData : {
    //      email : '',
    //      password : ''
    //  },
     isLoading : false,
     isRegistered : false,
     error : null as string | null,
     user : {},
     phoneNumber : null as string | null
}

type DefaultStateType = typeof defaultState

export default function homeReducer  (state = defaultState, action : UserActionsType) : DefaultStateType {
   switch(action.type){
       case 'USER_LOGIN_REQUEST' :
           return {
               ...state,
               isLoading : false,
           };
        case 'USER_LOGIN_SUCCESS' :
            return {
                ...state,
                isLoading : true,
                user : action.payload
            };
        case 'USER_LOGIN_FAILURE' : 
            return {
                ...state,
                isLoading : false,
                error : action.payload
            };
            case 'USER_REGISTER_REQUEST' : 
              return{
                  ...state,
                  isLoading : true
              };
            case 'USER_REGISTER_SUCCESS' : 
              return {
                  ...state,
                  isLoading : false,
                  isRegistered : true
              }
            case 'USER_REGISTER_FAILURE' : 
              return {
                  ...state,
                  isLoading : true,
                  isRegistered : true,
                  error : action.payload
              };
              case 'USER_LOGOUT_REQUEST' : 
                return {
                    ...state,
                    isLoading : true
                };
              case 'USER_LOGOUT_SUCCESS' : 
                return {
                    ...state,
                    isLoading : false,
                 //   user : action.payload
                };
              case 'USER_LOGOUT_FAILURE' : 
                return {
                    ...state,
                    isLoading : true,
                    error : action.payload
                };
                case 'USER_UPDATE_REQUEST' :
                    return {
                        ...state,
                        isLoading : true
                    };
                case 'USER_UPDATE_SUCCESS' :
                    return {
                        ...state,
                        isLoading : false,
                       // user : action.payload
                    };
                case 'USER_UPDATE_FAILURE' :
                    return {
                        ...state,
                        isLoading : true,
                        error : action.payload
                    };
                    // case USER_LOGIN_HANDLE_INPUTS :
                    //     return {
                    //         ...state,
                    //         loginData : action.payload
                    //     };
                    //     case USER_REGISTER_HANDLE_INPUTS :
                    //         return {
                    //             ...state,
                    //             registerDate : action.payload
                    //         };
                            case 'USER_PHONE_NUMBER' :
                                return {
                                    ...state,
                                    phoneNumber : action.payload
                                };
                                default :
                                return state
   }
}
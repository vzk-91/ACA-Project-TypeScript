import { ServiceType } from './../Types';
import {ServiceActionType} from '../actions'   


const defaultState = {
    // serviceData : {
    //     comments : [],
    //     desciptpion : '',
    //     dislikes : [],
    //     likes : [],
    //     link : '',
    //     owner : {},
    //     serviceCategory : "",
    //     title : ""
    // },
    services : [] as Array<ServiceType>,
    serviceById : {} as ServiceType,
    serviceByUser : [] as Array<ServiceType>,
    error : null as null | string,
    isLoading : false
}

export type DefaultStateType = typeof defaultState


export default function loginReducer  (state : DefaultStateType = defaultState, action : ServiceActionType) : DefaultStateType {
   switch(action.type){
       case 'CREATE_SERVICE_REQUEST' : 
            return {
            ...state,
            isLoading : true
       };
       case 'CREATE_SERVICE_SUCCESS' : 
            return {
                ...state ,
                isLoading : false
        };
       case 'CREATE_SERVICE_FAILURE' :
            return {
                ...state,
                isLoading : true,
                error : action.payload
            };
         case 'UPDATE_SERVICE_REQUEST' :
             return {
                 ...state,
                 isLoading : true,
             };
         case "UPDATE_SERVICE_SUCCESS" :
             return {
                 ...state,
                 isLoading : false
             };
         case 'UPDATE_SERVICE_FAILURE' :
             return {
                 ...state,
                 isLoading : true,
                 error : action.payload
             };
            case 'DELETE_SERVICE_REQUEST' :
                return {
                    ...state,
                    isLoading : true
                };
            case 'DELETE_SERVICE_SUCCESS' : 
                return {
                    ...state,
                    isLoading : false,
                   // services : newServices
                }
            case 'DELETE_SERVICE_FAILURE' : 
                return {
                    ...state,
                    isLoading : true,
                    error : action.payload
                };
              case 'GET_SERVICE_LIST_REQUEST': 
                  return{
                      ...state,
                      isLoading : true,
                  };
              case 'GET_SERVICE_LIST_SUCCESS': 
                  return {
                      ...state,
                      isLoading : false,
                      services : action.payload
                  };
              case 'GET_SERVICE_LIST_FAILURE': 
                  return {
                      ...state,
                      isLoading : true,
                      error : action.payload
                  };
                  case 'GET_SERVICES_BY_ID_REQUEST': 
                  return{
                      ...state,
                      isLoading : true,
                  };
                    case 'GET_SERVICES_BY_ID_SUCCESS': 
                        return {
                            ...state,
                            isLoading : false,
                            serviceById : action.payload
                        };
                    case 'GET_SERVICES_BY_ID_FAILURE': 
                        return {
                            ...state,
                            isLoading : true,
                            error : action.payload
                        };
                        case 'GET_SERVICES_BY_USER_REQUEST': 
                        return{
                            ...state,
                            isLoading : true,
                        };
                          case 'GET_SERVICES_BY_USER_SUCCESS': 
                              return {
                                  ...state,
                                  isLoading : false,
                                  serviceByUser : action.payload
                              };
                          case 'GET_SERVICES_BY_USER_FAILURE': 
                              return {
                                  ...state,
                                  isLoading : true,
                                  error : action.payload
                              };
                            default :
                            return state
   }
}
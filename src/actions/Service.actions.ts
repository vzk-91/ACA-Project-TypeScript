import { ActionTypes } from "../Types";

export const serviceActions = {
    createServiceRequest : () => {
        return {
            type : 'CREATE_SERVICE_REQUEST'
        }as const
    },
    createServiceSuccess : () => {
        return {
            type : 'CREATE_SERVICE_SUCCESS'
        }as const
    },
    createServiceFailure : (error : string) => ({
        type: 'CREATE_SERVICE_FAILURE',
        payload: error
    }as const),
    updateServiceRequest : () => ({
        type: 'UPDATE_SERVICE_REQUEST'
    }as const),
    updateServiceSuccess : () => {
        return {
            type : 'UPDATE_SERVICE_SUCCESS'
        }as const
    },
    updateServiceFailure : (data : string)  => {
        return {
            type : 'UPDATE_SERVICE_FAILURE',
            payload : data
        }as const
    },
    deleteServiceRequest : () => {
        return {
            type : 'DELETE_SERVICE_REQUEST'
        }as const
    },
    deleteServiceSuccess : () => {
        return {
            type : 'DELETE_SERVICE_SUCCESS'
        } as const
    },
     deleteServiceFailure : (data : string) => {
        return {
            type : 'DELETE_SERVICE_FAILURE',
            payload : data
        } as const
    },
        getServiceListRequest : ()  => {
        return{
            type : 'GET_SERVICE_LIST_REQUEST'
        } as const
    },
        getServiceListSuccess : (data : Array<any>) => {    
        return{
            type : 'GET_SERVICE_LIST_SUCCESS',
            payload : data
        } as const
    },
        getServiceListFailure : (data : string) => {
        return{
            type : 'GET_SERVICE_LIST_FAILURE',
            payload : data
        } as const
    },
        getServiceByIdRequest : () => {
        return {
            type : 'GET_SERVICES_BY_ID_REQUEST'
        } as const
    },
    
    getServiceByIdSuccess : (data: any ) => {
    return {
        type : 'GET_SERVICES_BY_ID_SUCCESS',
        payload : data
    } as const
},
    getServiceByIdFailure : (data : string) => {
    return {
        type : 'GET_SERVICES_BY_ID_FAILURE',
        payload : data
    } as const
},
getServiceByUserRequest: () => {
    return {
        type : 'GET_SERVICES_BY_USER_REQUEST'
    } as const
},
getServiceByUserSuccess: (data : Array<any>) => {
    return {
        type : 'GET_SERVICES_BY_USER_SUCCESS',
        payload : data
    } as const
},
getServiceByUserFailure: (data : string) => {
    return {
        type : 'GET_SERVICES_BY_USER_FAILURE',
        payload : data
    } as const
}
}

export type ServiceActionType = ActionTypes<typeof serviceActions>

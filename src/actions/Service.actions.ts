export const CREATE_SERVICE_REQUEST = 'CREATE_SERVICE_REQUEST';
export const CREATE_SERVICE_SUCCESS = 'CREATE_SERVICE_SUCCESS';
export const CREATE_SERVICE_FAILURE = 'CREATE_SERVICE_FAILURE';
export const UPDATE_SERVICE_REQUEST = 'UPDATE_SERVICE_REQUEST';
export const UPDATE_SERVICE_SUCCESS = 'UPDATE_SERVICE_SUCCESS';
export const UPDATE_SERVICE_FAILURE = 'UPDATE_SERVICE_FAILURE';
export const DELETE_SERVICE_REQUEST = 'DELETE_SERVICE_REQUEST';
export const DELETE_SERVICE_SUCCESS = 'DELETE_SERVICE_SUCCESS';
export const DELETE_SERVICE_FAILURE = 'DELETE_SERVICE_FAILURE';
export const SERVICE_HANDLE_INPUTS = 'SERVICE_HANDLE_INPUTS';
export const SERVISE_UPDATE_INPUTS = 'SERVISE_UPDATE_INPUTS';
export const GET_SERVICE_LIST_REQUEST = 'GET_SERVICE_LIST_REQUEST';
export const GET_SERVICE_LIST_SUCCESS = 'GET_SERVICE_LIST_SUCCESS';
export const GET_SERVICE_LIST_FAILURE = 'GET_SERVICE_LIST_FAILURE';
export const GET_SERVICES_BY_ID_REQUEST = 'ET_SERVICES_BY_ID_REQUEST';
export const GET_SERVICES_BY_ID_SUCCESS = 'ET_SERVICES_BY_ID_SUCCESS';
export const GET_SERVICES_BY_ID_FAILURE = 'ET_SERVICES_BY_ID_FAILURE';
export const GET_SERVICES_BY_USER_REQUEST = 'ET_SERVICES_BY_USER_REQUEST';
export const GET_SERVICES_BY_USER_SUCCESS = 'ET_SERVICES_BY_USER_SUCCESS';
export const GET_SERVICES_BY_USER_FAILURE = 'ET_SERVICES_BY_USER_FAILURE';


export type CreateServiceRequestActionType = {
    type : typeof CREATE_SERVICE_REQUEST
}

export const createServiceRequest = () : CreateServiceRequestActionType => {
    return {
        type : CREATE_SERVICE_REQUEST
    }
}

export type CreateServiceSuccessActionType = {
    type : typeof CREATE_SERVICE_SUCCESS
}

export const createServiceSuccess = () : CreateServiceSuccessActionType => {
    return {
        type : CREATE_SERVICE_SUCCESS
    }
}

export type CreateServiceFailureActionType = {
    type : typeof CREATE_SERVICE_FAILURE
    payload : string
}

export const createServiceFailure = (error : string) : CreateServiceFailureActionType => ({
    type: CREATE_SERVICE_FAILURE,
    payload: error
})

export type UpdateServiceRequestActionType = {
    type :typeof UPDATE_SERVICE_REQUEST
}

export const updateServiceRequest = () : UpdateServiceRequestActionType => ({
    type: UPDATE_SERVICE_REQUEST
})

export type UpdateServiceSuccessActionType = {
    type : typeof UPDATE_SERVICE_SUCCESS
}

export const updateServiceSuccess = () : UpdateServiceSuccessActionType => {
    return {
        type : UPDATE_SERVICE_SUCCESS
    }
}

export type UpdateServiceFailureActionType = {
    type : typeof UPDATE_SERVICE_FAILURE
    payload : string
}

export const updateServiceFailure = (data : string) : UpdateServiceFailureActionType  => {
    return {
        type : UPDATE_SERVICE_FAILURE,
        payload : data
    }
}

export type DeleteServiceRequestActionType = {
    type : typeof DELETE_SERVICE_REQUEST
}

export const deleteServiceRequest = () : DeleteServiceRequestActionType => {
    return {
        type : DELETE_SERVICE_REQUEST
    }
}

export type DeleteServiceSuccessActionType = {
    type : typeof DELETE_SERVICE_SUCCESS
}

export const deleteServiceSuccess = () : DeleteServiceSuccessActionType => {
    return {
        type : DELETE_SERVICE_SUCCESS
    }
}

export type DeleteServiceFailureActionType = {
    type : typeof DELETE_SERVICE_FAILURE
    payload : string
}

export const deleteServiceFailure = (data : string) : DeleteServiceFailureActionType => {
    return {
        type : DELETE_SERVICE_FAILURE,
        payload : data
    }
}

// export const serviceHandleInputs = (data) =>{
//     return {
//         type : SERVICE_HANDLE_INPUTS,
//         payload : data
//     }
// }

// export const serviceUpdateInputs = (id) => {
//     return {
//         type : SERVISE_UPDATE_INPUTS,
//         payload : id
//     }
// }

export type GetServiceListRequestActionType = {
    type : typeof GET_SERVICE_LIST_REQUEST
}

export const getServiceListRequest = () : GetServiceListRequestActionType => {
    return{
        type : GET_SERVICE_LIST_REQUEST
    }
}

export type GetServiceListSuccessActionType = {
    type : typeof GET_SERVICE_LIST_SUCCESS
    payload: Array<any>
}

export const getServiceListSuccess = (data : Array<any>) : GetServiceListSuccessActionType => {    
    return{
        type : GET_SERVICE_LIST_SUCCESS,
        payload : data
    }
}

export type GetServiceListFailureActionType = {
    type : typeof GET_SERVICE_LIST_FAILURE
    payload : string
}

export const getServiceListFailure = (data : string) : GetServiceListFailureActionType => {
    return{
        type : GET_SERVICE_LIST_FAILURE,
        payload : data
    }
}

export type GetServiceByIdRequestActionType = {
    type : typeof GET_SERVICES_BY_ID_REQUEST
}

export const getServiceByIdRequest = () : GetServiceByIdRequestActionType => {
    return {
        type : GET_SERVICES_BY_ID_REQUEST
    }
}

export type GetServiceByIdSuccessActionType = {
    type : typeof GET_SERVICES_BY_ID_SUCCESS
    payload: any
}

export const getServiceByIdSuccess = (data: any ) : GetServiceByIdSuccessActionType => {
    return {
        type : GET_SERVICES_BY_ID_SUCCESS,
        payload : data
    }
}

export type GetServiceByIdFailureActionType = {
    type: typeof GET_SERVICES_BY_ID_FAILURE
    payload : string
}

export const getServiceByIdFailure = (data : string) : GetServiceByIdFailureActionType => {
    return {
        type : GET_SERVICES_BY_ID_FAILURE,
        payload : data
    }
}

export type GetServiceByUserRequestActionType = {
    type : typeof GET_SERVICES_BY_USER_REQUEST
}

export const getServiceByUserRequest = () : GetServiceByUserRequestActionType => {
    return {
        type : GET_SERVICES_BY_USER_REQUEST
    }
}

export type GetServiceByUserSuccessActionType = {
    type : typeof GET_SERVICES_BY_USER_SUCCESS
    payload : Array<any>
}

export const getServiceByUserSuccess = (data : Array<any>) : GetServiceByUserSuccessActionType => {
    return {
        type : GET_SERVICES_BY_USER_SUCCESS,
        payload : data
    }
}

export type GetServiceByUserFailureActionType = {
    type : typeof GET_SERVICES_BY_USER_FAILURE
    payload : string
}

export const getServiceByUserFailure = (data : string) : GetServiceByUserFailureActionType => {
    return {
        type : GET_SERVICES_BY_USER_FAILURE,
        payload : data
    }
}

export type ServiceActionType = CreateServiceRequestActionType | CreateServiceSuccessActionType | CreateServiceFailureActionType |
                                UpdateServiceRequestActionType | UpdateServiceSuccessActionType | UpdateServiceFailureActionType |
                                DeleteServiceRequestActionType | DeleteServiceSuccessActionType | DeleteServiceFailureActionType |
                                GetServiceListRequestActionType | GetServiceListSuccessActionType | GetServiceListFailureActionType |
                                GetServiceByIdRequestActionType | GetServiceByIdSuccessActionType | GetServiceByIdFailureActionType |
                                GetServiceByUserRequestActionType | GetServiceByUserSuccessActionType | GetServiceByUserFailureActionType
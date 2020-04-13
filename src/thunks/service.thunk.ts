import { ServiceType } from '../Types/ServicesType';
import firebase from '../vendor/sdk';
import {updateServiceRequest,updateServiceSuccess,updateServiceFailure,
        deleteServiceRequest,deleteServiceSuccess,deleteServiceFailure,
        createServiceRequest,createServiceSuccess,createServiceFailure,
        getServiceListRequest, getServiceListSuccess, getServiceListFailure,
        getServiceByUserRequest,getServiceByUserSuccess,getServiceByUserFailure,
        getServiceByIdRequest, getServiceByIdSuccess, getServiceByIdFailure, ServiceActionType ,} from '../actions'
import { ThunkAction } from 'redux-thunk';
import {AppStateType} from '../reducers'
import {UpdateServiceDataType} from '../Types'

        
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ServiceActionType > 



export const serviceUpdateThunk = (id : string ,data : UpdateServiceDataType) : ThunkType=> async (dispatch ) =>{
    const ref = firebase.db.collection("service").doc(id)
    try {
        dispatch(updateServiceRequest())
        const doc = await ref.get()
        if(doc.exists) {
            ref.update(data)
        } dispatch(updateServiceSuccess())
    } catch (error) {
        dispatch(updateServiceFailure("ERROR SERVICE NOT UPTADED"))
    }
}


    
    
export const serviceGetByIdThunk = (id : string | null ) :ThunkType => async (dispatch) => {
    try {
        if(id){
        dispatch(getServiceByIdRequest())
       firebase.db.collection("service").doc(id).onSnapshot(snapshot => {
           const newService =  snapshot.data()
           dispatch(getServiceByIdSuccess(newService))
       });
      } else {
         dispatch(getServiceByIdSuccess({}))
      }
    } catch (error) {
        dispatch(getServiceByIdFailure("ERROR"))
    }
}

    export const serviceGetByUserThunk = (id: string ) : ThunkType=> async (dispatch) => {
        try {
            dispatch(getServiceByUserRequest())
           firebase.db.collection("service").where("owner.id", "==", id).onSnapshot(snapshot => {
               const newService =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
               dispatch(getServiceByUserSuccess(newService))
           });
        } catch (error) {
            dispatch(getServiceByUserFailure("ERROR"))
        }
    }

export const serviceGetThunk = () : ThunkType=> async (dispatch) => {
    try {
        dispatch(getServiceListRequest())
       firebase.db.collection("service").onSnapshot(snapshot => {
           const newService =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
           dispatch(getServiceListSuccess(newService))
       });
    } catch (error) {
        dispatch(getServiceListFailure("ERROR"))
    }
}

export const serviceGetCategoriesThunk = (category : string) : ThunkType => async (dispatch) => {
    try {
        dispatch(getServiceListRequest())
       firebase.db.collection("service").where("serviceCategory", "==", category).onSnapshot(snapshot => {
           const newService =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
           dispatch(getServiceListSuccess(newService))
       });
    } catch (error) {
        dispatch(getServiceListFailure("ERROR"))
    }
}



export const serviceDeleteThunk = (id : string  ) : ThunkType=> async (dispatch) =>{
    const ref = firebase.db.collection("service").doc(id)
    try {
        dispatch(deleteServiceRequest())
        const doc = await ref.get()
        if(doc.exists) {
            ref.delete()
        } dispatch(deleteServiceSuccess())
    } catch (error) {
        dispatch(deleteServiceFailure("ERROR SERVICE NOT DELETED"))
    }
}

export const servicesCreateThunk = (data : ServiceType) : ThunkType => async (dispatch) => {
    try {
        dispatch(createServiceRequest())
       await firebase.db.collection('service').add(data)
        dispatch(createServiceSuccess())
    } catch (error) {
        dispatch(createServiceFailure("ERROR NOT CREATE SERVICE"))
    }
}
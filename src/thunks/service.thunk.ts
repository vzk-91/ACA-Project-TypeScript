import { ServiceType } from '../Types/ServicesType';
import firebase from '../vendor/sdk';
import {serviceActions ,ServiceActionType ,} from '../actions'
import { ThunkAction } from 'redux-thunk';
import {AppStateType} from '../reducers'
import {UpdateServiceDataType} from '../Types'

        
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ServiceActionType > 



export const serviceUpdateThunk = (id : string ,data : UpdateServiceDataType) : ThunkType=> async (dispatch ) =>{
    const ref = firebase.db.collection("service").doc(id)
    try {
        dispatch(serviceActions.updateServiceRequest())
        const doc = await ref.get()
        if(doc.exists) {
            ref.update(data)
        } dispatch(serviceActions.updateServiceSuccess())
    } catch (error) {
        dispatch(serviceActions.updateServiceFailure("ERROR SERVICE NOT UPTADED"))
    }
}


    
    
export const serviceGetByIdThunk = (id : string | null ) :ThunkType => async (dispatch) => {
    try {
        if(id){
        dispatch(serviceActions.getServiceByIdRequest())
       firebase.db.collection("service").doc(id).onSnapshot(snapshot => {
           const newService =  snapshot.data()
           dispatch(serviceActions.getServiceByIdSuccess(newService))
       });
      } else {
         dispatch(serviceActions.getServiceByIdSuccess({}))
      }
    } catch (error) {
        dispatch(serviceActions.getServiceByIdFailure("ERROR"))
    }
}

    export const serviceGetByUserThunk = (id: string ) : ThunkType=> async (dispatch) => {
        try {
            dispatch(serviceActions.getServiceByUserRequest())
           firebase.db.collection("service").where("owner.id", "==", id).onSnapshot(snapshot => {
               const newService =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
               dispatch(serviceActions.getServiceByUserSuccess(newService))
           });
        } catch (error) {
            dispatch(serviceActions.getServiceByUserFailure("ERROR"))
        }
    }

export const serviceGetThunk = () : ThunkType=> async (dispatch) => {
    try {
        dispatch(serviceActions.getServiceListRequest())
       firebase.db.collection("service").onSnapshot(snapshot => {
           const newService =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
           dispatch(serviceActions.getServiceListSuccess(newService))
       });
    } catch (error) {
        dispatch(serviceActions.getServiceListFailure("ERROR"))
    }
}

export const serviceGetCategoriesThunk = (category : string) : ThunkType => async (dispatch) => {
    try {
        dispatch(serviceActions.getServiceListRequest())
       firebase.db.collection("service").where("serviceCategory", "==", category).onSnapshot(snapshot => {
           const newService =  snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
           dispatch(serviceActions.getServiceListSuccess(newService))
       });
    } catch (error) {
        dispatch(serviceActions.getServiceListFailure("ERROR"))
    }
}



export const serviceDeleteThunk = (id : string  ) : ThunkType=> async (dispatch) =>{
    const ref = firebase.db.collection("service").doc(id)
    try {
        dispatch(serviceActions.deleteServiceRequest())
        const doc = await ref.get()
        if(doc.exists) {
            ref.delete()
        } dispatch(serviceActions.deleteServiceSuccess())
    } catch (error) {
        dispatch(serviceActions.deleteServiceFailure("ERROR SERVICE NOT DELETED"))
    }
}

export const servicesCreateThunk = (data : ServiceType) : ThunkType => async (dispatch) => {
    try {
        dispatch(serviceActions.createServiceRequest())
       await firebase.db.collection('service').add(data)
        dispatch(serviceActions.createServiceSuccess())
    } catch (error) {
        dispatch(serviceActions.createServiceFailure("ERROR NOT CREATE SERVICE"))
    }
}
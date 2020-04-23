import {ModalDataType, ActionTypes} from '../Types'


export const commonActions = {
     modalShow : (data : ModalDataType) => {
        return {
            type : 'MODAL_SHOW',
            payload : data
        } as const
    } ,
   modalHide : () => {
        return {
            type : 'MODAL_HIDE',
        } as const
    }

}


 export type CommonActionType = ActionTypes<typeof commonActions>
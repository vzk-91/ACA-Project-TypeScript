import {ModalDataType} from '../Types'
export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';




export type ModalShowActionType = {
    type :typeof MODAL_SHOW
    payload : ModalDataType
}

export type ModalHideActionType = {
    type :typeof MODAL_HIDE
}



export const modalShow = (data : ModalDataType) : ModalShowActionType => {
    return {
        type : MODAL_SHOW,
        payload : data
    }
}

export const modalHide = () : ModalHideActionType => {
    return {
        type : MODAL_HIDE,
    }
}

export type CommonActionType = ModalShowActionType | ModalHideActionType
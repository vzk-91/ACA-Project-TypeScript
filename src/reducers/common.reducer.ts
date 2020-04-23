import {CommonActionType} from '../actions'
import {ModalDataType} from '../Types'



const defaulState = {
    modalOpen : false,
    modalData : {
        text : '',
        title : ''
    } as ModalDataType
}

type DefaultStateType = typeof defaulState



export default function commonReducer (state: DefaultStateType  = defaulState, action :CommonActionType) : DefaultStateType {
    switch (action.type) {
        case 'MODAL_SHOW':
            return {
                ...state,
              modalOpen : true,
              modalData : {...action.payload},
            };
           case "MODAL_HIDE": 
              return {
                  ...state,
                  modalOpen : false
              }
        default:
            return state;
    }
}
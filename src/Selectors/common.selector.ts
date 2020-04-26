import { AppStateType } from "../reducers";

export const getModalOpenSel = (state : AppStateType) => {
     return state.common.modalOpen
}
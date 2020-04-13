import React,{FC} from 'react';
import Details from '../Details'
import Modal from '@material-ui/core/Modal'
import {UserType} from '../../Types'


type OwnPropType = { 
  setChange: (pageState : string | null) => void
  open : boolean
  close : () => void
  scrollTo:() => void
  name : string | null
  uid : string
  id : string | null
  user : UserType
  change : string | null
  showOnlyComments?: boolean

}

const CommentModal : FC<OwnPropType> = (props)=>{
const {open, close,name,setChange,user,uid,id,change,showOnlyComments,scrollTo} = props

    return( <Modal  
   // aria-labelledby='simple-modal-title'
  //  aria-describedby='simple-modal-description'
  style ={{
    display: "flex",
    transition: "all 0.3s",
    overflowY: "scroll",
    outline: "none"
    }}
    open={open}
    onClose={close}>
        <div style ={{
        width: "50%",
        padding: "3vh",
        marginLeft: "38%",
        marginTop: "6%",
        position: "absolute",
        transition: "all 0.3s",
        backgroundColor:"#EFF3F8",
        borderRadius: "10px"
        }}>
    <Details
    name={name}
    setChange={setChange}
    user={user}
    uid={uid}
    id={id}
    change={change}
    showOnlyComments = {true}
    scrollTo ={scrollTo}
    setName={()=>{}}
    setId={()=>{}}
  />
  </div>
  </Modal>);
   
}

export default CommentModal;
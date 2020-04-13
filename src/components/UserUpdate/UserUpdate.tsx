import React, { useState,useEffect, Dispatch,ChangeEvent,FC,FormEvent } from 'react'
import { connect } from 'react-redux';
import Input from '../input/input'
import Button from '../Button'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import { userUpdateThunk } from '../../thunks';
import { getUser } from '../../utils';
import { AppStateType } from '../../reducers';
import {UserType,UserUpdateType} from '../../Types'


const useStyles = makeStyles(theme => ({
  formcss: {
    width: '100%',
    maxWidth: '360px'
  },
  '@media only screen and (max-width: 1200px)': {
    formcss: {
      width: '100%',
      maxWidth: '320px'
    }
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: 'translate(-50%, -50%)'
  },
  header: {
    marginTop: '20px'
  },
  browseInp: {
    marginTop: '20px',
    marginBottom: '20px',
    height: '40px'
  }
}))



type MapDispatchPropsType = {
  updateUser : (data : UserUpdateType, pic : string | null) => void
}

type OwnPropsType = {
  change: (pageState : string | null) => void
  handleClose : () => void
  handleOpen : ()=> void
  setUserData : (user : UserType) => void
  user : UserType
  open : boolean
  phone : string | null
}

type PropsType =  MapDispatchPropsType & OwnPropsType

const  UserUpdate : FC<PropsType> = ({ handleClose,user, handleOpen,setUserData, open ,updateUser, phone, change}) =>{

  const classes = useStyles()
  const [update, setUpdate] = useState({
    displayName: (user?  user.displayName: ""),
    phoneNumber: phone,
    id : user ? user.uid : null
  })



  const [changePicture, setChangePicture] = useState<any>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUpdate({ ...update, [name]: value })
  }

  const handleSubmit = ( e: FormEvent) => {
    e.preventDefault()
    if(update.displayName) {
      updateUser(update, changePicture);
      handleClose()
      getUser(setUserData)
    } else {
      console.log('Wrong');
    }
  }
  
  return (
    <div>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <div className={classes.formcss}>
            <div className='form-group'>
              <p>Update your Data</p>

              <TextField
                className={classes.header}
                id='outlined-basic'
                label='Name'
                variant='outlined'
                onChange={handleChange}
                name='displayName'
                value = {update.displayName}
              />
              <TextField
                className={classes.header}
                id='outlined-basic'
                label='Phone'
                variant='outlined'
                onChange={handleChange}
                type='number'
                name='phoneNumber'
                value = {update.phoneNumber}
              />
            </div>
            <div className='form-group-browse'>
              <Input
                type='file'
                id='file'
                onChange={(e : any) => setChangePicture(e.target.files[0])}
                inputSize='input--small'
              />
              <label htmlFor='file' id='up'>
                <div className={classes.browseInp} id='browse'>
                  {changePicture && `${changePicture!.name}`}
                </div>
                <label htmlFor='file'>Browse</label>
              </label>
            </div>
            <Button buttonStyle='SIGN' onClick={(e : any)=>{change(null); handleSubmit(e)}}>
              Update
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

const mapStateToProps = () =>{}


const mapDispatchToProps = (dispatch : Dispatch<any>) : MapDispatchPropsType => ({
    updateUser: (data, picture) => {
        dispatch(userUpdateThunk(data, picture))
    }
})
export default connect<unknown,MapDispatchPropsType,OwnPropsType,AppStateType>(mapStateToProps,mapDispatchToProps)(UserUpdate);

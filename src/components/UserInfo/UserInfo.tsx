import React,{useEffect, useState,FC, Dispatch} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from '@material-ui/icons/Settings';
import UserUpdate from '../UserUpdate';
import Button from '../Button';
import {connect} from 'react-redux';
import {userGetPhoneThunk} from '../../thunks'
import {userActions} from '../../actions'
import {useAuth} from '../../utils'
import { AppStateType } from '../../reducers';
import {UserType} from '../../Types'


const useStyles = makeStyles(theme => ({
    aside_wrapper: {
        minHeight: 850
    },
    user: {     
        height: 500,

    },
    container_user: {
        display: 'flex',
        align: 'items center', 
        height: 170,
       

    },
    list:{
       marginTop: "10px"
    },
    icons:{
        color:'#9a9ec8',
        fontSize:"40px",
        
    },
    text_area: {
        marginLeft: '7%',
        
    },
    image_style: {
        width: 88,
        height: 88,
        
    },
    create: {
        color: '#FFFFFF',
        width: 135,
        height: 40,
    },
    root:{
        marginTop: "25px"
    },
    
    button_place:{
        marginTop: "10px"
       
    },
}))

type MapStatePropsType = {
    phone : string | null
  }
  
  type MapDispatchPropsType = {
    getPhone: (id: string | null) => void
    setPhoneNull :()=> void
  }
  
  type OwnPropsType = {
    change: (pageState : string | null) => void
    guest?: boolean
    userInfo? : any
    id: string | null
    user?: any
  }
  
  type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const UserInfo : FC<PropsType> =({change,guest,userInfo,phone,getPhone,setPhoneNull,user,id})=>{



const [userData,setUserData] = useState(user)

  
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);
    
      useEffect(()=>{
      setPhoneNull()
      getPhone(id) 
      },[])
    
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
    return (
              <div className={classes.user}>
                    <Box>
                        <List className={classes.container_user}>
                            <ListItem>
                                {guest ? <Avatar src={userInfo? userInfo.photoURL:null} className={classes.image_style} /> : user ? <Avatar src={user? userData.photoURL:null} className={classes.image_style}  /> : null} 
                                <ListItemText
                                    primary={guest ? userInfo? userInfo.name : null : user? userData.displayName : null}
                                    className={classes.text_area}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                Service Member
                                  </Typography>
                                        </React.Fragment>
                                    }
                                />
                        { !guest &&
                        <IconButton  >
                        <SettingsIcon  onClick={handleOpen}/>
                        </IconButton>
                        }
                            </ListItem>
                        </List>
                    </Box>
                    {
                    phone !== "null" &&
                    <UserUpdate handleOpen={handleOpen} open={open} setUserData={setUserData} phone={phone} handleClose={handleClose} change={change} user = {user}/>
                    }  
                    <Box>
                        
                        <List className={classes.root}>

                            <ListItem className={classes.list}>
                                <ListItemAvatar>
                                    <MailOutlineIcon className={classes.icons}/>
                                </ListItemAvatar>
                                <ListItemText primary={guest ? userInfo ? userInfo.email : '...' : user ? user.email : '...'} />
                            </ListItem>

                            <ListItem className={classes.root}>
                                <ListItemAvatar>
                                    <PhoneIphoneOutlinedIcon className={classes.icons} />
                                </ListItemAvatar>
                                <ListItemText primary={guest ?userInfo  && phone !== "null" ? phone : "..." : user ? phone : '...' } />
                            </ListItem>

                            <ListItem className={classes.root}>
                                <ListItemAvatar>
                                    <MessageOutlinedIcon className={classes.icons}  />
                                </ListItemAvatar>
                                <ListItemText primary="Sent a message" />
                            </ListItem>
                           {!guest? <ListItem className={classes.button_place}>                            
                            <Button buttonStyle='SIGN'className={classes.create} onClick={()=>{change("Create")}}>
                                Create Service
                                </Button>
                            </ListItem>:""}
                           
                        </List>
                    </Box>
                </div>
    )
}

const mapStateToProps = (state : AppStateType) : MapStatePropsType => ({
    phone : state.user.phoneNumber
})


const mapDispatchToProps = (dispatch : Dispatch<any>) : MapDispatchPropsType => ({
    getPhone: (id ) => {
        dispatch(userGetPhoneThunk(id))
    },
    setPhoneNull :()=>{
        dispatch(userActions.userPhoneNumber("null"))
    }
})

export default connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>(mapStateToProps,mapDispatchToProps)(UserInfo);  

import React, { useState ,FC, FormEvent, ChangeEvent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import firebase from '../../vendor/sdk';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List } from '@material-ui/core';
import Typography from "@material-ui/core/Typography"
import Avatar from '@material-ui/core/Avatar';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import {UserType,CommentsType} from '../../Types'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection:'column'
  },
  textField: {
    marginTop: '11px',
    width: 150,
    backgroundColor: "#fff"

  },
  comment: {
    width: 783,
    minHeight:'90px',
    backgroundColor: "#fff",
    fontSize:14 
  },
  comment_place:{
   display: 'flex',
    flexDirection:'row'

  },
  save_style: {
    backgroundColor:'#9a9ec8 ',
    margin: '20px 0 0 93px',
    height: 40,
    width:130,
    borderRadius:10
  },
  listStyle:{
    display:'flex',
    flexDirection:'row',
    justifyContent : 'space-between',
    position : 'relative'

  },
 
  listText:{
    marginBottom: 30,
    font:' SemiBold 2px/30px Raleway',
    color: "#5860AF"
  },
  image_style: {
    marginRight:25,
    width: 60,
    height: 60
},
closeButton : {
  color : "#5860AF",
  cursor : 'pointer'
},



}));

type OwnPropType = { 
  user : UserType
  avatar: string | null
  id : string | null
  uid : string | null
  setChange : ( pageState : string | null) => void

}

const Textarea : FC<OwnPropType> = ({id,user,uid, avatar,setChange}) =>{
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();
  const [commentValue, setCommentValue] = useState({ comment: '' });
  const { comment } = commentValue;
  const commentData = {
    comment,
    create: Date.now(),
    id: uid,
    name : user.displayName,
    photoURL : user.photoURL 
  } as CommentsType
  
 


  const createComment = async (id : string | null, data : CommentsType) => {
    if (comment) {
      console.log(firebase.createComment)
      await firebase.createComment(id, data)
    } else {
      console.log("Wrong fields!")
    }
  }

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCommentValue({ comment, [name]: value });
  }

  return (
    <div>
      <List className={classes.listStyle}>
        <div style={{display:"flex"}} >
        <Typography variant="h5" className={classes.listText}> All Comments</Typography>
        <ExpandMoreIcon style={{color:"#5860AF", margin:'5px 0 0 5px'}}/>
        </div>
        <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Close">
        <CloseOutlinedIcon onClick={()=>setChange(null)} className={classes.closeButton}/>
    </Tooltip>
      </List>
      <form className={classes.root}>
   <div className={classes.comment_place}>

      <Avatar src={avatar!} className={classes.image_style} />
        <TextField id="outlined-basic" label=" Write a Comment" variant="outlined"  
        InputProps={{ classes: { input: classes.comment} }}
        style={{backgroundColor:'#fff'}}
        name="comment"
        multiline
        value={comment}
        onChange={handleChange} 
        />
   </div>
        

        <Button variant="contained"  href="#contained-buttons" className={classes.save_style}
          onClick={() => { createComment(id, commentData); setCommentValue({ comment: '' }) }}>
          Send
      </Button>
        
       
      </form>
    </div>

  );
}

export default Textarea
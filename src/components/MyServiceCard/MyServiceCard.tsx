import React,{FC} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Link from "@material-ui/core/Link";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";
import firebase from '../../vendor/sdk';
import {UserType} from '../../Types'


const useStyles = makeStyles((theme)  => ({
  card: {
    top: "230px",
    left: "765px",
    height: "265px",
    marginBottom:"25px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "10px",
    opacity: 1
  },
  title: {
    top: "349px",
    left: "805px",
    height: "29px",
    opacity: 1,
    textAlign: "left",
    fontFamily: 'Raleway Regular',
    letterSpacing: 0,
    color: "#8F94C3"
  },
  avatar: {
    top: "262px",
    left: "806px",
    width: "66px",
    height: "66px",
    opacity: 1
  },
  favoriteIcon: {
    top: "480px",
    left: "811px",
    width: "18px",
    height: "16px",
    color: "#8F94C3"
  },
  text: {
    top: "399px",
    left: "805px",
    width: "821px",
    height: "63px",
    opacity: 1,
    textAlign: "left",
    fontFamily: 'Raleway Regular',
    letterSpacing: 0,
    color: "#222"
  },
  header: {
    top: "262px",
    left: "806px",
    width: "174px",
    height: "66px",
    opacity: 1
  },
  details: {
    top: "480px",
    left: "1554px",
    width: "44px",
    height: "16px",
    opacity: 1,
    textAlign: "left",
    fontFamily: 'Raleway Regular',
    letterSpacing: 0,
    color: "#222"
  },
  arrowForwardIcon: {
    // width: "24px",
    height: "24px",
    color: "#5860AF",
    opacity: 1,
    // alignContent: "right",
    '&:hover': {
      backgroundColor: 'unset',
    }
  },
  close: {
    width: "24px",
    height: "24px",
    color: "#5860AF",
    opacity: 1,
    // alignContent: "right",
    '&:hover': {
      backgroundColor: 'unset',
    }
  },
  edit: {
    width: "24px",
    height: "24px",
    color: "#5860AF",
    opacity: 1,
    // alignContent: "right",
    backgroundImage:
      "url(https://public-v2links.adobecc.com/b379cec3-c306-4526-6677-1d2c64cf689a/component?params=component_id%3Af23665fc-71b1-4a6e-8f25-b1e4d0895c89&params=version%3A0&token=1580974462_da39a3ee_478cbbecfb4f2a42820f7e7d163796475cf82add&api_key=CometServer1)",
    '&:hover': {
      backgroundColor: 'unset',
    }
  },
  likes: {
    top: "806px",
    left: "805px",
    width: "24px",
    height: "24px",
    background: "transparent url('img/bad.png') 0% 0% no-repeat padding-box",
    opacity: 1,
    color : 'blue'
  },
  dislikes: {
    top: "810px",
    left: "890px",
    width: "24px",
    height: "24px",
    transform: "matrix(-1, 0, 0, -1, 0, 0)",
    background: "transparent url('img/good.png') 0% 0% no-repeat padding-box",
    opacity: 1
  },
  likesT: {
    // top: "807px",
    // left: "835px",
    width: "24px",
    height: "24px",
    // textAlign: "center",
    fontFamily: 'Raleway Regular',
    letterSpacing: 0,
    color: "#5860AF",
    // opacity: 1,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  dislikesT: {
    // top: "807px",
    // left: "835px",
    width: "24px",
    height: "24px",
    // textAlign: "center",
    fontFamily: 'Raleway Regular',
    letterSpacing: 0,
    color: "#5860AF",
    // opacity: 1,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  comments: {
    top: "810px",
    left: "971px",
    width: "106px",
    height: "19px",
    textAlign: "center",
    textDecoration: "underline",
    fontFamily: 'Raleway Regular',
    letterSpacing: 0,
    color: "#5860AF",
    cursor: "pointer",
    opacity: 1
  },
  like_comment:{
    display:"flex",
    alignItems:"center",
  },
  card_details:{
    display:"flex",
    alignItems:"center"
  },
  card_action:{
    justifyContent:"space-between"
  }

}));

type OwnPropsType = {
  id?: string
  setChange: (pageState : string | null) => void
  setName : (name : string | null) => void
  user?: UserType
  setId : (id : string | null) => void
  removeService : (id : string ) => void
  change : string | null
  name: string
  avatar : string | null
  likes : Array<string>
  dislikes:  Array<string>
  service?: any
  title : string
  text : string
  comments : number
}

export const MyServiceCard : FC<OwnPropsType> = ({id, user,change,removeService,likes,dislikes,text,setChange,setId,setName,
                                                 title,comments,avatar,name,service} ) => {
  const classes = useStyles();
  const findLikeDislike = (arr : Array<string>) => {
    const find= arr.find((el) : boolean | undefined => {
      if(user){
        return el === user.uid
      }})
      return find
  }

  const like = (id : string | null,userId : string) => {
    firebase.like(id,userId)
  }

  const dislike = (id : string | null,userId : string) => {
    firebase.Dislike(id,userId)
  }

  

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar src={avatar!} />}
        title={name}
        subheader={service}
        className={classes.header}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.text}
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions className={classes.card_action}>
        <div className={classes.like_comment}>
          <IconButton aria-label="add to favorites" style={findLikeDislike(likes) ? {'color' : '#7577DF'} : {'color' : '#757575'}} onClick={()=>{ user && like(id!,user.uid)}}>
            <ThumbUpIcon className={classes.likesT} />
          </IconButton>
  
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            className={classes.likesT}
          >
            {likes.length}
          </Typography>

          <IconButton aria-label="add to favorites" style={findLikeDislike(dislikes) ? {'color' : '#7577DF'} : {'color' : '#757575'}} onClick={()=>{user && dislike(id!,user.uid)}}>
            <ThumbDownIcon className={classes.dislikesT} />
          </IconButton>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            className={classes.dislikesT}
          >
            {dislikes.length}
          </Typography>

          <Typography className={classes.comments}>
            <Link
              onClick={()=> {setId(id!); setChange('details') ; setName(user.displayName)}}
              className={classes.comments}
            >
              Comments {comments}
            </Link>
          </Typography>
        </div>
        
       {change !== 'details' && <div className={classes.card_details}>
        
        
        

        <IconButton
          aria-label="delete"
          className={classes.arrowForwardIcon}
          size="small"
          onClick={()=> {setId(id!); setChange('details'); setName(user.displayName)}}
        >
          <Typography
          gutterBottom
          variant="body2"
          component="p"
          className={classes.details}
        >
          Details
        </Typography>

          <ArrowForwardIcon
            className={classes.arrowForwardIcon}
            fontSize="inherit"
            
          />
        </IconButton>

        <IconButton aria-label="delete" size="small"  >
          <EditTwoToneIcon
            className={classes.edit}
            fontSize="inherit"
            onClick={()=> {setId(id!); setChange('update')}}
          />
        </IconButton>
        <IconButton aria-label="delete" className={classes.close} size="small">
          <CloseTwoToneIcon
            className={classes.close}
            fontSize="inherit"
            onClick={()=>{removeService(id!)}}
          />
        </IconButton>
        </div>}
      </CardActions>
    </Card>
  );
};

export default MyServiceCard;

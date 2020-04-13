import React, { useEffect, Dispatch, FC } from "react";
import ServiceCard from "../ServiceCard";
import Textarea from "../Textarea";
import Grid from "../Grid";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { connect } from "react-redux";
import { serviceGetByIdThunk } from "../../thunks";
import {ServiceType,UserType,OwnerType} from '../../Types'
import {AppStateType} from '../../reducers';

const buttonStyle = {
  width: "auto",
  marginBottom: "5px",
  fontSize: '1.5rem',
  fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  color : "#5860AF",
  cursor : 'pointer',
  border: 'none',
  outline: 'none',
}


type MapStatePropsType = {
  serviceById : ServiceType
}

type MapDispatchPropsType = {
  getServiceById: ( id : string | null) => void
}

type OwnPropsType = {
  user : UserType
  id : string | null
  name : string | null
  uid : string
  change : string | null
  showOnlyComments? : boolean
  setChange : (pageState : string | null) => void
  scrollTo: () => void
  setName : (name: string | null) => void
  setId : (id : string | null) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const Details : FC<PropsType> = ({ id, getServiceById,user, serviceById, name, setChange,change, uid,showOnlyComments,scrollTo,setName,setId }) => {

  useEffect(() => {
    getServiceById(id);
  }, );
  
  const {
    title,
    dislikes = [],
    comments = [],
    likes = [],
    description,
    owner = {} as OwnerType
  } = serviceById 
  


  return (
    <div>
      { !showOnlyComments ?
        <ServiceCard
        setName={setName}
        setChange={setChange}
        setId={setId}
        user={user}
        title={title}
        uid={uid}
        id={id}
        likes={likes}
        comments={comments.length}
        change={change}
        dislikes={dislikes}
        text={description}
        avatar={owner.photoURL}
        ownerId={owner.id} 
      /> :
      <ArrowBackIosIcon onClick ={()=>{setChange(null); scrollTo();}} style ={buttonStyle}></ArrowBackIosIcon>
      }
    
      {uid && <Textarea setChange={setChange} user={user} id={id} avatar ={owner.photoURL} uid={uid} />}
      {comments.sort((a,b)=>{
                  return b.create - a.create}).map(el => {
      return <Grid key={el.id} date={el.create} text={el.comment} name={el.name} avatar={el.photoURL} />;
        })}
    </div>
  );
};

const mapStateToProps = (state : AppStateType) : MapStatePropsType => {
  const {service} = state
  const {serviceById} = service
  return {
    serviceById 
  };
};
const mapDispatchToProps = (dispatch : Dispatch<any>) : MapDispatchPropsType => {
  return {
    getServiceById: (id : string | null) => {
      dispatch(serviceGetByIdThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

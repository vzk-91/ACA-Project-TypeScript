import React, {useState, useEffect, FC, Dispatch} from 'react';
import Main from '../../components/Main'
import Block from '../../components/Block'
import Aside from '../../components/Aside'
import Header from '../../components/PrivateHeader/Header'
import UpdateProfile from '../../components/UpdateProfile'
import UserInfo from '../../components/UserInfo'
import {connect} from 'react-redux';
import {commonActions} from '../../actions/Common.actions'
import {serviceGetByIdThunk,servicesCreateThunk,serviceUpdateThunk,serviceGetByUserThunk,serviceDeleteThunk} from '../../thunks';
import MyServiceCard from '../../components/MyServiceCard';
import Details from '../../components/Details';
import FooterForm from '../../components/FooterForm/footerform'
import {ServiceType,UserType,ModalDataType,UpdateServiceDataType} from '../../Types'
import {AppStateType} from '../../reducers';



type MapStatePropsType = {
  serviceByUser : Array<ServiceType>
}

type MapDispatchPropsType = {
  getServiceById : (id : string | null) => void
  getServiceByUser : (id : string) => void
   createService : (data : ServiceType) => void
   updateService : (id : string , data : UpdateServiceDataType) => void
   removeService : (id : string ) => void
   errorModal : (data : ModalDataType ) => void
}

type OwnPropsType = {
  user? : UserType
  userId : any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const MyProfile : FC<PropsType> = ({getServiceByUser,userId,user,createService,updateService,getServiceById,serviceByUser,removeService,errorModal})=>{
     const [change, setChange] = useState<string | null>(null);
     const [id, setId] = useState<string | null>(null)
     const [name, setName] = useState<string | null>(null)

    //  const user = useAuth()
    
    
     useEffect(()=>{
      const userData = async()=>await getServiceByUser(user.uid)
      userData()
      getServiceById(id)
     },[])
    
const updated = serviceByUser.find(el =>{
  return el.id === id
})

const scrollTo = () => {}

    return(<>
        <Header user={user} myProfile={true}/>
        <Main >
           <Aside>
           <UserInfo  id={user.uid} user={user} change={setChange} />
           </Aside>
           <Block>
             {
              change === "Create" && <UpdateProfile  // have create/update and prevService{} value
                create = {createService} 
                user={user}
                change={change}
                setChange={setChange}
                errorModal={errorModal}
                id={id}
               />
             }
             {
              change === "update" && <UpdateProfile  user={user} // have create/update and prevService{} value
                update = {updateService} 
                serviceByUser={serviceByUser}
                prevService = {updated}
                id={id}
                change={change}
                setChange={setChange}
                errorModal={errorModal}
               />
             }
              {change === null && serviceByUser.sort((a,b)=>{
                  return a.create - b.create})
              .map(function(el ){ 
                      return <MyServiceCard avatar={el.owner.photoURL} key={el.id} id={el.id} change={change} setName={setName} setId={setId} 
                      setChange={setChange} user={user} title={el.title} likes={el.likes} dislikes={el.dislikes} name={el.owner.name}
                       comments={el.comments.length} text={el.description} removeService={removeService}/>
                     })}
             {change === 'details' && <Details scrollTo={scrollTo} setName={setName} setId={setId} name={name} setChange={setChange} user={user} uid={user.uid} id={id} change={change} /> } 
           </Block>
           <FooterForm/> 
        </Main>
      </>)
}
const mapStateToProps = (state : AppStateType) : MapStatePropsType =>{
  const {service} = state
  const {serviceByUser} = service
  return {
     serviceByUser
  }
} 
const mapDispatchToProps = (dispatch : Dispatch<any> ) : MapDispatchPropsType =>{
  return {
    getServiceById : (id  ) => {
      dispatch(serviceGetByIdThunk(id))
    },
    getServiceByUser : (id) => {
      dispatch(serviceGetByUserThunk(id))
    },
     createService : (data ) => {
       dispatch(servicesCreateThunk(data))
     },
     updateService : (id ,data) =>{
       dispatch(serviceUpdateThunk(id,data))
     },
     removeService : (id ) => {
       dispatch(serviceDeleteThunk(id))
     },
     errorModal : (data : ModalDataType) => {
        dispatch(commonActions.modalShow(data))
     }
  }
}
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,mapDispatchToProps)(MyProfile);
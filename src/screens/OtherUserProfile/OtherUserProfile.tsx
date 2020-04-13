import React, { useState, useEffect, FC, Dispatch } from 'react'
import Main from '../../components/Main'
import Block from '../../components/Block'
import Aside from '../../components/Aside'
import Header from '../../components/PrivateHeader/Header'
import UserInfo from '../../components/UserInfo'
import { connect } from 'react-redux'
import {serviceGetByUserThunk} from '../../thunks'
import ServiceCard from '../../components/ServiceCard'
import Details from '../../components/Details'
import FooterForm from '../../components/FooterForm/footerform'
import {ServiceType,UserType} from '../../Types'
import {AppStateType} from '../../reducers';
import { MatchProps } from '../../Types';



type MapStatePropsType = {
  serviceByUser : Array<ServiceType>
}

type MapDispatchPropsType = {
  getServiceByUser : (id : string) => void
}

type OwnPropsType = {
  user : UserType
  match : any
  userId : any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

type StrongOrNull = string | null

const OtherUserProfile : FC<PropsType> = ({getServiceByUser,user, serviceByUser, match}) => {
  const [change, setChange] = useState<StrongOrNull>(null)
  const [id, setId] = useState<StrongOrNull>(null)
  const [name, setName] = useState<StrongOrNull>(null)
  const {params: { userId }} = match

  useEffect(() => {
    getServiceByUser(userId)
  }, [])
  const scrollTo = () => {}
  return (
    <>
      <Header user={user} />
      <Main>
        <Aside>
          <UserInfo
            userInfo={serviceByUser[0] ? serviceByUser[0].owner : null}
            guest={true}
            id={userId}
            change={setChange}
          />
        </Aside>
        <Block>
          {change !== 'details' &&
            serviceByUser.sort((a,b)=>{
              return a.create  - b.create}).map(function (el) {
              return (
                <ServiceCard
                  user={user}
                  key={el.id}
                  avatar={el.owner.photoURL}
                  id={el.id}
                  ownerId={el.owner.id}
                  setName={setName}
                  change={change}
                  name={el.owner.name}
                  setId={setId}
                  setChange={setChange}
                  uid={user?user.uid:null}
                  title={el.title}
                  likes={el.likes}
                  dislikes={el.dislikes}
                  comments={el.comments.length}
                  text={el.description}
                />
              )
            })}
          {change === 'details' && (
            <Details setName={setName} setId={setId} name={name} id={id} user={user} setChange={setChange}  uid={user?user.uid:null} change={change} scrollTo={scrollTo} />
          )}
        </Block>
        <FooterForm />
      </Main>
    </>
  )
}
const mapStateToProps = (state : AppStateType) : MapStatePropsType => {
  const {service} = state
  const {serviceByUser} = service
  return {
    serviceByUser
  }
}
const mapDispatchToProps = (dispatch : Dispatch<any>) : MapDispatchPropsType => {
  return {
    getServiceByUser: id => {
      dispatch(serviceGetByUserThunk(id))
    }
  }
}
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(OtherUserProfile)

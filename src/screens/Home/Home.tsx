import React, { useState, useEffect,useRef, FC, Dispatch} from "react";
import Main from "../../components/Main";
import Block from "../../components/Block";
import Aside from "../../components/Aside";
import Header from "../../components/PrivateHeader/Header";
import ServiceCard from "../../components/ServiceCard";
import MiniCard from "../../components/MiniCard";
import CommentModal from '../../components/CommentModal'
import List from "../../components/Categories-list";
import "./home.style.css";
import { connect } from "react-redux";
import { serviceGetThunk, serviceGetCategoriesThunk } from "../../thunks";
import FooterForm from '../../components/FooterForm/footerform'
import {ServiceType,UserType} from '../../Types'
import {AppStateType} from '../../reducers';
import {getServiceSel} from '../../Selectors'



type ServiceArrayType = Array<ServiceType>

type MapStatePropsType = {
  services : ServiceArrayType
}

type MapDispatchPropsType = {
  getServices : () => void
  getByCategory : (category: string) => void
}

type OwnPropsType = {
  user : UserType
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const Home : FC<PropsType> = ({ services, getServices, getByCategory, user }) => {
  const myRef= useRef<HTMLDivElement>()
  const scrollTo = ()=>{
    setTimeout(()  =>{
      myRef.current!.style.backgroundColor = "#d3d6f5";
      myRef.current!.style.opacity = "0.8";
      myRef.current!.style.transition = "all 0.6s";
    },300)  
    setTimeout(()=>{
      myRef.current!.style.backgroundColor = "#FFFFFF";
      myRef.current!.style.transition = "all 0.8s"
      myRef.current!.style.opacity = "1";

    },1000) 
    }
    
  useEffect(() => {
    getServices();
  }, []);

  
  const [change, setChange] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  
 const open = ()=>{}
 const close = ()=>{}
  
  return (
    <>
      <Header user={user} />
      <Main className="home-root">
        <Aside>
          <List getCategory={getByCategory} />
          
          {[...services]
            .sort((a, b) => {
              return b.likes.length - a.likes.length;
            })
            .slice(0, 2)
            .map(el => {
              return (
                <MiniCard
                  key={el.id}
                  name={el.owner.name}
                  uid={user ? user.uid : null}
                  ownerId={el.owner.id}
                  avatar={el.owner.photoURL}
                  title={el.title}
                  text={el.description}
                />
              );
            })}
        </Aside>
        <Block>
          
          {  (
                 <CommentModal 
                open={change? true : false}
                close={close}
                name={name}
                setChange={setChange}
                user={user}
                uid={user ? user.uid : null}
                id={id}
                change={change}
                showOnlyComments = {true}
                scrollTo ={scrollTo}
                 />
                )}
          {
           services
            .sort((a : ServiceType, b: ServiceType) : number => {
              return b.create - a.create
            })
            .map(function(el : ServiceType)  {
              return (
                <ServiceCard
                  myRef = {myRef}
                  key={el.id}
                  title={el.title}
                  user={user}
                  name={el.owner.name}
                  uid={user ? user.uid : null}
                  ownerId={el.owner.id}
                  likes={el.likes}
                  id={el.id}
                  dislikes={el.dislikes}
                  comments={el.comments.length}
                  text={el.description}
                  avatar={el.owner.photoURL}
                  change={change}
                  setChange={setChange}
                  setName={setName}
                  setId={setId}
                />
              );
            })}
        </Block>
        
        <FooterForm />
      </Main>
    </>
  );
};

const mapStateToProps = (state : AppStateType) : MapStatePropsType => {
  return {
    services : getServiceSel(state)
  };
};

const mapDispatchToProps = (dispatch : Dispatch<any>) : MapDispatchPropsType => {
  return {
    getServices: () => {
      dispatch(serviceGetThunk());
    },

    getByCategory: (category )  => {
      dispatch(serviceGetCategoriesThunk(category));
    },
  };
};

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(Home);

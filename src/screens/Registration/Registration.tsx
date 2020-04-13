import React, { Dispatch, FC } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ContentRegistration from '../../components/ContentRegistration/ContentRegistration';
import { userRegisterThunk } from '../../thunks';
import './registration.style.css';
import {UserType} from '../../Types'
import {AppStateType} from '../../reducers';


type MapStatePropsType = {
    user : UserType
}

type MapDispatchPropsType = {
  register : (name : string, email : string, password : string, picture?:string) => void
}


type PropsType = MapStatePropsType & MapDispatchPropsType 

const Register : FC<PropsType> = ({user, register}) => {
   
    

    
    return (
        <div>
            <Header />
            <ContentRegistration 
                onRegister={register} 
                user={user}
            />
        </div>
    );
};

const mapStateToProps = (state : AppStateType) : MapStatePropsType => ({
    user: state.user.user
})


const mapDispatchToProps = (dispatch : Dispatch<any>) : MapDispatchPropsType => ({
    register: (name, email, password, picture) => {
        dispatch(userRegisterThunk(name, email, password, picture))
    }
})


export default connect<MapStatePropsType, MapDispatchPropsType, unknown, AppStateType>(mapStateToProps, mapDispatchToProps)(Register);
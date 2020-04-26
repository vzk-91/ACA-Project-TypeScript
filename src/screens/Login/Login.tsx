import React, { FC, Dispatch } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ContentLogin from '../../components/ContentLogin/ContentLogin';
import { userLoginThunk } from '../../thunks';
import {UserLoginType} from '../../Types'
import {AppStateType} from '../../reducers';
import {getIsLoadingSel} from '../../Selectors'

type MapStatePropsType = {
    isLoading: boolean
  }
  
  type MapDispatchPropsType = {
    login : (loginData: UserLoginType) => void
  }
  

  type PropsType = MapStatePropsType & MapDispatchPropsType 

const Login : FC<PropsType> = (props) => {


    const onLogin = (data : UserLoginType) : void => {
        props.login(data)
    }


    return (
        <div>
            <Header />
            <ContentLogin onLogin={onLogin} isLogging={props.isLoading} />
        </div>
    );
};

const mapToProps = (state : AppStateType) : MapStatePropsType => {
    return {
        isLoading: getIsLoadingSel(state)
    }
}

const mapToDispatch = (dispatch : Dispatch<any>) : MapDispatchPropsType => {
    return {
        login: (data ) => {
            dispatch(userLoginThunk(data))
        }
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType , unknown, AppStateType >(
    mapToProps,
    mapToDispatch
)(Login);

import React, { useEffect, Dispatch, FC } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { commonActions } from "./actions";
import { PrivateRoute, history } from "./utils";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/MyProfile";
import OtherUserProfile from "./screens/OtherUserProfile";
import Registration from "./screens/Registration";
import Modal from "./components/Modal";
import "./App.css";
import { useAuth } from "./utils";
import {ServiceType,UserType, ModalDataType} from './Types'
import {AppStateType} from './reducers';



type ServiceArrayType = Array<ServiceType>

type MapStatePropsType = {
  modalOpen : boolean
  modalData : ModalDataType
}

type MapDispatchPropsType = {
  modalHide: () => void
}



type PropsType = MapStatePropsType & MapDispatchPropsType 

const App : FC<PropsType> = props => {
  const user : UserType = useAuth();

  const { modalHide, modalData, modalOpen } = props;
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={p => <Home {...p} user={user} />} />
          <Route exact path="/login" render={p => <Login {...p} />} />
          <Route
            exact
            path="/registration"
            render={p => <Registration {...p} />}
          />
          <Route
            exact
            path="/profile"
            render={p => <Profile userId={true}  user={user}  /> }
          />
          <Route
            exact
            path="/OtherProfile/:userId"
            render={p => <OtherUserProfile {...p} userId={true} user={user} />}
          />
          {/* <Route
            exact
            path="/footerform"
            render={p => <FooterForm />}
          /> */}
        </Switch>
        <Modal data={modalData} open={modalOpen} onClose={modalHide} />
        {/* <FooterForm/> */}
      </div>
    </Router>
  );
};

const mapStateToProps = (state : AppStateType) : MapStatePropsType => {
  const {common} = state
  const {modalData,modalOpen} = common
  return {
    modalData,
    modalOpen
  };
};

const mapDispatchToProps = (dispatch : Dispatch<any>) : MapDispatchPropsType => {
  return {
    modalHide: () => {
      dispatch(commonActions.modalHide());
    }
  };
};

export default connect<MapStatePropsType, MapDispatchPropsType, unknown, AppStateType>(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import {addNewMessageAC, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import  {connect} from "react-redux"

/*const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          const state = store.getState().messagePage;
          const addMessage = () => {
            store.dispatch(addNewMessageAC());
          };
          const updateNewMessage = (text) => {
            store.dispatch(updateNewMessageText(text));
          };

          return <Dialogs
            updateNewMessageText={updateNewMessage}
            addMessage={addMessage}
            messages={state.messages}
            dialogs={state.dialogs}
            newMessageText={state.newMessageText}
          />
        }
      }

    </StoreContext.Consumer>
  )
};*/

const mapStateToProps= (state) => {
  return {
    messagePage: state.messagePage
  }
};

const mapDispatchToProps =(dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageText(text));
    },
    addMessage: ()=> {
      dispatch(addNewMessageAC());
    }

  }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;
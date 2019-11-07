import {addNewMessageAC, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import  {connect} from "react-redux"


const mapStateToProps= (state) => {
  return {
    messagePage: state.messagePage,
    isAuth: state.auth.isAuth
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
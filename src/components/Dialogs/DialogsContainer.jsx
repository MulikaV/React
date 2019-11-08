import {addNewMessageAC, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import  {connect} from "react-redux"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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


export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs);
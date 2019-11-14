import {addNewMessage} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import  {connect} from "react-redux"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps= (state) => {
  return {
    messagePage: state.messagePage
  }
};

export default compose(connect(mapStateToProps,{addNewMessage}),withAuthRedirect)(Dialogs);
import React from "react"


export default class ProfileStatus extends React.Component {

  state = {
    editMode: false
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  };

  render() {
    return <div>
      {this.state.editMode
        ? <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
        : <h4 onDoubleClick={this.activateEditMode}>  {this.props.status}</h4>
      }
    </div>
  }

}

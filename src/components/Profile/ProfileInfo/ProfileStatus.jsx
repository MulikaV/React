import React from "react"


export default class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    });

  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  };

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }

  }

  render() {
    return <div>
      {this.state.editMode
        ? <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange}
                 value={this.state.status}/>
        : <h4 onDoubleClick={this.activateEditMode}>  {this.props.status || "--------"}</h4>
      }
    </div>
  }

}

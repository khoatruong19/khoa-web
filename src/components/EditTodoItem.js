import React, { Component } from "react";
import Modal from "./Modal"
import {BiEdit} from "react-icons/bi"
import "../styles/EditTodoItem.scss"
class EditTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: this.props.item.title,
      comment: this.props.item.comment
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
      const {title,comment} = this.state
    return (
      <>
        <Modal show={this.state.show} handleClose={this.hideModal} editItem ={this.props.editItem} id ={this.props.item.id} title ={this.state.title} comment = {this.state.comment}>
          <form action="" className="edit-container">
                <h1>EDIT</h1>
              <div className="title-edit">
                    <label htmlFor="">Title</label>
                    <input type="text" value = {title} onChange={(e) => this.setState({...this.state,title:e.target.value})}/>
              </div>
              <div className="comment-edit">
                    <label htmlFor="">Comment</label>
                    <input type="text" value={comment} onChange={(e) => this.setState({...this.state,comment: e.target.value})}></input>
              </div>
          </form>
        </Modal>
        <BiEdit onClick={this.showModal} />
        </>
    );
  }
}

export default EditTodoItem
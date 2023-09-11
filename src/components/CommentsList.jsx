import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  render() {
    // const myArr = [this.props.commentList];
    // console.log("myarr", myArr);
    return (
      <ListGroup
        as="ol"
        numbered
        style={{ marginTop: "20px", width: "fit-content" }}
      >
        {this.props.commentList.map((elem) => (
          <ListGroup.Item as="li" key={`commID-${elem._id}`}>
            {elem.comment}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
export default CommentsList;

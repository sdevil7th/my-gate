import React from "react";
import moment from "moment";
import data from "../data";
import Layout from "../../components/Layout/Layout";
import "./Comment.scss";
class Communications extends React.Component {
  state = {
    comment: ""
  };
  onClickBack = () => {
    this.props.history.goBack();
  };
  onAddComment = () => {
    console.log("Comment", this.state.comment);
    this.setState({ comment: "" });
    this.props.history.goBack();
  };
  render() {
    let discussion = data.communicationsData.find(
      item => item.id === this.props.match.params.discussion
    );
    return (
      <Layout onClickBack={this.onClickBack} header="Add Comment">
        <div className="comment-container">
          <div className="discussion-header">
            <div className="card-header">
              <div className="header-icon-container">
                <i className="fa fa-comment" aria-hidden="true" />
              </div>
              <div className="header-text-container">
                <p className="header-text">{discussion.title}</p>
                <p className="header-content">
                  <span>{discussion.type}</span>
                </p>
              </div>
            </div>
            <p>
              <i class="fa fa-user" aria-hidden="true" /> Started by{" "}
              {data.users.find(item => item.id === discussion.createdBy).name} -{" "}
              {moment(discussion.time).format("DD MMM")}
            </p>
          </div>
          <div className="commentbox-container">
            <textarea
              type="text"
              placeholder="Write your comment..."
              value={this.state.comment}
              onChange={event => this.setState({ comment: event.target.value })}
            />
            <button className="add-comment-button" onClick={this.onAddComment}>
              <i className="fa fa-comment" aria-hidden="true" />
              ADD COMMENT
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Communications;

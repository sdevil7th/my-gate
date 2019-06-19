import React from "react";
import data from "../data";
import Layout from "../../components/Layout/Layout";
import CommCard from "../../components/CommCard/CommCard";
import DiscussionComment from "../../components/DiscussionComment";
import "./Discussion.scss";
class Communications extends React.Component {
  onClickBack = () => {
    this.props.history.goBack();
  };
  onHide = () => {
    console.log("toggleHide");
  };
  onStartDiscussion = () => {
    console.log("start discussion");
  };
  render() {
    let button = {
      name: "ADD COMMENT",
      onClick: this.onStartDiscussion
    };
    return (
      <React.Fragment>
        <Layout
          onClickBack={this.onClickBack}
          header="Discussion Details"
          hide={true}
          onHide={this.onHide}
          button={button}
        >
          <div className="discussion-header-2">
            <div className="card-header no-padding">
              <div className="header-icon-container">
                <i className="fa fa-comment" aria-hidden="true" />
              </div>
              <div className="header-text-container">
                <p className="header-text">Bbbnn</p>
                <p className="header-content">
                  <span>DISCUSSION</span>
                </p>
              </div>
            </div>
            <p>
              <i className="fa fa-user" aria-hidden="true" />{" "}
              <span style={{ paddingLeft: "10px" }}>
                Started by Someone - 18 Jun
              </span>
            </p>
            <p>
              <i className="fa fa-comment" aria-hidden="true" />{" "}
              <span style={{ paddingLeft: "10px" }}>Bvvhbb</span>
            </p>
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="tmp"
                className="image"
              />
              <img
                src="https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="tmp"
                className="image"
              />
              <img
                src="https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="tmp"
                className="image"
              />
            </div>
          </div>
        </Layout>
        <div>
          <p style={{ padding: "0 15px" }}>5 COMMENTS</p>
          <hr />
          <div>
            <DiscussionComment />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Communications;

import React from "react";
import data from "../data";
import Layout from "../../components/Layout/Layout";
import CommCard from "../../components/CommCard/CommCard";
import "./Communications.scss";
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
      name: "START DISCUSSION",
      onClick: this.onStartDiscussion
    };
    return (
      <Layout
        onClickBack={this.onClickBack}
        header="Communications"
        hide={true}
        onHide={this.onHide}
        button={button}
      >
        <div className="comm-container">
          {data.communicationsData.map((item, index) => (
            <CommCard data={item} users={data.users} key={"CommCard" + index} />
          ))}
        </div>
      </Layout>
    );
  }
}

export default Communications;

import React, { Component } from "react";
import data from "./data";

class DiscussionComment extends Component {
  render() {
    console.log(data);
    return (
      <div>
        {data.map((d, i) => {
          return (
            <div
              className="disc-comm-container"
              style={{ marginLeft: "10px" }}
              key={i}
            >
              <p>{d.comment}</p>
              <div
                style={{
                  background: "rgb(234, 231, 231)",
                  margin: "20px",
                  height: "50px",
                  display: "flex"
                }}
              >
                {d.replies.map((repl, index) => {
                  return (
                    <p key={index} style={{ paddingLeft: "10px" }}>
                      {repl.comment}
                    </p>
                  );
                })}
              </div>
              <div style={{ paddingLeft: "20px" }}>
                <i className="fa fa-reply" aria-hidden="true" />{" "}
                <span>Reply</span>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DiscussionComment;

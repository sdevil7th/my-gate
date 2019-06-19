import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./CommCard.scss";

const CommCard = props => {
  return (
    <div className="commCard-container">
      <Link to={"/discussion/" + props.data.id}>
        <div className="card-header">
          <div className="header-icon-container">
            <i className="fa fa-comment" aria-hidden="true" />
          </div>
          <div className="header-text-container">
            <p className="header-text">{props.data.title}</p>
            <p className="header-content">
              <span>{props.data.type}</span>
              {
                props.users.find(item => item.id === props.data.createdBy).name
              }{" "}
              - {moment(props.data.time).format("DD MMM")}
            </p>
          </div>
        </div>
      </Link>
      <div className="card-content">
        {props.data.noOfReplies ? (
          <p>
            <i className="fa fa-comment" aria-hidden="true" />
            Reply {props.data.noOfReplies}
          </p>
        ) : (
          ""
        )}
        <p>
          <i className="fa fa-hashtag" aria-hidden="true" />
          {props.data.comments.length} Comment(s)
        </p>
      </div>
      <div className="button-container">
        <Link to={"/discussion/" + props.data.id + "/addcomment"}>
          <button>
            <i className="fa fa-comment" aria-hidden="true" />
            Comment
          </button>
        </Link>
        <button onClick={() => console.log("Hide toggle")}>
          <i className="fa fa-eye-slash layout-hide" aria-hidden="true" /> Hide
        </button>
      </div>
    </div>
  );
};

export default CommCard;

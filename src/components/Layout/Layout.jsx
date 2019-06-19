import React from "react";
import Scrollbar from "react-perfect-scrollbar";
import "./Layout.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

const Layout = props => {
  return (
    <div className="layout-container">
      <div className="layout-header">
        <i
          className="fa fa-arrow-left layout-back-button"
          aria-hidden="true"
          onClick={props.onClickBack}
        />
        <span className="layout-header--text">{props.header}</span>
        {props.hide ? (
          <i
            className="fa fa-eye-slash layout-hide"
            aria-hidden="true"
            onClick={props.onHide}
          />
        ) : (
          ""
        )}
      </div>
      <div className="layout-content">
        <Scrollbar>{props.children}</Scrollbar>
      </div>
      {props.button ? (
        <button className="footer-button" onClick={props.button.onClick}>
          <i className="fa fa-comment" aria-hidden="true" />
          {props.button.name}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Layout;

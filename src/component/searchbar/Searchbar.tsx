import React from "react";

export default function Searchbar() {
  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Email" />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </p>
    </div>
  );
}

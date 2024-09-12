import React from "react";
import PropTypes from "prop-types";

function PropValidation(props) {
  return (
    <>
      <div>
        <h1>ReactJS Props Validation Example</h1>
        <table>
          <tr>
            <th>Type</th>
            <th>Value</th>
            <th>Valid</th>
          </tr>
          <tr>
            <td>Array</td>
            <td>{props.propArray.toString()}</td>
            <td>{props.propArray ? "true" : "false"}</td>
          </tr>
          <tr>
            <td>Boolean</td>
            <td>{props.propBool ? "true" : "false"}</td>
            <td>{props.propBool ? "true" : "false"}</td>
          </tr>
          <tr>
            <td>Function</td>
            <td>{props.propFunction(5)}</td>
            <td>{props.propFunction(5) ? "true" : "false"}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

PropValidation.propTypes = {
  propArray: PropTypes.array,
  propBool: PropTypes.bool,
  propFunction: PropTypes.func,
};

export default PropValidation;

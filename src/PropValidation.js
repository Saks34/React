// src/PropValidation.js
import React from 'react';
import PropTypes from 'prop-types'; // Correctly import PropTypes
import './propValidation.css'; // Ensure this file exists

function PropValidation(props) {
    return (
        <div>
            <h1>ReactJS Props Validation Example</h1>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Array</td>
                        <td>{JSON.stringify(props.propsArray)}</td>
                        <td>{Array.isArray(props.propsArray) ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>{props.proBool ? "true" : "false"}</td>
                        <td>{typeof props.proBool === 'boolean' ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Function</td>
                        <td>{props.function ? props.function(5) : "No function"}</td>
                        <td>{typeof props.function === 'function' ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{props.propsString}</td>
                        <td>{typeof props.propsString === 'string' ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{props.propNumber}</td>
                        <td>{typeof props.propNumber === 'number' ? "true" : "false"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

// Define PropTypes
PropValidation.propTypes = {
    propsArray: PropTypes.array.isRequired,
    proBool: PropTypes.bool.isRequired,
    function: PropTypes.func.isRequired,
    propsString: PropTypes.string.isRequired,
    propNumber: PropTypes.number.isRequired
};

// Define default props
PropValidation.defaultProps = {
    propsArray: [],
    proBool: false,
    function: () => "Function not provided",
    propsString: "Default string",
    propNumber: 0
};

export default PropValidation;
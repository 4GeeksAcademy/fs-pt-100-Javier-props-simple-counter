import React from "react";

export const Digit = (props) => {
    return (
        <div className="bg-dark text-white">
            <p className="fs-1">
                {props.digitValue}
            </p>
        </div>
    )
}
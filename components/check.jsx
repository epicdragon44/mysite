import React, { useState } from "react";

const FancyCheckbox = ({ value, checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    };

    const style = {
        checkbox: {
            width: "50px",
            height: "20px",
            borderRadius: "50px",
            backgroundColor: isChecked ? "black" : "grey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
        },
    };

    return (
        <div
            style={style.checkbox}
            onClick={handleCheckboxChange}
            role='checkbox'
            aria-checked={isChecked}
            tabIndex={0}
        >
            {isChecked && <span style={{ color: "white" }}>&#10003;</span>}
        </div>
    );
};

export default FancyCheckbox;

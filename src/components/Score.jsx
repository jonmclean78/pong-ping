import React from "react";

export default ({ score, onClick, disabled }) => (
    <div>
        <p className="well">{ score }</p>
        <button className="btn btn-primary" onClick={onClick} disabled={disabled}>Add</button>
    </div>
);

// disable the Add button..
// disabled is a property for buttons, so we should be able to pass the property to the button if the player input is empty.  The Button's initial disabled state is set to True.  Then, when a name is added the disabled state is updated to false, and the button is available to use.
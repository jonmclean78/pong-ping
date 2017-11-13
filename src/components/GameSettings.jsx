import React from 'react';
import NumberOfServes from "../containers/NumberOfServes";
import EndScore from "../containers/EndScore";

export default () => (
	<div className="form-group">
		<h3>Game Settings</h3>
		<NumberOfServes />
		<EndScore />
	</div>
);
import React from 'react';

export default ({ numberOfServes, onChange }) => (
	<div className="form-group">
	    <label>Number of serves:</label>
	    <select className="form-control" value={numberOfServes} onChange={onChange}>
	        <option value="5">5</option>
	        <option value="2">2</option>
	    </select>
	</div>
);
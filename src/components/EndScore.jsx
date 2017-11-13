import React from 'react';

export default ({ endOn, onChange }) => (
	<div className="form-group">
    <label>End score:</label>
    <input type="number" className="form-control" value={ endOn } onChange={ onChange } />
</div>
);
import React from 'react';

export default ({ name, onChange }) => (
    <div className="form-group">
        <input className="form-control" placeholder="Name" onChange={ onChange } value={ name } />
    </div>
);
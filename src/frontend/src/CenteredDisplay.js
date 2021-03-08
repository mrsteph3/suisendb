import React from 'react';

const CenteredDisply = props => (
    <div style={{margin: '0 auto', textAlign: 'center'}}>
        {props.children}
    </div>
);

export default CenteredDisply;
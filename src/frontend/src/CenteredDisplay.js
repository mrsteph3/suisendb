import React from 'react';

const CenteredDisplay = props => (
    <div style={{margin: '0 auto', textAlign: 'center'}}>
        {props.children}
    </div>
);

export default CenteredDisplay;
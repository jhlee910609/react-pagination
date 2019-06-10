import React from 'react'


const InnerComponent = ({handleClick}) => (
    <div onClick={handleClick}>
        Click, Here!
    </div>
)

export default InnerComponent;

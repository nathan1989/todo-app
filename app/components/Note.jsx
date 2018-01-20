import React from 'react'

// export default ({task}) => <div>{task}</div>
// same as
// export default (props) => <div>{props.task}</div>

export default ({children, ...props}) => (
    <div {...props}>
        {children}
    </div>
)
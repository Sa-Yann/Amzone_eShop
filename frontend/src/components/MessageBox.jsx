import React from 'react'

function MessageBox(props) {
    // we use props cause we need to acces the content in the err variable 
    // define in teh children component HomePage.jsx
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {/* we show the message */}
            {props.children}
            {/* children is a special  prop that show the content in the component it was declared 
            in our case MessageBox*/}
            {/* so the {error} that is in between teh <MessageBox>{error}</MessageBox> in 
            HomePage.jsx will be dispay in this div via {props.children} */}
            
        </div>
    )
}

export default MessageBox

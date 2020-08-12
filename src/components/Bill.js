import React from 'react';

class Bill extends React.Component {

render(){

    let billDetails = {...this.props.details}
    return(

            <div>
                <span>{billDetails.billTitle}</span>
                <span>{billDetails.dueDate}</span>
                <span>{billDetails.billTotal}</span>
                <span>{billDetails.recurTiming}</span>
                <button>Edit Me</button>
                <button>Delete Me</button>
                <button>Mark Me Done</button>
            </div>
    )
}
}

export default Bill;

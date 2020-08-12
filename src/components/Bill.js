import React from 'react';

class Bill extends React.Component {

render(){

    let billDetails = {...this.props.details}
    return(

            <div className='indiBill'>
                <div>
                    <span>{billDetails.billTitle}</span>
                    <span>{billDetails.dueDate}</span>
                    <span>{billDetails.billTotal}</span>
                    <span>{billDetails.recurTiming}</span>
                </div>
                
                <div>
                    <button>E</button>
                    <button>D</button>
                    <button>C</button>
                </div>
               
            </div>
    )
}
}

export default Bill;

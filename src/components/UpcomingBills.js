import React from 'react';
import Bill from './Bill';

class UpcomingBills extends React.Component {

render(){
    return(
        <section>
            <h3>Upcoming Bills</h3>
            <ol>
                <li><Bill/><label htmlFor='bill1'>Paid</label><input type='checkbox' id='bill1'/></li>
                <li><Bill/><label htmlFor='bill2'>Paid</label><input type='checkbox' id='bill2'/></li>
            </ol>
        </section>
        
    )
}
}

export default UpcomingBills;
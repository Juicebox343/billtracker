import React from 'react';
import Bill from './Bill';

class UpcomingBills extends React.Component {

render(){
    return(
        <section className='section upcomingBillsSection'>
            <h3>Upcoming Bills</h3>
            <ol>
                {Object.keys(this.props.allBills).map(bill => {
                    let details = this.props.allBills[bill];
                    return <li><Bill details={details}/></li>
                })}
                {/* <li><Bill/><label htmlFor='allBill1'>Paid</label><input type='checkbox' id='allBill1'/></li> */}
            </ol>
        </section>
        
    )
}
}

export default UpcomingBills;
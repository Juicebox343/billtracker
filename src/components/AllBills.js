import React from 'react';
import Bill from './Bill';

class AllBills extends React.Component {

render(){
    return(
        <section>
            <h3>A Big List of All Bills</h3>
            <ol>
                <li><Bill/><label htmlFor='bill1'>Paid</label><input type='checkbox' id='bill1'/></li>
                <li><Bill/><label htmlFor='bill2'>Paid</label><input type='checkbox' id='bill2'/></li>
                <li><Bill/><label htmlFor='bill3'>Paid</label><input type='checkbox' id='bill3'/></li>
                <li><Bill/><label htmlFor='bill4'>Paid</label><input type='checkbox' id='bill4'/></li>
                <li><Bill/><label htmlFor='bill5'>Paid</label><input type='checkbox' id='bill5'/></li>
            </ol>
        </section>
        
    )
}
}

export default AllBills;
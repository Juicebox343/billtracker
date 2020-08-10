import React from 'react';
import Bill from './Bill';

class SearchBills extends React.Component {

render(){
    return(

        <section className='section searchBillsSection'>
            <h3>Search All Bills</h3>
            <input type='text' placeholder='Search Bills'/> 
            <div>
                <h3>Search Results</h3>
                <Bill/>
            </div>

        </section>
 
        
    )
}
}

export default SearchBills;
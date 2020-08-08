import React from 'react';

class AddBills extends React.Component {

render(){
    return(
        <section>
            <h3>Add a Bill</h3>
            <div>
                <label htmlFor='billTitle'>Bill Name</label>
                <input type='text' name='billTitle' placeholder='Lasagna of the Month'/>
            </div>
            
            <div>
                <label htmlFor='dueDate'>Due Date</label>
                <input type='date' id='dueDate'/>
            </div>
           
            <div>
                <label htmlFor='billTotal'>Amount (Optional)</label>
                <input type='number' step='any'/>
            </div>
            <div>
                <label htmlFor='recurringQ'>Recurring?</label>
                <input type='checkbox' id='recurringQ'/>
                <select>
                    <option>Every</option>
                    <option>Every Other</option>
                </select>
                <input type='number'/>
                <select>
                    <option>Day</option>
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                </select>
                <span>
                    On
                </span>
                <input type='date'></input>
            </div>

        </section>
        
    )
}
}

export default AddBills;
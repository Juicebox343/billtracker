import React from 'react';

class AddBills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          billTitle: '',
          dueDate: '',
          billTotal: '',
          isRecurring: true,
          recurTiming: ''
        };
      }


handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBillFunction(this.state);
    this.setState({ 
        billTitle: '',
        dueDate: '',
        billTotal: '',
        isRecurring: true,
        recurTiming: ''
    });
}

handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.name === 'isRecurring' ? e.target.checked : e.target.value;
    this.setState({[name]: value})
}


render(){
    return(
        <section className='section addBillSection'>
            <h2>Add a Bill</h2>
            <form className='addBillForm' onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='billTitle'>Bill Name</label>
                    <input type='text' value={this.state.billTitle} onChange={this.handleChange} name='billTitle' id='billTitle' placeholder='Lasagna of the Month'/>
                </div>
                
                <div>
                    <label htmlFor='dueDate'>Due Date</label>
                    <input type='date' value={this.state.dueDate} onChange={this.handleChange} name='dueDate' id='dueDate'/>
                </div>
            
                <div>
                    <label htmlFor='billTotal'>Amount (Optional)</label>
                    <input type='number' step='any' value={this.state.billTotal} onChange={this.handleChange} id='billTotal' name='billTotal'/>
                </div>
                <div>
                    <label htmlFor='isRecurring'>Recurring?</label>
                    <input type='checkbox' checked={this.state.isRecurring} onChange={this.handleChange} id='isRecurring' name='isRecurring'/>
                    {/* <select>
                        <option>Every</option>
                        <option>Every 2nd</option>
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
                    <input type='date'></input> */}
                </div>
                <button type='submit'>Add Bill</button>
            </form>
           

        </section>
        
    )
}
}

export default AddBills;
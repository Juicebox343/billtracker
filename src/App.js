import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddBills from './components/AddBills';
import UpcomingBills from './components/UpcomingBills';
import BillCalendar from './components/BillCalendar';
import SearchBills from './components/SearchBills';
import AllBills from './components/AllBills';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      todaysDate: null
    };
  }

  addBill = (newData) => {
    let bills = [...this.state.bills, newData];
    this.setState({ bills })
  }

  editBill = (modifiedData) => {

  }

  deleteBill = (oldData) => {

  }

  render(){
    return (
      <div className="App">
        <AddBills addBillFunction={this.addBill}/>
        <UpcomingBills allBills={this.state.bills}/>
        <SearchBills allBills={this.state.bills}/>
        <BillCalendar allBills={this.state.bills}/>
        <AllBills allBills={this.state.bills}/>
      </div>
    );
  }
}

export default App;

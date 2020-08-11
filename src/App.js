import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddBills from './components/AddBills';
import UpcomingBills from './components/UpcomingBills';
import BillCalendar from './components/BillCalendar';
import SearchBills from './components/SearchBills';
import AllBills from './components/AllBills';
import {daysInMonth, firstDayInMonth} from './helperFunctions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      dateObject: {}
    };
  }

  setInitialTime = () =>{
    let rightNow = new Date();
    let dateObject = {
      day: rightNow.getDay(),
      month: rightNow.getMonth(),
      date: rightNow.getDate(),
      hour: rightNow.getHours(),
      year: rightNow.getFullYear(),
      daysInMonth: daysInMonth(rightNow.getMonth(), rightNow.getFullYear()),
      firstDayInMonth: firstDayInMonth(rightNow.getMonth(), rightNow.getFullYear())
    }
    this.setState({
      dateObject: {...dateObject}
    });
  }

  setNewMonth = (monthIndex) => {
    let newDate = new Date();
    newDate.setMonth(monthIndex)
    console.log(newDate.getMonth())

    // let dateObject = this.state.dateObject;
 
    let dateObject = {
      day: newDate.getDay(),
      month: newDate.getMonth(),
      date: newDate.getDate(),
      hour: newDate.getHours(),
      year: newDate.getFullYear(),
      daysInMonth: daysInMonth(monthIndex, newDate.getFullYear()),
      firstDayInMonth: firstDayInMonth(monthIndex, newDate.getFullYear())
    }
    this.setState({dateObject})
  }


  addBill = (newData) => {
    let bills = [...this.state.bills, newData];
    this.setState({ bills })
  }

  editBill = (modifiedData) => {

  }

  deleteBill = (oldData) => {

  }

  componentDidMount(){
    this.setInitialTime();
  }

  render(){
    return (
      <div className="App">
        <AddBills addBillFunction={this.addBill}/>
        <UpcomingBills allBills={this.state.bills}/>
        <SearchBills allBills={this.state.bills}/>
        <BillCalendar allBills={this.state.bills} dateObject={this.state.dateObject} setNewMonth={this.setNewMonth}/>
        <AllBills allBills={this.state.bills}/>
      </div>
    );
  }
}

export default App;

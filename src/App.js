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
      month: null,
      day: null,
      date: null,
      hour: null
    };
  }

  setTime = () =>{
    let rightNow = new Date();
    this.setState({
      month: rightNow.getMonth() + 1,
      day:  rightNow.getDay(),
      date: rightNow.getDate(),
      hour: rightNow.getHours(),
      daysInMonth: daysInMonth(rightNow.getMonth(), rightNow.getFullYear()),
      firstDayInMonth: firstDayInMonth(rightNow.getMonth(), rightNow.getFullYear())
    });
    // setTimeout(this.setTime, 3600000)
  }

  setMonth = (monthIndex) => {
    this.setState({month: monthIndex + 1})
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
    this.setTime();
  }

  render(){
    return (
      <div className="App">
        <AddBills addBillFunction={this.addBill}/>
        <UpcomingBills allBills={this.state.bills}/>
        <SearchBills allBills={this.state.bills}/>
        <BillCalendar allBills={this.state.bills} month={this.state.month} day={this.state.day} date={this.state.date} hour={this.state.hour} daysInMonth={this.state.daysInMonth} firstDayInMonth={this.state.firstDayInMonth} setMonth={this.setMonth}/>
        <AllBills allBills={this.state.bills}/>
      </div>
    );
  }
}

export default App;

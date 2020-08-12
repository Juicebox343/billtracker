import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddBills from './components/AddBills';
import UpcomingBills from './components/UpcomingBills';
import BillCalendar from './components/BillCalendar';
import SearchBills from './components/SearchBills';
import AllBills from './components/AllBills';
import {SignIn} from './components/SignIn';
import {daysInMonth, firstDayInMonth} from './helperFunctions';
import firebase from './firebase';


function App(){

  const [bills, setBills] = React.useState([]);
  const [dateObject, setDateObject] = React.useState({});


  React.useEffect(() => {
    setInitialTime();
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("spells").get();
      setBills(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);



  const setInitialTime = () =>{
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
    setDateObject({...dateObject})
  }

  const setNewMonth = (monthIndex) => {
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


  const addBill = (newData) => {
    let bills = [...this.state.bills, newData];
    this.setState({ bills })
  }

  const editBill = (modifiedData) => {

  }

  const deleteBill = (oldData) => {

  }

    return (
      <div className="App">
        <Header/>
        <AddBills addBillFunction={addBill}/>
        <SearchBills allBills={bills}/>
        <BillCalendar allBills={bills} dateObject={dateObject} setNewMonth={setNewMonth}/>
        <UpcomingBills allBills={bills}/>
        <AllBills allBills={bills}/>
        <SignIn/>
        
      </div>
    );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddBills from './components/AddBills';
import UpcomingBills from './components/UpcomingBills';
import BillCalendar from './components/BillCalendar';
import SearchBills from './components/SearchBills';
import AllBills from './components/AllBills';


function App() {
  return (
    <div className="App">
      <AddBills/>
      <SearchBills/>
      <UpcomingBills/>
      <BillCalendar/>
      <AllBills/>
    </div>
  );
}

export default App;

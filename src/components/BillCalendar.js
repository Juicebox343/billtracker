import React from 'react';
import {populateWeekDay, populateMonth} from '../helperFunctions';

class BillCalendar extends React.Component {

state = {
    showMonthTable:false
}

MonthList = () =>{
    let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let months = [];
    monthArray.map(month => {
        months.push(
            <td key={month} className='calendar-month' onClick={e => {this.setMonth(month, monthArray)}}><span>{month}</span></td>
        )
    })

    let rows = [];
    let cells = [];

    months.forEach((row, i)=>{
        if (i % 3 !== 0 || i === 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row)
        }
    })
    rows.push(cells);

    let monthlist = rows.map((d, i) => {
        return <tr>{d}</tr>
    })

    return (
        <table className="calendar-month">
        <thead>
            <tr>
            <th colSpan="4">Select a Month</th>
            </tr>
        </thead>
        <tbody>{monthlist}</tbody>
        </table>
    );

}

setMonth = (month, monthArray) => {
    let monthNo = monthArray.indexOf(month);
    this.props.setMonth(monthNo)
    this.setState({
        showMonthTable: !this.state.showMonthTable,
    })
}

showMonth = (e, month) => {
    this.setState({
        showMonthTable: !this.state.showMonthTable
    })
}

render(){

    let daysOfWeekArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let daysOfWeek = daysOfWeekArray.map(day => {
        return <th key={day}>{day}</th>;
    });
    
    let blanks = [];
    for (let i = 0; i < this.props.firstDayInMonth; i++) {
      blanks.push(
        <td className="calendar-day empty">{""}</td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.props.daysInMonth; d++) {
        let today = d === this.props.date ? 'today' : '';
      daysInMonth.push(
        <td key={d} className={`calendar-day ${today}`}>
          {d}
        </td>
      );
    }

    let totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) =>{
        if (i % 7 !== 0){
            cells.push(row)
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if( i === totalSlots.length - 1){
            rows.push(cells)
        }
    })

    let daysinmonth = rows.map((d, i) => {
        return <tr>{d}</tr>
    })



    return(
        <section className='section billCalendarSection'>
            <h3>Calendar View</h3>

                <table className='calendarTable'>
                    <thead>
                        <tr><th colspan='7' className='calendar-nav' onClick={e => { this.showMonth()}}>{populateMonth(this.props.month)}</th></tr>
                    </thead>
                    <div className="calendar-date">
                        {this.state.showMonthTable && 
                        <this.MonthList />}
                    </div>
                    {!this.state.showMonthTable && 
                    <div>
                        <thead>
                            <tr>{daysOfWeek}</tr>
                        </thead>

                        <tbody>
                            {daysinmonth}
                        </tbody>
                    </div>}
                </table>
              
        </section>
        
    )
}
}

export default BillCalendar;
import React from 'react';

class BillCalendar extends React.Component {

state = {
    showMonthTable:false
}

MonthList = () =>{
    let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let months = [];
    
    monthArray.map(month => 
        months.push(
            <td key={month} className='calendar-month' onClick={e => {this.setDateMonth(month, monthArray)}}><span>{month}</span></td>
        )
    )

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

setDateMonth = (month, monthArray) => {
    let monthNo = monthArray.indexOf(month);
    this.props.setNewMonth(monthNo)
    this.setState({
        showMonthTable: !this.state.showMonthTable,
    })
}

showMonth = (e, month) => {
    this.setState({
        showMonthTable: !this.state.showMonthTable
    })
}

year = () => {
    return this.props.dateObject.year
}


render(){
    let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let dateObject = this.props.dateObject

    let daysOfWeekArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let daysOfWeek = daysOfWeekArray.map(day => {
        return <th key={day}>{day}</th>;
    });
    
    let blanks = [];
    for (let i = 0; i < dateObject.firstDayInMonth; i++) {
      blanks.push(
        <td className="calendar-day empty">{""}</td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= dateObject.daysInMonth; d++) {
        let today = d === dateObject.date ? 'today' : '';
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
            <h2>Calendar View</h2>
            <section className='calendar'>
                <div className='calendar-nav' >
                    <span onClick={e => { this.showMonth()}}>{monthArray[dateObject.month]}</span>
                    <span >{this.year()}</span>
                </div>

                <table className='calendarTable'>
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
        </section>
        
    )
}
}

export default BillCalendar;
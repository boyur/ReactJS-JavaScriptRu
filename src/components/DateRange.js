import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {dateRange} from '../AC'


import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    state = {
        from: null,
        to: null
    }

    handleDayClick = (e, day) => {
        this.setState(DateUtils.addDayToRange(day, this.state))
        this.props.dateRange(DateUtils.addDayToRange(day, this.state))
    }

    render() {
        const { from, to } = this.state;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect((state) => {
  return {
    dateRange: state.dateRange
  }
}, { dateRange })(DateRange)
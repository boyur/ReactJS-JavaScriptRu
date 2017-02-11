import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class Calendar extends Component {
  state = {
    selectedDay: null
  };

  handleDayClick = (e, day, { selected }) => {
    this.setState({
      selectedDay: selected ? null : day,
    });
  };

  render() {
    const { selectedDay } = this.state;

    return (<div>
              <DayPicker selectedDays={ day => DateUtils.isSameDay(selectedDay, day) }
                         onDayClick={ this.handleDayClick }
              />
              <div>
                { selectedDay ? selectedDay.toLocaleDateString() : 'Please select a day 👻' }
              </div>
            </div>);
  }

}
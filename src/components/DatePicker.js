import { DateRangePicker } from "@blueprintjs/datetime";
import React from 'react';

const DatePicker = () => {

  

  return (
    <DateRangePicker
      value={[this.state.startDate, this.state.endDate]}
      onChange={this.handleDateChange}
      />
  )
}

export default DatePicker;
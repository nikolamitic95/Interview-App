import React from 'react';

import styles from './ReportDetails.module.css';

import DatePicker from "react-datepicker";


const ReportDetails = ({ setDate, setPhase, setStatus, setNotes }) => {

  let interviewDate;
  let somePhase;
  let someStatus;
  let someNotes;

  const handleDateChange = (dateObj) => {
    interviewDate = dateObj.target.value;
  }

  const handlePhaseChange = (event) => {
    somePhase = event.currentTarget.value
  }

  const handleStatusChange = (event) => {
    someStatus = event.currentTarget.value
  }
  const handleNotesChange = (event) => {
    someNotes = event.currentTarget.value
    setNotes(someNotes);
  }

  const onChangeDate = (newDate) => {

    handleDateChange({
      target: {
        id: "myDate",
        value: newDate
      }
    })
  }

  const onChangePhase = (event) => {
    handlePhaseChange(event)
  }
  const onChangeStatus = (event) => {
    handleStatusChange(event)
  }
  const onChangeNotes = (event) => {
  }

  
 
  return (
    <div>
        
    </div>
  )
}

export { ReportDetails }
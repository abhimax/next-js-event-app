import { useRef } from "react";
import Button from "../button/Button";
import classes from "./EventSearch.module.css";

function EventSearch({ onEventFilter }) {
  const yearRef = useRef();
  const monthRef = useRef();
  const searchHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;
    onEventFilter({ selectedYear, selectedMonth });
  };
  return (
    <form className={classes.form} onSubmit={searchHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Year</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
export default EventSearch;

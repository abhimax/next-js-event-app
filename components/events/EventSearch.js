import Button from "../button/Button";
import classes from "./EventSearch.module.css";

function EventSearch(props) {
  const searchHandler = (event) => {
    event.preventDefault();
    console.log("submit data");
  };
  return (
    <form className={classes.form} onSubmit={searchHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Year</label>
          <select id="month">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
export default EventSearch;

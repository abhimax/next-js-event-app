import EventItem from "./EventItem";
import classes from "./EventList.module.css";
function EventList({ events }) {
  console.log(events);
  return (
    <ul className={classes.list}>
      {events.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            image={event.image}
            location={event.location}
            date={event.date}
          />
        );
      })}
    </ul>
  );
}
export default EventList;

import EventItem from "./EventItem";

function EventList({ events }) {
  return (
    <>
      {events.map(() => {
        return <EventItem />;
      })}
    </>
  );
}
export default EventList;

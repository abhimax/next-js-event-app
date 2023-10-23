import EventItem from "@/components/events/EventItem";
import { getAllEvents } from "@/dummy-data";

function AllEvent() {
  const events = getAllEvents();
  return (
    <>
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
    </>
  );
}
export default AllEvent;

import EventItem from "@/components/events/EventItem";
import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "@/dummy-data";

function AllEvent() {
  const events = getAllEvents();
  const onEventFilterHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <EventSearch onEventFilter={onEventFilterHandler} />
      <EventList events={events} />
    </>
  );
}
export default AllEvent;

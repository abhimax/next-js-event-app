import EventItem from "@/components/events/EventItem";
import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "@/dummy-data";

function AllEvent() {
  const events = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  );
}
export default AllEvent;

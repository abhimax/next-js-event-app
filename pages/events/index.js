import EventItem from "@/components/events/EventItem";
import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

function AllEvent() {
  const router = useRouter();
  const events = getAllEvents();
  const onEventFilterHandler = (data) => {
    router.push(`/events/${data.selectedYear}/${data.selectedMonth}`);
  };
  return (
    <>
      <EventSearch onEventFilter={onEventFilterHandler} />
      <EventList events={events} />
    </>
  );
}
export default AllEvent;

import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";
const events = getFeaturedEvents();
export default function Home() {
  return (
    <>
      <EventList events={events} />
    </>
  );
}

import EventList from "@/components/EventList";
import { getFeaturedEvents } from "@/dummy-data";
const events = getFeaturedEvents();
export default function Home() {
  return (
    <>
      <EventList events={events} />
    </>
  );
}

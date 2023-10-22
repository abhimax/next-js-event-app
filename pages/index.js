import EventList from "@/components/events/EventList";
import Layout from "@/components/layout/Layout";
import { getFeaturedEvents } from "@/dummy-data";
const events = getFeaturedEvents();
export default function Home() {
  return <EventList events={events} />;
}

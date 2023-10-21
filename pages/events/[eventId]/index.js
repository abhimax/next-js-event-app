import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  return <div>Event Detail Page {event.title}</div>;
}
export default EventDetailPage;

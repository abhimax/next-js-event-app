import EventContent from "@/components/events/EventContent";
import EventLogistics from "@/components/events/EventLogistics";
import EventSummary from "@/components/events/EventSummary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <div>No event found</div>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
export default EventDetailPage;

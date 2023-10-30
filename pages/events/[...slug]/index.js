import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

function FilteredEvent() {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2023 ||
    filteredYear < 2022 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  ) {
    return <p className="center">Invalid filter. Please adjust your values!</p>;
  }

  console.log(filteredData, filteredYear, filteredMonth);

  const filteredEvent = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvent || filteredEvent.length === 0) {
    return (
      <p className="center">No events found found for the chosen filter!</p>
    );
  }
  const date = new Date(filteredYear, filteredMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvent} />
    </>
  );
}
export default FilteredEvent;

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

  console.log(filteredData, filteredYear, filteredMonth);

  const filteredEvent = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });
  console.log(filteredEvent);
  return <div>Filtered Event</div>;
}
export default FilteredEvent;

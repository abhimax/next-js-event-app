import Link from "next/link";

function EventItem({ id, title, image, location, date }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  return (
    <li>
      <img src={image} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={`events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
export default EventItem;

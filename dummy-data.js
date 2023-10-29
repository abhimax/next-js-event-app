const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "BMICH, Bauddhaloka Mawatha, Colombo 00700",
    date: "2023-10-17",
    image: "/images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location:
      "Nelum Pokuna Theatre, 110 Ananda Coomaraswamy Mawatha, Colombo 00700",
    date: "2023-11-30",
    image: "/images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location:
      "Sri Lanka Exhibition & Convention Centre, 12 McCallum Rd, Colombo 01000",
    date: "2023-10-20",
    image: "/images/extrovert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Supercharge Your React Components with Higher-Order Components",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Cinnamon Grand, 77, Steuart Place, Colombo 03, Sri Lanka.",
    date: "2023-11-05",
    image: "/images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    title: "Mastering Performance Optimization in React.js",
    description:
      "In the realm of web development, optimizing performance is a non-negotiable pursuit. React applications that deliver swift, seamless experiences hold the key to user satisfaction and success.",
    location: "Galadari Hotel, 64, Lotus Road, Colombo 1",
    date: "2023-12-28",
    image: "/images/coding-event.jpg",
    isFeatured: true,
  },
  {
    id: "e6",
    title: "Effortless State Management with Redux Toolkit",
    description:
      "Redux Toolkit State management lies at the heart of every application, shaping how data flows and interacts within the user interface.",
    location:
      "Galle Face Hotel, Address: 2, Kollupitiya Road, Colombo 03, Sri Lanka.",
    date: "2023-10-20",
    image: "/images/extrovert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e7",
    title: "Next JS Refresher",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location:
      "Hilton Colombo, P.O.Box 1000, 2 Sri Chittampalam A Gardiner Mawatha, Colombo 02, Sri Lanka.",
    date: "2023-12-10",
    image: "/images/coding-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

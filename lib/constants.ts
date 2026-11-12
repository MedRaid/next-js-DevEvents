import { EventItem } from "@/types/EventType";

// Dates et horaires indicatifs : à vérifier sur le site officiel de chaque événement.
export const events: EventItem[] = [
  {
    title: "React Conf",
    image: "/images/event1.png",
    slug: "react-conf",
    location: "Henderson, NV, USA",
    date: "2026-05-14",
    time: "09:00",
  },
  {
    title: "Next.js Conf",
    image: "/images/event2.png",
    slug: "nextjs-conf",
    location: "San Francisco, CA, USA",
    date: "2026-10-21",
    time: "10:00",
  },
  {
    title: "JSWorld Conference",
    image: "/images/event3.png",
    slug: "jsworld-conference",
    location: "Amsterdam, Netherlands",
    date: "2027-02-25",
    time: "09:30",
  },
  {
    title: "Devoxx France",
    image: "/images/event4.png",
    slug: "devoxx-france",
    location: "Paris, France",
    date: "2027-04-14",
    time: "08:30",
  },
  {
    title: "ETHGlobal Hackathon",
    image: "/images/event5.png",
    slug: "ethglobal-hackathon",
    location: "Online",
    date: "2027-03-12",
    time: "18:00",
  },
  {
    title: "Google I/O",
    image: "/images/event6.png",
    slug: "google-io",
    location: "Mountain View, CA, USA",
    date: "2027-05-19",
    time: "10:00",
  },
];

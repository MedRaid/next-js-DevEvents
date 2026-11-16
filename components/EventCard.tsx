"use client";

import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";
import { EventItem } from "@/types/EventType";

const EventCard = ({ title, image, slug, location, date, time }: EventItem) => {
  const handleEventCardClick = () => {
    if (posthog.__loaded) {
      posthog.capture("event_card_selected", { event_slug: slug });
    }
  };

  return (
    <Link href={`events`} id="event-card" onClick={handleEventCardClick}>
      <Image
        src={image}
        width={410}
        height={300}
        className="poster"
        alt={title}
      />

      <p className="title">{title}</p>

      <div className="flex flex-row gap-2">
        <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
        <p>{location}</p>
      </div>
      <div className="flex flex-row gap-8">
        <div className="flex flex-row gap-2">
          <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
          <p>{date}</p>
        </div>
        <div className="flex gap-2">
          <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

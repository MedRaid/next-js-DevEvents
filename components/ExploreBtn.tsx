"use client";
import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
  const handleExploreClick = () => {
    console.log("clicked");
    if (posthog.__loaded) {
      posthog.capture("event_exploration_started");
    }
  };

  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-4 mx-auto"
      onClick={handleExploreClick}
    >
      <a href="#events">
        Expore events
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          width={24}
          height={24}
        />
      </a>
    </button>
  );
};

export default ExploreBtn;

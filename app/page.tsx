/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import ExploreBtn from "@/components/ExploreBtn";
// import { useVirtualizer } from "@tanstack/react-virtual";
// import React, { useRef } from "react";

import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";

// const items = [
//   { id: 1, name: "mamado" },
//   { id: 2, name: "kaldo" },
//   { id: 3, name: "ronaldo" },
//   { id: 4, name: "messi" },
//   { id: 5, name: "pablo" },
//   { id: 6, name: "khaleddd" },
//   { id: 7, name: "khaleddd" },
//   { id: 8, name: "khaleddd" },
//   { id: 9, name: "khaleddd" },
//   { id: 10, name: "khaleddd" },
//   { id: 11, name: "khaleddd" },
//   { id: 12, name: "khaleddd" },
//   { id: 13, name: "khaleddd" },
//   { id: 14, name: "khaleddd" },
//   { id: 15, name: "khaleddd" },
//   { id: 16, name: "khaleddd" },
// ];

// const Card = ({ item }: any) => {
//   return (
//     <div className="bg-zinc-400 h-20 p-4 flex flex-row justify-around items-center rounded-2xl">
//       <p className="text-white text-center text-lg justify-center">{item.id}</p>
//       <h1 className="text-white text-center text-lg justify-center">
//         {item.name}
//       </h1>
//     </div>
//   );
// };
// const Home = () => {
//   // The scrollable element for your list
//   const parentRef = React.useRef<HTMLDivElement>(null);

//   // The virtualizer
//   const rowVirtualizer = useVirtualizer({
//     count: items.length,
//     getScrollElement: () => parentRef.current,
//     estimateSize: () => 90,
//   });

//   return (
//     <>
//       <div ref={parentRef} className="h-[90dvh] overflow-auto">
//         {/* The large inner element to hold all of the items */}
//         <div
//           style={{
//             height: `${rowVirtualizer.getTotalSize()}px`,
//             width: "100%",
//             position: "relative",
//           }}
//         >
//           {/* Only the visible items in the virtualizer, manually positioned to be in view */}
//           {rowVirtualizer.getVirtualItems().map((virtualItem) => (
//             <div
//               key={virtualItem.key}
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: `${virtualItem.size}px`,
//                 transform: `translateY(${virtualItem.start}px)`,
//               }}
//             >
//               {/* Row {virtualItem.index} */}
//               <Card item={items[virtualItem.index]} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

// "use client";
// import React, {
//   CSSProperties,
//   JSXElementConstructor,
//   ReactElement,
// } from "react";
// // import { List, RowRendererParams } from "react-virtualized";
// import { List } from "react-window";

// const items = [
//   { id: 1, name: "mamado" },
//   { id: 2, name: "kaldo" },
//   { id: 3, name: "ronaldo" },
//   { id: 4, name: "messi" },
//   { id: 5, name: "pablo" },
//   { id: 6, name: "khaleddd" },
//   { id: 7, name: "khaleddd" },
//   { id: 8, name: "khaleddd" },
//   { id: 9, name: "khaleddd" },
//   { id: 10, name: "khaleddd" },
//   { id: 11, name: "khaleddd" },
//   { id: 12, name: "khaleddd" },
//   { id: 13, name: "khaleddd" },
//   { id: 14, name: "khaleddd" },
//   { id: 15, name: "khaleddd" },
//   { id: 16, name: "khaleddd" },
// ];

// const Card = ({ item }: any) => {
//   return (
//     <div className="bg-zinc-400 h-20 p-4 flex flex-row justify-around items-center rounded-2xl">
//       <p className="text-white text-center text-lg justify-center">{item.id}</p>
//       <h1 className="text-white text-center text-lg justify-center">
//         {item.name}
//       </h1>
//     </div>
//   );
// };

// function rowRenderer({ index, key, style }: RowRendererParams) {
//   const item = items[index];
//   return (
//     <div
//       className="flex items-center gap-4 px-4 overflow-hidden border-b border-ink/10 h-full"
//       key={key}
//       style={style}
//     >
//       <p className="text-white text-center text-lg justify-center">{item.id}</p>
//       <h1 className="text-white text-center text-lg justify-center">
//         {item.name}
//       </h1>
//     </div>
//   );
// // }

// const Home = () => {
//   function RowComponent(
//     props: {
//       ariaAttributes: {
//         "aria-posinset": number;
//         "aria-setsize": number;
//         role: "listitem";
//       };
//       index: number;
//       style: CSSProperties;
//     } & { items: any },
//   ): ReactElement<unknown, string | JSXElementConstructor<any>> | null {
//     return (
//       <div {...props.ariaAttributes} style={props.style} className="pb-8">
//         <div className="flex justify-around bg-zinc-200 rounded-xl items-center h-18">
//           <div className="text-black font-bold"> {items[props.index].id}</div>
//           <div className="text-black font-bold"> {items[props.index].name}</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     // <List
//     //   height={300}
//     //   rowCount={items.length}
//     //   rowHeight={50}
//     //   rowRenderer={rowRenderer}
//     //   width={600}
//     // />

//     <div>
//       <List
//         rowComponent={RowComponent}
//         rowCount={items.length}
//         rowHeight={110}
//         rowProps={{ items }}
//         style={{ height: 500 }}
//       />
//       <div>
//         <h1 className="text-white text-center text-lg justify-center">
//           end of file
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Home;

const Home = () => {
  return (
    <section>
      <h1 className="text-center">
        The hub for every dev <br /> Event You cant miss
      </h1>
      <p className="text-center mt-5">
        Hackatons, Meetups and conferences, All in one website
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            // <li key={event.title}>
            <EventCard key={event.title} {...event} />
            // </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;

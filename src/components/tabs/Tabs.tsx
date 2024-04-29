import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Resources } from "../../constants/constants";

import Card from "../card/Card";
import "./tabs.scss";

const Tabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState<{ [key: string]: number }>({
    "1": 1,
    "2": 1,
    "3": 1,
    "4": 1,
    "5": 1,
  });
  

  const itemsPerPage = 12;
  const handleTabChange = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };
  const handlePageChange = (
    page: number,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault(); // Prevent the default action of the event
    
    // Calculate the total pages for the current tab
    const totalTabPages = totalPages[selectedTab];
    
    // Check if the requested page is within the range of total pages
    if (page >= 1 && page <= totalTabPages) {
      setCurrentPage((prevCurrentPage) => ({
        ...prevCurrentPage,
        [selectedTab]: page,
      }));
    }
  };
  


  // Example function to calculate total pages based on the number of items
  const calculateTotalPages = (items: any[]) => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    return totalPages > 0 ? totalPages : 1; // Ensure at least one page
  };
  
  // Example function to get items for the current page
  const getItemsForCurrentPage = (items: any[]) => {
    const startIndex = (currentPage[selectedTab] - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);
    return items.slice(startIndex, endIndex);
  };

  // Example usage
  const toolsItems = Object.values(Resources.tools);
  const youtubeItems = Object.values(Resources.youtube);
  const techItems = Object.values(Resources.uilibrary);
  const inspirationItems = Object.values(Resources.inspiration);
  const fontsItems = Object.values(Resources.fonts);

  const tools = getItemsForCurrentPage(toolsItems);
  const youtube = getItemsForCurrentPage(youtubeItems);
  const tech = getItemsForCurrentPage(techItems);
  const inspiration = getItemsForCurrentPage(inspirationItems);
  const fonts = getItemsForCurrentPage(fontsItems);
  
  const [totalPages] = useState<{ [key: string]: number }>({
    "1": calculateTotalPages(toolsItems),
    "2": calculateTotalPages(youtubeItems),
    "3": calculateTotalPages(techItems),
    "4": calculateTotalPages(inspirationItems),
    "5": calculateTotalPages(fontsItems),
  });
// Repeat for other tabs...


  return (
    <div className="tabs">
      <input
        type="radio"
        id="tab1"
        name="tab-control"
        checked={selectedTab === 1}
        onChange={() => handleTabChange(1)}
      />
      <input
        type="radio"
        id="tab2"
        name="tab-control"
        checked={selectedTab === 2}
        onChange={() => handleTabChange(2)}
      />
      <input
        type="radio"
        id="tab3"
        name="tab-control"
        checked={selectedTab === 3}
        onChange={() => handleTabChange(3)}
      />
      <input
        type="radio"
        id="tab4"
        name="tab-control"
        checked={selectedTab === 4}
        onChange={() => handleTabChange(4)}
      />
      <input
        type="radio"
        id="tab5"
        name="tab-control"
        checked={selectedTab === 5}
        onChange={() => handleTabChange(5)}
      />
      <ul>
        <li title="resources">
          <label htmlFor="tab1" role="Widget">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"
              />
            </svg>
            <br />
            <span>Resources</span>
          </label>
        </li>
        <li title="youtube">
          <label htmlFor="tab2" role="Widget">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
              />
            </svg>
            <br />
            <span>Youtube</span>
          </label>
        </li>
        <li title="technologies">
          <label htmlFor="tab3" role="Widget">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M14 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm3 2h-2v6h2z"
                  clipRule="evenodd"
                />
                <path d="M6 7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" />
                <path
                  fill-rule="evenodd"
                  d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"
                  clip-rule="evenodd"
                />
              </g>
            </svg>
            <br />
            <span>UI Libraries</span>
          </label>
        </li>
        {/* {" "} */}
        <li title="inspiration">
          <label htmlFor="tab4" role="Widget">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M17.252 12.49c-.284 2.365-1.833 3.31-2.502 3.996c-.67.688-.55.825-.505 1.834a.916.916 0 0 1-.916.971h-2.658a.918.918 0 0 1-.917-.971c0-.99.092-1.22-.504-1.834c-.76-.76-2.548-1.833-2.548-4.784a5.307 5.307 0 1 1 10.55.788" />
                <path d="M10.46 19.236v1.512c0 .413.23.752.513.752h2.053c.285 0 .514-.34.514-.752v-1.512m-2.32-10.54a2.227 2.227 0 0 0-2.226 2.227m10.338.981h1.834m-3.68-6.012l1.301-1.301M18.486 17l1.301 1.3M12 2.377V3.86m-6.76.73l1.292 1.302M4.24 18.3L5.532 17m-.864-5.096H2.835" />
              </g>
            </svg>
            <br />
            <span>Inspiration</span>
          </label>
        </li>
        <li title="fonts">
          <label htmlFor="tab5" role="Widget">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.764.375H4.236A4.236 4.236 0 0 0 0 4.611V19.39a4.236 4.236 0 0 0 4.236 4.236h15.528A4.236 4.236 0 0 0 24 19.389V4.61A4.236 4.236 0 0 0 19.764.375m-3.25 6.536c-.242 0-.364-.181-.44-.439c-.257-.97-.59-1.257-.787-1.257s-.5.364-.833 1.12c-.417.97-.754 1.97-1.007 2.994l1.732-.002c.11.28.01.6-.238.772H13.23c-.56 1.878-1.031 3.688-1.592 5.46a9.676 9.676 0 0 1-1.105 2.56a3.144 3.144 0 0 1-2.484 1.332c-.773 0-1.53-.363-1.53-1.166c.036-.503.424-.91.924-.97a.46.46 0 0 1 .424.243c.379.682.742 1.075.909 1.075c.166 0 .303-.227.575-1.211l1.988-7.322l-1.43-.002a.685.685 0 0 1 .227-.774h1.423c.257-.895.609-1.76 1.048-2.58a3.786 3.786 0 0 1 3.272-2.195c1.136 0 1.605.545 1.605 1.242a1.144 1.144 0 0 1-.97 1.12"
              />
            </svg>
            <br />
            <span>Fonts</span>
          </label>
        </li>
      </ul>

      <div className="slider">
        <div className="indicator"></div>
      </div>
      <div className="content">
        {/* {selectedTab === 1 && ( */}
        <section>
          <h2>Tools</h2>
          <div className="card-container">
            {tools.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </section>
        {/* )} */}
        {/* {selectedTab === 2 && ( */}
        <section>
          <h2>Youtube</h2>
          <div className="card-container">
            {youtube.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </section>
        {/* )} */}
        <section>
          <h2>Technologies</h2>
          <div className="card-container">
            {tech.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </section>
        <section>
          <h2>Inspiration</h2>
          <div className="card-container">
            {inspiration.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </section>

        <section>
          <h2>Fonts</h2>
          <div className="card-container">
            {fonts.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </section>
      </div>
      <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious
        href="#"
        onClick={(event) => {
          event.preventDefault();
          handlePageChange(currentPage[selectedTab] - 1, event);
        }}
      />
    </PaginationItem>
    {Array.from({ length: totalPages[selectedTab] }, (_, index) => (
      <PaginationItem key={index}>
        <PaginationLink
          href="#"
          onClick={(event) => handlePageChange(index + 1, event)}
          isActive={currentPage[selectedTab] === index + 1}
        >
          {index + 1}
        </PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem>
      <PaginationNext
        href="#"
        onClick={(event) => {
          event.preventDefault();
          handlePageChange(currentPage[selectedTab] + 1, event);
        }}
      />
    </PaginationItem>
  </PaginationContent>
</Pagination> 


    </div>
  );
};

export default Tabs;

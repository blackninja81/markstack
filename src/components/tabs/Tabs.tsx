import React, { useState } from "react";
import { Resources } from "../../constants/constants";
import TabPagination from "./TabPagination";
import Card from "../card/Card";
import technologyImage from "../../assets/icons/technologies.svg";
import youtubeImage from "../../assets/icons/youtube.svg";
import uiImage from "../../assets/icons/resource.svg";
import inspirationImage from "../../assets/icons/inspiration.svg";
import fontsImage from "../../assets/icons/fonts.svg";
import "./tabs.scss";
import { useQuery } from "react-query";


const fetchData = async (key: any) => {
  switch (key) {
    case "tools":
      return Object.values(Resources.tools);
    case "youtube":
      return Object.values(Resources.youtube);
    case "tech":
      return Object.values(Resources.uilibrary);
    case "inspiration":
      return Object.values(Resources.inspiration);
    case "fonts":
      return Object.values(Resources.fonts);
    default:
      return [];
  }
};

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
    event.preventDefault();
    setCurrentPage((prevCurrentPage) => ({
      ...prevCurrentPage,
      [selectedTab]: page,
    }));
  };

  const calculateTotalPages = (items: any[]) => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    return totalPages > 0 ? totalPages : 1;
  };

  const getItemsForCurrentPage = (items: any[]) => {
    const startIndex = (currentPage[selectedTab] - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);
    return items.slice(startIndex, endIndex);
  };

  const toolsItems = Object.values(Resources.tools);
  const youtubeItems = Object.values(Resources.youtube);
  const techItems = Object.values(Resources.uilibrary);
  const inspirationItems = Object.values(Resources.inspiration);
  const fontsItems = Object.values(Resources.fonts);

  const { data: tools } = useQuery(["tools"], () => fetchData("tools"));
  const { data: youtube } = useQuery(["youtube"], () => fetchData("youtube"));
  const { data: tech } = useQuery(["tech"], () => fetchData("tech"));
  const { data: inspiration } = useQuery(["inspiration"], () => fetchData("inspiration"));
  const { data: fonts } = useQuery(["fonts"], () => fetchData("fonts"));

  const [totalPages] = useState<{ [key: string]: number }>({
    "1": calculateTotalPages(toolsItems),
    "2": calculateTotalPages(youtubeItems),
    "3": calculateTotalPages(techItems),
    "4": calculateTotalPages(inspirationItems),
    "5": calculateTotalPages(fontsItems),
  });

  const sections = [
    { title: "Tools", data: tools },
    { title: "Youtube", data: youtube },
    { title: "UI Libraries", data: tech },
    { title: "Inspiration", data: inspiration },
    { title: "Fonts", data: fonts },
  ];

  return (
    <div className="tabs">
      {Array.from({ length: 5 }, (_, index) => (
        <input
          key={index}
          type="radio"
          id={`tab${index + 1}`}
          name="tab-control"
          checked={selectedTab === index + 1}
          onChange={() => handleTabChange(index + 1)}
        />
      ))}
      <ul>
        {[
          { id: 1, title: "Resources", image: technologyImage },
          { id: 2, title: "Youtube", image: youtubeImage },
          { id: 3, title: "UI Libraries", image: uiImage },
          { id: 4, title: "Inspiration", image: inspirationImage },
          { id: 5, title: "Fonts", image: fontsImage },
        ].map((tab) => (
          <li key={tab.id} title={tab.title.toLowerCase()}>
            <label htmlFor={`tab${tab.id}`} role="Widget">
              <img
                src={tab.image}
                alt={tab.title.toLowerCase()}
                style={{
                  background: "white",
                  borderRadius: "10px",
                  margin: "0 5px",
                }}
              />
              <br />
              <span>{tab.title}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="slider">
        <div className="indicator"></div>
      </div>

      <div className="content">
        {sections.map((section, index) => (
          <section key={index}>
            <h2>{section.title}</h2>
            <div className="card-container">
              {getItemsForCurrentPage(section.data || []).map((data, dataIndex) => (
                <Card key={dataIndex} data={data} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <TabPagination
        totalPages={totalPages[selectedTab]}
        currentPage={currentPage[selectedTab]}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Tabs;

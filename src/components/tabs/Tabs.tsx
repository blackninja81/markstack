import React, { useState } from "react";
import { Resources } from "../../constants/constants";
import TabPagination from "./TabPagination";
import Card from "../card/Card";
import technologyImage from "../../assets/icons/tools.png";
import AI from "../../assets/icons/ai.png";
import stack from "../../assets/icons/stack.png";
import youtubeImage from "../../assets/icons/youtube.png";
import uiImage from "../../assets/icons/ui.png";
import inspirationImage from "../../assets/icons/bulb.png";
import fontsImage from "../../assets/icons/fonts.png";
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
      case "techstack":
      return Object.values(Resources.technologies);
    case "inspiration":
      return Object.values(Resources.inspiration);
    case "fonts":
      return Object.values(Resources.fonts);
      case "ai":
      return Object.values(Resources.ai);
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
    "6": 1,
    "7": 1,
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
  const aiItems = Object.values(Resources.ai);
  const youtubeItems = Object.values(Resources.youtube);
  const uiItems = Object.values(Resources.uilibrary);
  const inspirationItems = Object.values(Resources.inspiration);
  const fontsItems = Object.values(Resources.fonts);
  const techItems = Object.values(Resources.technologies);

  const { data: tools } = useQuery(["tools"], () => fetchData("tools"));
  const { data: ai } = useQuery(["ai"], () => fetchData("ai"));
  const { data: youtube } = useQuery(["youtube"], () => fetchData("youtube"));
  const { data: tech } = useQuery(["tech"], () => fetchData("tech"));
  const { data: inspiration } = useQuery(["inspiration"], () => fetchData("inspiration"));
  const { data: fonts } = useQuery(["fonts"], () => fetchData("fonts"));
  const { data: techstack } = useQuery(["techstack"], () => fetchData("techstack"));

  const [totalPages] = useState<{ [key: string]: number }>({
    "1": calculateTotalPages(toolsItems),
    "2": calculateTotalPages(aiItems),
    "3": calculateTotalPages(youtubeItems),
    "4": calculateTotalPages(uiItems),
    "5": calculateTotalPages(inspirationItems),
    "6": calculateTotalPages(fontsItems),
    "7": calculateTotalPages(techItems),
  });

  const sections = [
    { title: "Tools", data: tools },
    { title: "AI", data: ai },
    { title: "Youtube", data: youtube },
    { title: "UI Libraries", data: tech },
    { title: "Inspiration", data: inspiration },
    { title: "Fonts", data: fonts },
    { title: "Techstack", data: techstack },
  ];

  return (
    <div className="tabs">
      {Array.from({ length: 7 }, (_, index) => (
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
          { id: 2, title: "AI", image: AI },
          { id: 3, title: "Youtube", image: youtubeImage },
          { id: 4, title: "UI Libraries", image: uiImage },
          { id: 5, title: "Inspiration", image: inspirationImage },
          { id: 6, title: "Fonts", image: fontsImage },
          { id: 7, title: "TechStack", image: stack },
        ].map((tab) => (
          <li key={tab.id} title={tab.title.toLowerCase()}>
            <label htmlFor={`tab${tab.id}`}>
              <img
                src={tab.image}
                alt={tab.title.toLowerCase()}
                style={{
                  transform: "scale(0.6)",
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

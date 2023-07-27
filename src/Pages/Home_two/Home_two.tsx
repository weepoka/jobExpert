import homeimg from "../../assets/slider/Frame 72.png";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LinkType } from "../../types/types";
import Home_section_two from "./Home_section_two";
import Home_section_three from "./Home_section_three";
import Home_section_four from "./Home_section_four";

const Home_two = () => {
  const [data, setData] = useState<LinkType[]>([]);
  useEffect(() => {
    fetch("home_two_section_one.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt">
      <img src={homeimg} alt="" className="w-full" />

      {/* section one */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-items-center items-center gap-5 md:gap-0 py-24 mx-5">
        {data.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF]"
          >
            <img src={item.icon} alt="" className="w-20 mx-auto" />
            <h3 className="text-center text-lg font-bold py-2">{item.title}</h3>
            <p className="text-center px-2">{item.description}</p>
          </Link>
        ))}
      </section>

      {/* section two  */}
      <Home_section_two />

      {/* section three  */}
      <Home_section_three />

      {/* section four */}
      <Home_section_four />
    </div>
  );
};

export default Home_two;

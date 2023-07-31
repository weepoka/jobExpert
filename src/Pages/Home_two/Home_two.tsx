import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LinkType } from "../../types/types";
import Home_section_two from "./Home_section_two";
import Home_section_three from "./Home_section_three";
import Home_section_four from "./Home_section_four";
import Home_section_five from "./Home_section_five";
import Slider from "../../components/Slider/Slider";
import JobExpart from "../../components/JobExpart/JobExpart";
import Banner from "../../components/Banner/Banner";

const Home_two = () => {
  const [data, setData] = useState<LinkType[]>([]);
  useEffect(() => {
    fetch("home_two_section_one.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt">
      {/* banner section  */}
      <Banner />

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

      {/* section five  */}
      <Home_section_five />

      {/* section six */}
      <div className="mt-20">
        <Slider />
      </div>

      {/* section seven  */}
      <JobExpart />
    </div>
  );
};

export default Home_two;

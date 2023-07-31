import Banner from "../../../components/Banner/Banner";
import ExamDropdown from "../../../components/ExamDropdown/ExamDropdown";
import { useState, useEffect } from "react";
import { ExpertType } from "../../../types/types";

const LiveExpert = () => {
  const [data, setData] = useState<ExpertType[]>([]);
  useEffect(() => {
    fetch("Live_expert.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {/* banner section  */}
      <Banner />
      <div className="w-11/12 md:w-4/5 mx-auto pb-16">
        <div className="pl-4 md:pl-12">
          <ExamDropdown />
        </div>
        {/* section one */}
        <section className="flex flex-col justify-center mt-16 gap-y-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#EAE9E9] flex flex-col lg:flex-row w-11/12 py-10 rounded-lg duration-500 mx-auto px-10 gap-y-5"
            >
              <div className="flex flex-col md:flex-row items-center gap-5 gap-y-5">
                <div>
                  <img src={item.icon} alt="" className="w-4/5 mx-auto" />
                </div>
                <div className="text-left space-y-2 w-11/12 md:w-1/2">
                  <h3 className=" text-lg font-bold py-2">{item.title}</h3>
                  <p className="">{item.description}</p>
                  <p>{item.start}</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="my-3 py-3 px-2 border rounded-lg inline-block">
                  {item.time_count}
                </h3>
                <button className="bg-primary text-[#FFFFFF] flex justify-center items-center py-3 gap-2 px-16 rounded-lg">
                  <img src={item.premium_icon} alt="" className="w-5" />{" "}
                  {item.premium_text}
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default LiveExpert;
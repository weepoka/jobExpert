import Banner from "../../../components/Banner/Banner";
import { useState, useEffect } from "react";
import { examzone } from "../../../types/types";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ExamZone.css";

const ExamZone = () => {
  const [data, setData] = useState<examzone[]>([]);
  useEffect(() => {
    fetch("exam_zone.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {/* banner section  */}
      <Banner />

      <Tabs>
        <TabList>
          {/* section one */}
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center gap-5 md:gap-0 py-10 mx-5 ">
            {data.map((item, index) => (
              <Tab>
                <div key={index} className=" py-5 rounded-lg duration-500">
                  <img src={item.icon} alt="" className="w-20 mx-auto" />
                  <h3 className="text-center text-lg font-bold py-2">
                    {item.title}
                  </h3>
                  <p className="text-center px-2">{item.description}</p>
                </div>
              </Tab>
            ))}
          </section>
        </TabList>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default ExamZone;
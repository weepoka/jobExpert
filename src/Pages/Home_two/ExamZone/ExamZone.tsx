import Banner from "../../../components/Banner/Banner";
import { useState, useEffect } from "react";
import { examzone } from "../../../types/types";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ExamZone.css";
import FreeModelTest from "./Free_model_test/FreeModelTest";
import ExamZonePreparation from "../../../components/ExamZone_section_two/ExamZonePreparation";
import BcsPreparation from "./BCS_preparation/BcsPreparation";
import PrimaryTeacher from "./Primary_teacher_assign/PrimaryTeacher";
import RegistrationExam from "./Registration_preparation/RegistrationExam";

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
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-items-center items-center gap-5 md:gap-0 py-10 mx-5 ">
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
        <div className="my-10">
          <ExamZonePreparation />
        </div>
        {/* free model test */}
        <TabPanel>
          <FreeModelTest />
        </TabPanel>

        {/* bcs preparation */}
        <TabPanel>
          <BcsPreparation />
        </TabPanel>

        {/* primary teacher assign */}
        <TabPanel>
          <PrimaryTeacher />
        </TabPanel>

        {/* registration preparation */}
        <TabPanel>
          <RegistrationExam />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ExamZone;

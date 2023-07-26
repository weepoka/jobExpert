import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { profileInfo } from "../../types/types";

const Home_section_three = () => {
  const [data, setData] = useState<profileInfo[]>([]);

  useEffect(() => {
    fetch("home_two_section_three.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <>
      <h3 className="text-2xl text-center font-bold mb-10 mt-20">
        Job Expert -সাকসেস স্টোরি
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center items-center mt-10 mx-10">
        {data.map((item, index) => (
          <div className=" w-11/12 bg-[#EAE9E9] p-5" key={index}>
            <img
              src={item.img}
              className="w-2/3 mx-auto rounded-full"
              alt="..."
            />
            <div className="p-4 text-center">
              <h5 className="text-lg font-bold tracking-widest mb-2 uppercase">
                {item.name}
              </h5>
              <p>{item.role}</p>
              <p>{item.company}</p>
              <p>{item.location}</p>
              <div className="flex justify-center items-center gap-2 my-4">
                <a
                  href={item.socialMedia.facebook}
                  className="hover:-translate-y-1 duration-300"
                >
                  <Icon icon="ic:baseline-facebook" width={25} />
                </a>
                <a
                  href={item.socialMedia.twitter}
                  className="hover:-translate-y-1 duration-300"
                >
                  <Icon icon="mdi:twitter" width={25} />
                </a>
                <a
                  href={item.socialMedia.instagram}
                  className="hover:-translate-y-1 duration-300"
                >
                  <Icon icon="mdi:instagram" width={25} />
                </a>
                <a
                  href={item.socialMedia.linkedin}
                  className="hover:-translate-y-1 duration-300"
                >
                  <Icon icon="ri:linkedin-fill" width={25} />
                </a>
              </div>
              <button className="bg-primary text-[#FFFFFF] px-4 py-2 rounded-lg my-3 transition duration-500 ease-in-out hover:scale-105">
                আরও দেখুন
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home_section_three;

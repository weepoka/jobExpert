import { Icon } from "@iconify/react";
import { useState, ChangeEvent } from "react";
import logo from "../../assets/brandLogo/logo.png";

import appstore from "../../assets/brandLogo/appstore (1).png";
import googlestore from "../../assets/brandLogo/appstore (2).png";
import Slider from "../../components/Slider/Slider";

const PackageUpdate = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className=" flex items-center mt-16">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 border-2 border-primary py-2.5 px-3 mt-2"
          htmlFor="options"
        >
          প্যাকেজঃ
        </label>
        <div className="w-52 relative ">
          <select
            id="options"
            value={selectedOption}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-900 py-3 px-4 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline bg-primary text-[#FFFFFF] cursor-pointer"
          >
            <option value="option1">৬ মাস বিসিএস প্রিলি</option>
            <option value="option2">বিসিএস প্রিলি২০২৩</option>
            <option value="option3">বিসিএস প্রিলি২০২৩</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <Icon
              icon="iconamoon:arrow-down-2-duotone"
              width={25}
              className="text-[#FFFFFF]"
            />
          </div>
        </div>
      </div>

      {/* job expart section  */}
      <div className="mt-16">
        <h1 className="flex items-center gap-3 text-xl">
          <Icon icon="game-icons:check-mark" />
          Job Expert আপনার প্যাকেজ
        </h1>
        <div className="mt-10 flex flex-col md:flex-row  justify-center gap-16 gap-y-5">
          <ul>
            <li className="flex items-center gap-3">
              <Icon icon="carbon:checkmark-outline" width={20} /> লাইফ টাইম সকল
              জব পরিক্ষার সুযোগ{" "}
            </li>
            <li className="flex items-center gap-3 py-3">
              <Icon icon="carbon:checkmark-outline" width={20} /> Video Class
              এবং প্রিমিয়াম ফিচারের এক্সেস পাবেন।
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="carbon:checkmark-outline" width={20} /> সকল বাটনের সকল
              লাইভ এবং আর্কাইভের পরীক্ষা দিতে পারবেন
            </li>
            <li className="flex items-center gap-3 py-3">
              <Icon icon="carbon:checkmark-outline" width={20} />
              আপনি যে কোন সময় পুরনো প্রশ্নপত্র দেখতে ও পড়তে পারবেন।
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="carbon:checkmark-outline" width={20} />
              আগের সকল পরীক্ষার ২.৫০ লাখ++ Exclusive MCQ এবং রেফারেন্সসহ
              ব্যাখ্যা আছে
            </li>
          </ul>

          <div>
            <div className="border border-b-0">
              <h1 className="text-xl px-5 text-center py-2 font-semibold">
                পরীক্ষা তারিখ
              </h1>
            </div>
            <div className="border border-t-0">
              <p className="text-lg bg-primary text-center text-[#FFFFFF] py-10 px-4  ">
                ১০ ঘন্টা ২৬ মিনিট ২০ সেকেন্ড
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ১২ মাস বিসিএস  প্রিলি */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 gap-y-5 mt-16">
        <div>
          <div className="border border-b-0  bg-primary">
            <h1 className="text-2xl  text-center py-4  text-[#FFFFFF]">
              ১২ মাস বিসিএস প্রিলি
            </h1>
          </div>
          <div className="border py-10 px-5">
            <ul>
              <li className="flex items-center gap-3">
                {" "}
                <Icon icon="carbon:checkmark-outline" width={20} /> লাইফ টাইম
                সকল জব পরীক্ষার সুযোগ{" "}
              </li>
              <li className="flex items-center gap-3 py-3">
                {" "}
                <Icon icon="carbon:checkmark-outline" width={20} /> Video Class
                এবং প্রিমিয়াম ফিচারের এক্সেস পাবেন।
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <Icon icon="carbon:checkmark-outline" width={20} /> সকল বাটনের
                সকল লাইভ এবং আর্কাইভের পরীক্ষা দিতে পারবেন
              </li>
              <li className="flex items-center gap-3 py-3">
                {" "}
                <Icon icon="carbon:checkmark-outline" width={20} /> আপনি যে কোন
                সময় পুরনো প্রশ্নপত্র দেখতে ও পড়তে পারবেন।
              </li>
              <li className="flex items-center gap-3">
                <Icon icon="carbon:checkmark-outline" width={25} />
                আগের সকল পরীক্ষার ২.৫০ লাখ++ Exclusive MCQ এবং রেফারেন্সসহ
                ব্যাখ্যা আছে
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="border border-b-0  bg-primary">
            <h1 className="text-2xl  text-center py-4  text-[#FFFFFF]">
              ১২ মাস বিসিএস প্রিলি
            </h1>
          </div>
          <div className="border py-10 px-5">
            <ul>
              <li className="flex items-center gap-3">
                {" "}
                <Icon icon="carbon:checkmark-outline" width={20} /> লাইফ টাইম
                সকল জব পরীক্ষার সুযোগ{" "}
              </li>
              <li className="flex items-center gap-3 py-3">
                {" "}
                <Icon icon="carbon:checkmark-outline" width={20} /> Video Class
                এবং প্রিমিয়াম ফিচারের এক্সেস পাবেন।
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <Icon icon="carbon:checkmark-outline" width={20} /> সকল বাটনের
                সকল লাইভ এবং আর্কাইভের পরীক্ষা দিতে পারবেন
              </li>
              <li className="flex items-center gap-3 py-3">
                {" "}
                <Icon icon="carbon:checkmark-outline" width={20} /> আপনি যে কোন
                সময় পুরনো প্রশ্নপত্র দেখতে ও পড়তে পারবেন।
              </li>
              <li className="flex items-center gap-3">
                <Icon icon="carbon:checkmark-outline" width={25} />
                আগের সকল পরীক্ষার ২.৫০ লাখ++ Exclusive MCQ এবং রেফারেন্সসহ
                ব্যাখ্যা আছে
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* slider section */}
      <div className="mt-16">
        <Slider />
      </div>
      <section>
        <img src={logo} alt="" className="mx-auto mt-16" />
        <h1 className="text-xl md:text-2xl text-center mt-10 mb-10 font-semibold">
          ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5 mb-16">
          <img src={appstore} alt="" className="w-40" />
          <img src={googlestore} alt="" className="w-40" />
        </div>
      </section>
    </>
  );
};

export default PackageUpdate;

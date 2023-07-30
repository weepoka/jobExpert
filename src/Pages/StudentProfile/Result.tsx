import JobExpart from "../../components/JobExpart/JobExpart";
import PackageDropdown from "../../components/PackageDropdown/PackageDropdown";
import Slider from "../../components/Slider/Slider";

const Result = () => {
  return (
    <>
      <div className=" flex items-center mt-16">
        <PackageDropdown />
      </div>
      <div className="mt-16">
        <div className="border  bg-primary">
          <h1 className="text-xl font-semibold text-[#FFFFFF] py-3 text-center">
            বিসিএস প্রিলি২০২৩
          </h1>
        </div>
        <div className="mx-auto">
          <table className="table-auto mt-5 w-full">
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center">বিষয়</td>
                <td className="border px-4 py-2 text-center">সঠিক উত্তর</td>
                <td className="border px-4 py-2 text-center">মোট নাম্বার</td>
                <td className="border px-4 py-2 text-center">কমেন্ট</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center">
                  বিসিএস প্রিলি-২০২৩
                </td>
                <td className="border px-4 py-2 text-center">৬০</td>
                <td className="border px-4 py-2 text-center">১০০</td>
                <td className="border px-4 py-2 text-center">Intermediate</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center">
                  ৯ম-২০তম গ্রেড পরীক্ষা
                </td>
                <td className="border px-4 py-2 text-center">৫০</td>
                <td className="border px-4 py-2 text-center">৫০</td>
                <td className="border px-4 py-2 text-center">Best</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center">ভর্তি পরীক্ষা</td>
                <td className="border px-4 py-2 text-center">২০</td>
                <td className="border px-4 py-2 text-center">২০</td>
                <td className="border px-4 py-2 text-center">Best</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* slider */}
      <div className="mt-16">
        <Slider />
      </div>

      {/* job expart */}
      <JobExpart />
    </>
  );
};

export default Result;

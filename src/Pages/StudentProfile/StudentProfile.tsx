import profile from "../../assets/studentprofile/image 54.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
import StudentTabs from "./StudentTabs";

const StudentProfile = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center items-center mt-16 bg-secondary p-10 w-4/5 mx-auto">
        {/* student image  */}
        <div>
          <img src={profile} alt="" className="w-1/2 rounded-full mx-auto" />
        </div>

        {/* student info  */}
        <div>
          <h1 className="text-xl lg:text-4xl  font-bold pb-3">
            Sabbir Hossain
          </h1>
          <p>বিসিএস প্রিলি-২০২৩</p>
          <p>Id: Free 754552321</p>
          <p>প্যাকেজ মেয়াদঃ ২৪ ঘন্টা</p>
        </div>

        {/* progressbar */}
        <div className="w-1/2">
          <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
            {(percentage) => (
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            )}
          </ChangingProgressProvider>
        </div>
      </div>
      {/* students tabs  */}
      <StudentTabs />
    </>
  );
};

export default StudentProfile;

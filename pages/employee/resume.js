import DashLayout from '../../components/employee/DashLayout';
import { BsPlus } from 'react-icons/bs';
import { useState } from 'react';
const resume = () => {
  const [showed, setshowed] = useState(false);
  const [education, seteducation] = useState({
    level: '',
    institution: '',
    from: '',
    to: '',
    gpa: '',
  });

  return (
    <div className="p-5">
      <div className=" flex flex-col w-full h-full">
        <div className="text-xl md:text-3xl font-semibold ">Resume</div>
      </div>
      <div className="bg-gray-200 p-5">
        <div className="text-xl font-semibold mt-5">
          Fill the details and get your professional C.V. ready in seconds.
        </div>
        <div className="text-sm text-red-400">
          Fill the form wisely as this data can be seen and download by the
          employer. Mind to not fill any personal details other than personal
          qualification and skills.
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <div className=" flex justify-between items-center ">
            <span className="text-lg font-">Education</span>

            <div className={`${showed ? '' : hidden}`}>
              <div className="border-1 border-indigo-600">
                <form>
                  <div>Level</div>
                  <input
                    type="text"
                    onChange={(e) =>
                      seteducation((prev) => {
                        return { ...prev, level: e.target.value };
                      })
                    }
                  />
                  <div>Institution</div>
                  <input
                    type="text"
                    onChange={(e) =>
                      seteducation((prev) => {
                        return { ...prev, institution: e.target.value };
                      })
                    }
                  />
                  <div>GPA</div>
                  <input
                    type="text"
                    onChange={(e) =>
                      seteducation((prev) => {
                        return { ...prev, gpa: e.target.value };
                      })
                    }
                  />
                  <div>from</div>
                  <input
                    type="text"
                    onChange={(e) =>
                      seteducation((prev) => {
                        return { ...prev, from: e.target.value };
                      })
                    }
                  />
                  <input
                    type="number"
                    onChange={(e) =>
                      seteducation((prev) => {
                        return { ...prev, to: e.target.value };
                      })
                    }
                  />
                </form>
              </div>
            </div>

            <button
              onClick={() => setshowed(true)}
              className="flex items-center gap-2  text-md md:text-lg hover:translate-y-0.5 transition-all bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 md:px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <span className="md:block">
                <BsPlus className="w-7 h-7" />
              </span>
              <span className="text-lg font-semibold">Add Education</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
resume.getLayout = function getLayout(page) {
  return <DashLayout active="profile">{page}</DashLayout>;
};

import { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { languageOptions } from "../../constants/languageOptions";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ToastContainer, toast } from "react-toastify"; // used to put like pop up notifications
import "react-toastify/dist/ReactToastify.css"; // css file for toastify

import { defineTheme } from "./defineThemes";
import useKeyPress from "./useKeyPress";
import OutputWindow from "./OutputWindow";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import { useNavigate } from 'react-router-dom';


const pythonDefault = `class Solution(object):
  def twoSum(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """`; // probably have a diff default for each problem

const CompetitionCode = ({players, updatePlayer}) => {
  const [code, setCode] = useState(pythonDefault); // refers to the code we have typed
  const [outputDetails, setOutputDetails] = useState(""); // the output details from Judge0
  const [processing, setProcessing] = useState(null); // whether we are processing submitted code
  const [processingFinal, setProcessingFinal] = useState(null); // whether we're processing FINAL submitted code
  const [theme, setTheme] = useState("cobalt"); // the current theme we are using
  const [language, setLanguage] = useState(languageOptions[0]); // the current programming language we are using
  const [inputStatu,changeStatu] = useState(true);

  const [showSubmitModal, setSubmitModal] = useState(false);
  const [waitingMessage, setWaitingMessage] = useState(false);
  
  const enterPress = useKeyPress("Enter"); // a hook that returns true if enter is pressed
  const ctrlPress = useKeyPress("Control"); // a hook that returns true if cntrl is pressed

  // const { user } = useUser();
  // if (!user) {
  //   alert("not logged in");
  // }

  const onOpenModalSubmit = () => {
    setSubmitModal(true);
  };

  const onCloseModalclose = () => {
    setSubmitModal(false);
    setWaitingMessage(false);
  };

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };
  const useRoute = useNavigate();
  // everytime enter or control is pressed, this runs
  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);

  // we can map many different types of actions to this
  const onChange = (action, data) => {
     if(inputStatu){
      switch (action) {
        case "code": {
         // setCode(data);
          break;
        }
        default: {
          console.warn("case not handled!", action, data);
        }
      }
     }
     else return;
  };

  // }
  // submitEvent(handleSubmit);
  const handleSubmit = async () => {
    setWaitingMessage(true);
  };

  const handleCompile = async() => {
    setProcessing(true); // showing loading animation
    const url = 'http://localhost:8080/judge/getCompile'
    const username = sessionStorage.getItem('username');
    const requestData = {
      username,
      sourceCode:code
    };
    console.log(requestData)
    const response = await fetch(url,{
      headers:{
        "Content-Type": "application/json",
      },
      method:'POST',
      body:JSON.stringify(requestData)
    });
     
    if(response.ok){
      const data = await response.json();
      const userGrade = data.body.grade;
      // USERGRADE KEEPS ADDING UP SO JUST RUN ONCE
      setOutputDetails(` Number of test cases passed: ${userGrade}`);
      console.log(userGrade);
      // MANUAL UPDATING OF player elliexing
      updatePlayer(0, (player) => {
        // Assuming player has a property testCasesPassed
        player.testCasesPassed = userGrade;
        player.pointsGained = userGrade*10;
        player.progress = (userGrade/3)*100;
        return player;
      });
      // sessionStorage.setItem('userGrade',userGrade);
      // useRoute('/gameover');
      setProcessing(false); 
    }
  
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    // Accessible by default
    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  // success notification
  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // error notification
  const showErrorToast = (msg) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-row w-[100%] justify-end">
        <div className="px-4 py-2">
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
        <div className="px-4 py-2">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>

      <div className="flex flex-col w-[100%] ml-auto px-4 py-4">
        <div className="flex flex-col w-full">
          <CodeEditorWindow
            code={code}
            onChange={()=>{console.log('ss1')}}
            language={language?.value}
            theme={theme.value}
            inputStatu={inputStatu}
            setCode = {setCode}
          />
        </div>
        <div className="bg-[#fff3de] border-2 border-black mt-3 rounded">
        <div className="right-container flex m-3 flex-col">
        <OutputWindow outputDetails={outputDetails} />
          <div className="flex flex-row justify-between">
            <div></div>
            {/* <div>{outputDetails && <OutputDetails outputDetails={outputDetails} />}</div> */}
            <div className = "flex flex-row justify-end h-full">
              <button
                onClick={handleCompile}
                disabled={!code}
                className={[
                  "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] h-[100%] mr-5 px-4 py-2 bg-gradient-to-r",
                  "from-orange-300 to-white hover:shadow transition duration-200 flex-shrink-0",
                  !code ? "opacity-50" : "",
                ].join(" ")}
              >
                {processing ? "Processing..." : "RUN TESTS"}
              </button>
              <button
                onClick={onOpenModalSubmit}
                disabled={!code}
                className={[
                  "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] h-[100%] px-4 py-2 bg-gradient-to-r",
                  "from-green-300 to-white hover:shadow transition duration-200 flex-shrink-0",
                  !code ? "opacity-50" : "",
                ].join(" ")}
              >
                {processingFinal ? "Processing..." : "SUBMIT"}
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Submit IN MODAL */}
      <Modal open={showSubmitModal} onClose={onCloseModalclose} showCloseIcon={!waitingMessage} 
      closeOnEsc={!waitingMessage} closeOnOverlayClick={!waitingMessage}>
        <div className="modal-body">
          {waitingMessage ? (
          <div>
            <h2 className="text-2xl font-bold m-4">Submitted!</h2>
            <p className="mt-5 text-lg">
            Waiting for other players to submit or the timer to run out. Hang tight!
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold m-4">Are you sure?</h2>
            <p>This doesn't run your tests! Make sure to run your code before submitting to keep all your points.
            No changes are allowed after you submit.</p>
            <button className="mt-5 py-2 px-5 bg-yellow-300 border-2 border-yellow-800 rounded-full 
          text-yellow-800 font-bold text-lg shadow-md transition duration-300 hover:bg-yellow-400 focus:outline-none" 
          onClick={handleSubmit}>Yes, submit now!</button>
          </div>
        )}

        </div>
      </Modal>
    </>
  );
};
export default CompetitionCode;

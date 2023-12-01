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
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import { useWebSocket } from "../game-socket/WebSocketContext";

import { useUser } from "../use-user-context/UserContext";

const pythonDefault = `def solution(nums, target):`; // probably have a diff default for each problem

const CompetitionCode = () => {
  const [code, setCode] = useState(pythonDefault); // refers to the code we have typed
  const [customInput, setCustomInput] = useState(""); // the custom test cases we have typed
  const [outputDetails, setOutputDetails] = useState(null); // the output details from Judge0
  const [processing, setProcessing] = useState(null); // whether we are processing submitted code
  const [processingFinal, setProcessingFinal] = useState(null); // whether we're processing FINAL submitted code
  const [theme, setTheme] = useState("cobalt"); // the current theme we are using
  const [language, setLanguage] = useState(languageOptions[0]); // the current programming language we are using

  const [showSubmitModal, setSubmitModal] = useState(false);
  const [waitingMessage, setWaitingMessage] = useState(false);

  const enterPress = useKeyPress("Enter"); // a hook that returns true if enter is pressed
  const ctrlPress = useKeyPress("Control"); // a hook that returns true if cntrl is pressed

  const { submitCode, starterCode } = useWebSocket();
  const { username } = useUser();

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
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleSubmit = async () => {
    setWaitingMessage(true);
  };

  function onCodeSubmitCallback(response) {
    // setProcessing(false);
    // setProcessingFinal(false);
    // setOutputDetails(response);
    // showSuccessToast(`Compiled Successfully!`); // displays success notification
  }

  const handleCompile = () => {
    // setProcessing(true); // showing loading animation

    submitCode(username, code, language.id, onCodeSubmitCallback);
  };

  // checks to see if we have received a successful response from Judge0
  // if successful, get the output details and save it to outputDetails
  const checkStatus = async (token) => {
    // checking the /submissions/:token endpoint
    const url = import.meta.env.VITE_JUDGE0_SUBMISSIONS_URL + "/" + token;
    console.log(url);
    const options = {
      method: "GET",
      url: import.meta.env.VITE_JUDGE0_SUBMISSIONS_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
    };

    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id; // statusId is # from 1-14
      // 1,2 = processing | 3 = accepted | 5 = Time Exceeded
      // 6 = Compilation Error

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        // we have a result
        // setProcessing(false);
        // setProcessingFinal(false);
        // setOutputDetails(response.data);
        // showSuccessToast(`Compiled Successfully!`); // displays success notification
        //
        // if (statusId === 3) {
        //   updatePlayer(0, (player) => {
        //     // Assuming player has a property testCasesPassed
        //     player.testCasesPassed += 10;
        //     player.pointsGained += 100;
        //     player.progress += 99;
        //     return player;
        //   });
        // }

        // console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      // if there was an error in the request
      console.log("err", err);
      // setProcessing(false);
      // setProcessingFinal(false);
      // showErrorToast();
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
        <div className="py-2 pl-2 pr-2">
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
        <div className="py-2 pl-1 pr-4">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>

      <div className="flex flex-col w-[100%] ml-auto px-4 py-2">
        <div className="flex flex-col w-full">
          <CodeEditorWindow
            code={starterCode}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>
        <div className="bg-[#fff3de] border-2 border-black mt-3 rounded">
          <div className="right-container flex m-3 flex-col">
            <OutputWindow outputDetails={outputDetails} />
            <div className="flex flex-row justify-between">
              <div>
                {outputDetails && (
                  <OutputDetails outputDetails={outputDetails} />
                )}
              </div>
              <div className="flex flex-row justify-end h-full">
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
      <Modal
        open={showSubmitModal}
        onClose={onCloseModalclose}
        showCloseIcon={!waitingMessage}
        closeOnEsc={!waitingMessage}
        closeOnOverlayClick={!waitingMessage}
      >
        <div className="modal-body">
          {waitingMessage ? (
            <div>
              <h2 className="text-2xl font-bold m-4">Submitted!</h2>
              <p className="mt-5 text-lg">
                Waiting for other players to submit or the timer to run out.
                Hang tight!
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold m-4">Are you sure?</h2>
              <p>
                This doesn't run your tests! Make sure to run your code before
                submitting to keep all your points. No changes are allowed after
                you submit.
              </p>
              <button
                className="mt-5 py-2 px-5 bg-yellow-300 border-2 border-yellow-800 rounded-full 
          text-yellow-800 font-bold text-lg shadow-md transition duration-300 hover:bg-yellow-400 focus:outline-none"
                onClick={handleSubmit}
              >
                Yes, submit now!
              </button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
export default CompetitionCode;

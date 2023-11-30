import { useEffect, useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";
import { useNavigate } from "react-router-dom";
import CompetitionPage from "./CompetitionPage";
import ResizeHandle from "./ResizeHandle";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

function FullCompPage() {
    // this will need to be passed in
    const [players, setPlayers] = useState([
      { username: 'Player1', testCasesPassed: 0, pointsGained: 0, progress: 1, bgcolor: '#2f7fff' },
      { username: 'Player2', testCasesPassed: 0, pointsGained: 0, progress: 1, bgcolor: '#ff2ff5' },
      // Add more players as needed
    ]);

    const updatePlayer = (playerId, updateFunction) => {
      setPlayers((prevPlayers) => {
        const updatedPlayers = prevPlayers.map((player, index) => {
          if (index === playerId) {
            return updateFunction(player);
          }
          return player;
        });
        return updatedPlayers;
      });
    };

    const navigate = useNavigate();

    const handleTimerZero = () => {
      console.log('handleTimerZero called');
      console.log('players:', players);
      navigate('/gameover', { state: { players:players } });
    };

    return (
      <>
        <div className="flex flex-col h-screen">
          <div className="top-bar flex justify-end px-5 pt-3">
            <Timer onTimerZero={handleTimerZero}/>
            <ProgressBar players={players} height={25} />
          </div>
          <div className="full-competition-page flex-grow flex">
              <PanelGroup autoSaveId="full-competition-page" direction="horizontal">
                <Panel defaultSizePercentage={35}>
                  <div className="left-problem-desc" style={{padding: '20px' }}>
                    <h2 className="problem-desc-title p-3 text-3xl font-bold tracking-wider">Two Sum</h2>
                    <div className="selected-categories"></div>
                    <p className="problem-desc p-3 font-medium">Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.
                    <br/><br/>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.
                    <br/><br/>You can return the answer in any order.
                    <br/><br/><strong>Example:</strong>
                    <br/><strong>Input:</strong> <code>nums = [2,7,11,15], target = 9</code>
                    <br/><strong>Output:</strong> <code>[0,1]</code>
                    <br/><strong>Explanation:</strong> <code>nums[0] + nums[1] == 9</code>
                    </p>
                  </div>
                </Panel>
                <ResizeHandle />
                <Panel defaultSizePercentage={65}>
                  <div className="right-IDE px-2">
                    <CompetitionPage players={players} updatePlayer={updatePlayer}/>
                  </div>
                </Panel>
              </PanelGroup>
          </div>
        </div>
      </>
    );
  }

export default FullCompPage;
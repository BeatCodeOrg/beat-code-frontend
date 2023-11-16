import { useEffect, useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";
import CompetitionPage from "./CompetitionPage";
import ResizeHandle from "./ResizeHandle";

function FullCompPage() {
    return (
      <>
        <div className="flex flex-col h-screen">
          <div className="progress-bar">
            <h2>TEMPORARY pretend there's a progress bar here</h2>
          </div>
          <div className="full-competition-page flex-grow flex">
              <PanelGroup autoSaveId="full-competition-page" direction="horizontal">
                <Panel defaultSizePercentage={35}>
                  <div className="left-problem-desc" style={{padding: '20px' }}>
                    <h2 className="problem-desc-title p-3 text-3xl font-bold tracking-wider">DESCRIPTION</h2>
                    <div className="selected-categories"></div>
                    <p className="problem-desc p-3 font-medium">This is a sample description. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </Panel>
                <ResizeHandle />
                <Panel defaultSizePercentage={65}>
                  <div className="right-IDE p-4">
                    <CompetitionPage />
                  </div>
                </Panel>
              </PanelGroup>
          </div>
        </div>
      </>
    );
  }

export default FullCompPage;
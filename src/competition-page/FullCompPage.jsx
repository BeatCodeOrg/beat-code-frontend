import { useEffect, useState } from "react";
import CompetitionPage from "./CompetitionPage";

function FullCompPage() {
    return (
      <>
        <div className="progress-bar"></div>
        <div className="full-competition-page flex">
            <div className="left-problem-desc" style={{ width: '40%', padding: '20px' }}>
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
            <div className="right-IDE w-[65%]">
                <CompetitionPage />
            </div>
        </div>
      </>
    );
  }

export default FullCompPage;
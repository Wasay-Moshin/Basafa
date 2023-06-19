import React, { useState } from "react";
import { BsSortDownAlt } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdTableRows } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";

function RoasterMenu() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  return (
    <div className="roastermenu p-2 pt-3">
      <div className="p-2">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="group-btn">
            employee &nbsp;
          </button>
          <button type="button" class="group-btn1">
            The group
          </button>
          <button type="button" class="group-btn2">
            positions &nbsp;
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <p>manage employee</p>
        <p>
          <BsSortDownAlt size={12} />
          &nbsp; sort
        </p>
      </div>
      <div className="menubody">
        <div>
          <span>Offene Schicht </span>
          <div>
            <hr />
          </div>
        </div>
        <div>
          <div
            className={`hover-div ${isHovered1 ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <div className="namemenu">
              <span>Hassan khalid</span>
              <p>0Std 0Min / 0 Schichten</p>
            </div>
            <div>
              {isHovered1 && <AiFillEdit size={20} />}
              &nbsp;&nbsp;
              {isHovered1 && <MdTableRows size={20} />}
              &nbsp;&nbsp;
              {isHovered1 && <BsFillChatFill size={20} />}
            </div>
          </div>
          <hr />
          <div
            className={`hover-div ${isHovered2 ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="namemenu">
              <span>Hassan khalid</span>
              <p>0Std 0Min / 0 Schichten</p>
            </div>
            <div>
              {isHovered2 && <AiFillEdit size={20} />}
              &nbsp;&nbsp;
              {isHovered2 && <MdTableRows size={20} />}
              &nbsp;&nbsp;
              {isHovered2 && <BsFillChatFill size={20} />}
            </div>
          </div>
          <hr />
          {/* <div
            className={`hover-div ${isHovered2 ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="namemenu">
              <span>Hassan khalid</span>
              <p>0Std 0Min / 0 Schichten</p>
            </div>
            <div>
              {isHovered2 && <AiFillEdit size={20} />}
              &nbsp;&nbsp;
              {isHovered2 && <MdTableRows size={20} />}
              &nbsp;&nbsp;
              {isHovered2 && <BsFillChatFill size={20} />}
            </div>
          </div>
          <hr /> */}
          <div
            className={`hover-div ${isHovered3 ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          >
            <div className="namemenu">
              <span>Hassan khalid</span>
              <p>0Std 0Min / 0 Schichten</p>
            </div>
            <div>
              {isHovered3 && <AiFillEdit size={20} />}
              &nbsp;&nbsp;
              {isHovered3 && <MdTableRows size={20} />}
              &nbsp;&nbsp;
              {isHovered3 && <BsFillChatFill size={20} />}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default RoasterMenu;

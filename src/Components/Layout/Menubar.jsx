import React from "react";
// import { AiOutlineMenuFold } from "react-icons/ai";
import { HiPlusCircle } from "react-icons/hi";
function Menubar() {
  return (
    <div>
      <div className="menubar">
        <div className="p-2">
          <div className=" d-flex justify-content-between">
            <h6>All departments</h6>
               <HiPlusCircle color="rgb(25, 155, 215)" size={20} />
          </div>
          <hr />
          <div>
            <span>Employee you manage</span>
            <hr />
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <span>The personal group</span>
              <HiPlusCircle color="rgb(25, 155, 215)" size={20} />
            </div>
            <div className="pt-2">
              <p>All employee</p>
              <p>Railway station</p>
            </div>
          </div>
          <hr />
          <div>
            <span>Employee types</span>
            <p className="pt-2">full-time employee</p>
          </div>
          <hr />
          <div>
            <span>Different group</span>
            <p className="pt-3">Not in Group</p>
          </div>
          <hr />
          <div>
            <div>
              <span>Access levels</span>
            </div>
            <p className="pt-1">Administrator</p>
            <p className="pt-1">Roaster Manager</p>
            <p className="pt-1">HR Manager</p>
            <p className="pt-1">Account Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menubar;

import React from "react";
import Faq from "react-faq-component";
const data = {
  rows: [
    {
      title: "1. Basafa",
      content: `Our quick tour will walk you through setting up your roster and show you how to create and invite collaborators in no time.`,
    },
  ],
};
const data2 = {
  rows: [
    {
      title: "2. Set up your staff groups",
      content: `Enter all roles and their default pay settings`,
    },
  ],
};
const data3 = {
  rows: [
    {
      title: "3. Create employee profile",
      content: `You can set up your employees manually or import their profile data. Watch the video to learn how to create an employee profile and invite employees to Planday.`,
    },
  ],
};
const data4 = {
  rows: [
    {
      title: "4. Create layers",
      content: `You can now start scheduling. Go to Roster and create your first shift. The video introduces the tools that enable faster and smarter use of the roster.`,
    },
  ],
};
// const data5 = {
//   rows: [
//     {
//       title: "5. setup time tracking",
//       content: `Time tracking allows you to accurately record hours worked. Activate the function under "Settings > Time tracking > Employee access". Your employees can then register the start and end of their shifts via their devices.`,
//     },
//   ],
// };

const styles = {
  bgColor: " white",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "black",
  arrowColor: "black",
};

const config = {
  // animate: true,
  // arrowIcon: "v",
  // tabFocus: true
};

function Faqs() {
  return (
    <div className="fq">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="beg">
                <h4 className="">Beginning</h4>
              </div>
              <hr />
              <div className="fqs">
                <Faq data={data} styles={styles} config={config} />

                <Faq data={data2} styles={styles} config={config} />

                <Faq data={data3} styles={styles} config={config} />

                <Faq data={data4} styles={styles} config={config} />

                {/* <Faq data={data5} styles={styles} config={config} /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <div className="card">
              <div className="beg">
                <h4 className="">About us</h4>
              </div>
              <hr />
              <div className="edit">
                <p>Edit your account details and subscription</p>
                <h6>Switch to your account</h6>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Faqs;

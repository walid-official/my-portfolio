import React from "react";
import aboutImg from "../../assets/images/about2.png";
const About = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="boxShadow w-[20%] mx-auto p-6">
        <h2 className="font-bold text-4xl text-center text-white">About Me</h2>
        {/* <p className="text-center py-4 text-white ">
          I design and develop seamless web applications with a focus on
          performance and usability.
        </p> */}
      </div>

      <div className="flex py-20">
        <div className="w-[50%] flex justify-center items-center  mask mask-circle">
          <div className="boxShadow">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="w-[50%] flex justify-start">
          <div className="">
            <ul className="timeline  timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="text-white"
                    className="h-5 w-5 bg-white rounded-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start shadow-2xl  boxShadow">
                  {/* First Macintosh computer */}
                  <div className="boxShadow bg-[#21242b] shadow-2xl text-white border-none  p-6">
                    I am a passionate Web Developer specializing in React.js
                    with over 1 year of experience in Front-End Development and
                    expertise in the MERN stack (MongoDB, Express.js, React.js,
                    Node.js). My journey in web development is fueled by a
                    strong commitment to crafting efficient, responsive, and
                    user-friendly applications.
                  </div>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="text-white"
                    className="h-5 w-5 bg-white rounded-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end shadow-2xl boxShadow">
                  {/* First Macintosh computer */}
                  <p className="boxShadow bg-[#21242b] shadow-2xl text-white border-none  p-6">
                    While my primary focus has been on front-end development,
                    building visually appealing and highly interactive user
                    interfaces, I am equally excited about diving deeper into
                    back-end development. The prospect of designing robust APIs,
                    optimizing server-side logic, and ensuring seamless
                    communication between the front and back ends truly excites
                    me.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="text-white"
                    className="h-5 w-5 bg-white rounded-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start shadow-2xl boxShadow">
                  {/* First Macintosh computer */}
                  <p className="boxShadow bg-[#21242b] shadow-2xl text-white border-none  p-6">
                    In addition to my expertise in JavaScript and React.js, I am
                    proficient in technologies like TypeScript, Redux, and
                    Next.js, enabling me to develop scalable and maintainable
                    front-end applications. On the back-end side, I am
                    continually expanding my skills with tools such as Mongoose,
                    DBMS, SQL, PostgreSQL, Prisma, and GraphQL to create
                    dynamic, database-driven applications.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
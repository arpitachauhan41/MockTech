import { Link } from "react-router-dom";

export const InterviewTypes = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        margin: "40px",
        padding: "40px",
      }}
    >
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          width: "500px",
          padding: "40px",
        }}
      >
        <h1
          style={{ textAlign: "justify", fontWeight: "bold", fontSize: "40px" }}
        >
          MERN
        </h1>
        <p style={{ textAlign: "justify" }}>
          A MERN (MongoDB, Express.js, React, Node.js) interview assesses a
          candidate's expertise in full-stack web development. It evaluates
          their ability to build robust and efficient web applications using
          MongoDB for data storage, Express.js and Node.js for server-side
          logic, and React for creating dynamic user interfaces. The interview
          focuses on coding skills, architecture, and best practices to gauge a
          candidate's readiness for MERN stack development roles.
        </p>
        <Link style={{ textDecoration: "none" }} to={"/interview/mern?techStack=mern"}>
          <button
            style={{
              display: "block",
              backgroundColor: "#4CAF50",
              margin: "20px auto",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "solid lightgray 1px",
            }}
          >
            Start Interview
          </button>
        </Link>
      </div>

      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          width: "500px",
          padding: "40px",
        }}
      >
        <h1
          style={{ textAlign: "justify", fontWeight: "bold", fontSize: "40px" }}
        >
          Node.js
        </h1>
        <p style={{ textAlign: "justify" }}>
          A Node.js interview evaluates a candidate's proficiency in server-side
          JavaScript development. It assesses their knowledge of Node.js
          runtime, asynchronous programming, event-driven architecture, and the
          ability to build scalable and efficient web applications and APIs.
          Candidates are typically asked to demonstrate their coding skills,
          handle asynchronous operations, and troubleshoot common Node.js
          issues, making them suitable for backend development roles in web and
          application development.
        </p>
        <Link style={{ textDecoration: "none" }} to={"/interview/mern?techStack=node"}>
          <button
            style={{
              display: "block",
              backgroundColor: "#4CAF50",
              margin: "20px auto",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "solid lightgray 1px",
            }}
          >
            Start Interview
          </button>
        </Link>
      </div>

      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          width: "500px",
          padding: "40px",
          marginTop: "40px",
        }}
      >
        <h1
          style={{ textAlign: "justify", fontWeight: "bold", fontSize: "40px" }}
        >
          Java
        </h1>
        <p style={{ textAlign: "justify" }}>
          A Java interview assesses a candidate's expertise in the Java
          programming language. It evaluates their knowledge of core Java
          concepts, object-oriented programming principles, data structures, and
          algorithms. Candidates are typically asked to demonstrate their coding
          skills, problem-solving abilities, and familiarity with Java libraries
          and frameworks. These interviews are common for various software
          development roles, including backend development, Android app
          development, and enterprise-level application development.
        </p>
        <Link style={{ textDecoration: "none" }} to={"/interview/mern?techStack=java"}>
          <button
            style={{
              display: "block",
              backgroundColor: "#4CAF50",
              margin: "20px auto",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "solid lightgray 1px",
            }}
          >
            Start Interview
          </button>
        </Link>
      </div>
    </div>
  );
};
export default InterviewTypes
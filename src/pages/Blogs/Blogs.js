import React from "react";
import useTitle from "../../components/UseTitle";

const Blogs = () => {
    useTitle("ZP | Blogs");
  return (
    <div className="my-5 p-5">
      <div>
        <h1 className="text-2xl">Difference between SQL and NoSQL?</h1>
        <p>
          <span className="font-bold w-1/2">SQL Database:</span> <br />
          1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). <br />
          2. These databases have fixed or static or predefined schema. <br />
          3. These databases are not suited for hierarchical data storage.{" "}
          <br />
          4. These databases are best suited for complex queries. <br />
          5. Vertically Scalable. <br />
          6. Follows ACID property. <br />
          7. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc,
        </p>
        <br />
        <p>
          <span className="font-bold w-1/2">NoSQL Database:</span> <br />
          1. Non-relational or distributed database system. <br />
          2. They have dynamic schema. <br />
          3. These databases are best suited for hierarchical data storage.{" "}
          <br />
          4. These databases are not so good for complex queries. <br />
          5. Horizontally scalable. <br />
          6. Follows CAP(consistency, availability, partition tolerance). <br />
          7. Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.
        </p>
      </div>
      <br /><br />
      <div>
        <h2 className="text-2xl">What is JWT, and how does it work?</h2>
        <p className="text-justify">
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP). So the integrity and
          authenticity of the token can be verified by other parties involved.
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
          JWT is a token based stateless authentication mechanism. Since it is a
          client-side based stateless session, server doesn't have to completely
          rely on a datastore(database) to save session information.
        </p>
      </div>
      <br /> <br />
      <div>
        <h2 className="text-2xl">
          What is the difference between javascript and NodeJS?
        </h2>
        <p className="text-justify">
          JavaScript is a client-side scripting language that is lightweight,
          cross-platform, and interpreted. Both Java and HTML include it.
          Node.js, on the other hand, is a V8-based server-side programming
          language. <br />
          As a result, it is used to create network-centric applications. It's a
          networked system made for data-intensive real-time applications. If we
          compare node js vs. python, it is clear that node js will always be
          the preferred option. <br /> JavaScript is a simple programming
          language that can be used with any browser that has the JavaScript
          Engine installed. Node.js, on the other hand, is an interpreter or
          execution environment for the JavaScript programming language. It
          requires libraries that can be conveniently accessed from JavaScript
          programming to be more helpful. <br /> Any engine may run JavaScript.
          As a result, writing JavaScript is incredibly easy, and any working
          environment is similar to a complete browser. Node.js, on the other
          hand, only enables the V8 engine. Written JavaScript code, on the
          other hand, can run in any context, regardless of whether the V8
          engine is supported.
        </p>
      </div>
      <br /><br />
      <div>
        <h2 className="text-2xl">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p className="text-justify">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

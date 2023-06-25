import React from "react";

function Footer() {
  return (
    <div>
      <div className="sm:text-4xl mt-20 flex bg-violet-950 text-white font-bold text-2xl">
        <section>
          <p className="sm:ml-20 ml-5 py-5 sm:py-10">Name:</p>
          <p className="sm:ml-20 ml-5 py-5 sm:py-10">Number:</p>
          <p className="sm:ml-20 ml-5 py-5 sm:py-10">Email:</p>
          <p className="sm:ml-20 ml-5 py-5 sm:py-10">Address:</p>
        </section>
      </div>
    </div>
  );
}

export default Footer;

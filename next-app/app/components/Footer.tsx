import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const link1 = ["Company", "About", "Blog", "Services"];
  const link2 = ["Company", "About", "Blog", "Services"];
  const link3 = ["Company", "About", "Blog", "Services"];
  const li =
    "hover:text-lime-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300";

  const h3 = "text-lime-100 text-xl font-semibold antialiased mb-6";
  const ul = "flex flex-col gap-y-4";

  return (
    <>
      <footer
        style={{ minHeight: "50vh" }}
        className=" text-gray-100  bg-lime-800 pt-24"
      >
        <div className="flex flex-row justify-around items-center pb-24">
          <SocialIcons />
          <div>
            <h3 className={h3}>Company</h3>
            <ul className={ul}>
              {link1.map((link) => (
                <li key={link} className={li}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={h3}>Legal</h3>
            <ul className={ul}>
              {link2.map((link) => (
                <li key={link} className={li}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={h3}>Patners</h3>
            <ul className={ul}>
              {link3.map((link) => (
                <li key={link} className={li}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <hr style={{ maxWidth: "90%", margin: "0 auto" }} className="pb-2" />
          <p className="inline-block ml-2 mb-6">
            © 2020 SEEDAfrique, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar items-end bg-base-100">
      <div className="avatar">
        <div className="w-24 rounded-xl">
          <Image
            src="/img/kevin.png"
            width={500}
            height={500}
            alt="avatar of Rick"
          />
        </div>
      </div>
      <div className="flex-1">
        <p className="btn btn-ghost text-xl">Rick Bot</p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Contact Me</a>
          </li>
          <li>
            <details>
              <summary>Follow Me</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a href="https://x.com/realrowpkee" target="_blank">
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rick-keenan/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

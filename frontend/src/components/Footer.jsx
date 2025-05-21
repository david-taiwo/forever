import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur unde, recusandae repellat, a molestiae ad iste ipsam
            non, labore optio facilis dolore quasi. Doloremque odit suscipit
            assumenda, cum tenetur aliquam.
          </p>
        </div>

        <div>
          <p className="flex flex-col gap-1 text-gray-600">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="flex flex-col gap-1 text-gray-600">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+234-90-136-790-54</li>
            <li>davidtaiwo003@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ forever.com - All Rrights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

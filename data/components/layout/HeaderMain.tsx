import Link from "next/link";
import React from "react";

import Image from "next/image";

import Miffy from "/app/public/assets/images/web/Miffy-Profile-Alt.png"

function HeaderMain() {
  return (<header className="flex w-full items-center justify-between px-6 h-12 bg-black">
      <div className="flex items-center">
        <Link href="/" className="flex justify-center w-9"><Image src={Miffy} alt="Error" className="w-8 hover:w-9 duration-200 rounded-full"/></Link>
        <Link href="/" className="ml-2 font-medium">SteveEspinozaDiaz.com</Link>
      </div>
      <div>
        <ul className="flex">
          <li>About</li>
          <li className="ml-4">Notes</li>
          <li className="ml-4">Projects</li>
          <li className="ml-4">Art</li>
          <li className="ml-4">Blog</li>
        </ul>
      </div>
  </header>);
}

export default HeaderMain;

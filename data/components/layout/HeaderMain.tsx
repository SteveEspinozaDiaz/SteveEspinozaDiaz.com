import Link from "next/link";
import React from "react";

import Image from "next/image";

import Miffy from "/public/assets/images/web/Miffy-Profile-Alt.png"

function HeaderMain() {
  return (<header className="flex w-full items-center justify-between px-6 h-14 bg-black">
      <div className="flex items-center">
        <Link href="/" className="flex justify-center w-9"><Image src={Miffy} alt="Error" className="w-8 hover:w-9 duration-200 rounded-full"/></Link>
        <Link href="/" className="ml-2 font-medium">SteveEspinozaDiaz.com</Link>
      </div>
      <div>
        <ul className="flex">
          <Link href='/about'><li className=" hover:text-stone-200 duration-200">About</li></Link>
          <Link href='/notes'><li className="ml-4 hover:text-stone-200 duration-200">Notes</li></Link>
          <Link href='/projects'><li className="ml-4 hover:text-stone-200 duration-200">Projects</li></Link>
          <Link href='/art'><li className="ml-4 hover:text-stone-200 duration-200">Art</li></Link>
          <Link href='/blog'><li className="ml-4 hover:text-stone-200 duration-200">Blog</li></Link>
        </ul>
      </div>
  </header>);
}

export default HeaderMain;

import React from "react";

export const Navbar = () => {
  return (
    <section className="flex w-screen py-8 px-[350px]">
      <navbar>
        <div className="flex ">
          <div className="w-[158px] h-9">
            <img src="./logo.png"></img>
          </div>
          <div className="flex gap-10 justify-center items-center ml-[118px] w-[667px]">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="flex py-2 px-4 gap-3 items-center bg-[#F4F4F5]">
            <div>
              <input type="search" placeholder="Search"></input>
            </div>
            <div>
              <img src="./search-outline.svg"></img>
            </div>
          </div>
        </div>
      </navbar>
    </section>
  );
};

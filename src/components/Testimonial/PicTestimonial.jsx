import React from "react";
import ProfilePic from "../../assets/main_profile_img.png";
import InvertedCommas from "../../assets/inverted_commas.svg";

export default function PicTestimonial({ userName, userProfile }) {
  return (
    <div className="flex flex-col items-center w-[24rem] bg-[#2545B8] px-4 mt-[11rem] text-white md:w-full md:h-[25rem] md:flex-row md:gap-6 md:px-6">
      <img
        src={ProfilePic}
        alt="Profile picture of the user"
        className=" w-[22rem] rounded-lg -mt-[11rem] md:w-[28rem] md:mt-1"
      />
      <div className="md:w-[50rem]">
        <img
          src={InvertedCommas}
          alt="An outline of inverted commas"
          className="w-12 h-12 self-start mt-10 mb-4"
        />
        <p className="text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et
          aspernatur quis consectetur enim officia beatae sunt eius, odit quod
          aperiam alias doloremque deleniti reiciendis numquam laborum repellat
          blanditiis ducimus.
        </p>
        <div className="self-start mt-4 mb-6">
          <h4 className="font-bold">{userName}</h4>
          <h5>{userProfile}</h5>
        </div>
      </div>
    </div>
  );
}

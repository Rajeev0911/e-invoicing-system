import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProfileForm from "./ProfileForm";

const page = () => {
  return (
    <div>
      <nav className="nav flex items-center justify-between h-20 w-100 bg-slate-900">
        <h1 className="text-white ml-5 text-xl cursor-pointer	">
          E-Invoicing System
        </h1>
        <div className="nav-btn flex items-center gap-5 mr-10">
          <button className="bg-white p-2 rounded">More</button>
          <button className="bg-white p-2 rounded">Support</button>
          <div className="profile">
            <AccountCircleIcon className="text-white text-5xl cursor-pointer" />
          </div>
        </div>
      </nav>
      <main className="flex justify-center items-center bg-slate-100 p-10">
        <div className="bg-zinc-600 flex w-3/6 rounded-lg">
          <ProfileForm />
        </div>
      </main>
    </div>
  );
};

export default page;

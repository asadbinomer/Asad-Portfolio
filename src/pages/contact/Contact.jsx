import React from 'react';
import UButton from '../../component/uButton/UButton.jsx';

function ContactMe() {
  return (
    <div className="w-full max-md:w-full pb-[50px] px-20 flex flex-col items-center text-white gap-8 text-center">
      <header className="flex flex-col items-center gap-4">
        <p className="text-lg font-semibold">Get In Touch</p>
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-lg font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Animi, ex quis! Dolore exercitationem vitae nam.</p>
      </header>

      <form className="flex flex-col gap-6 max-md:w-full">
        <div className="flex gap-8  max-md:flex-col max-md:w-full">
          <InputField label="First Name" placeholder="Enter Your First Name" />
          <InputField label="Last Name" placeholder="Enter Your Last Name" />
        </div>

        <div className="flex gap-8 max-md:flex-col max-md:w-full">
          <InputField label="Email" placeholder="Enter Your Email" />
          <InputField label="Phone Number" placeholder="Enter Your Phone Number" />
        </div>

        <InputField label="Choose a Topic" placeholder="Select one..." fullWidth />
        
        <div className="flex items-start flex-col gap-4">
          <label className="text-lg font-semibold">Message</label>
          <textarea
            className="border-2 border-[#5E3BEE] focus:outline-none text-[#5e3bee] outline-[#5E3BEE] px-4 py-3 w-full h-48 rounded-lg placeholder:text-[#5e3bee] placeholder:font-bold font-bold"
            placeholder="Type your message..."
          />
        </div>

        <div className="flex items-center gap-4">
          <input type="checkbox" className="w-4 h-4" />
          <p className="text-lg font-bold">I accept the terms</p>
        </div>

        <UButton type="submit" value='Submit' primary={true} className="w-32 mx-auto px-8 py-4 bg-[#5E3BEE] rounded-lg text-lg font-semibold text-white hover:bg-[#5034be]"/>
      </form>
    </div>
  );
}

function InputField({ label, placeholder, fullWidth }) {
  return (
    <div className={`flex flex-col items-start font-semibold gap-2 ${fullWidth ? 'w-full' : 'w-[350px] max-md:w-full'}`}>
      <label className="text-lg font-semibold">{label}</label>
      <input
        type="text"
        className="border-2 border-[#5E3BEE] w-full focus:outline-none text-[#5e3bee] outline-[#5E3BEE] px-4 py-3 rounded-lg placeholder:text-[#5e3bee] placeholder:font-semibold"
        placeholder={placeholder}
      />
    </div>
  );
}

export default ContactMe;

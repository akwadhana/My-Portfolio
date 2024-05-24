import React from "react";
import picture1 from "../assets/images/man.jpg";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import CustomButton from "../Components/Button";
import Modal from "../Components/Modal";
import DownloadLink from "../Components/DownloadLink";



const About = () => {
    return (
        <div className="bg-stone-900 p-4">
            <div className="lg:flex gap-10">
                <img
                    className="w-full lg:w-[300px] mt-5 lg:mt-5 lg:ml-5 hidden lg:block"
                    src={picture1}
                    alt="Profile" />

                <div className="flex-1 px-4 lg:px-10 mt-5">
                    <div className="text-center lg:text-left lg:ml-5">
                    <p>About me</p>
                    <h1 className="text-xl lg:text-2xl font-bold">Who Am I</h1>
                    </div>
                 
                    <p className="mt-3 lg:mt-5 text-center lg:text-left px-5">
                        My name is Taiwo Hassan Raji, and I am a passionate frontend web
                        developer. I have always been fascinated by the intersection of
                        design and technology, and I am thrilled to be able to bring my
                        creative ideas to life through coding. My primary focus is on
                        frontend development, where I excel in crafting beautiful user
                        interfaces that are both visually appealing and user-friendly. My
                        technical skills include proficiency in HTML CSS, JavaScript, and
                        various frontend frameworks such as React.js. I am well-versed in
                        responsive design principles, ensuring that websites look great and
                        function seamlessly across different devices and screen sizes.
                        Continuously learning and staying up-to-date with the latest trends
                        and technologies is a priority for me. I am always exploring new
                        tools, frameworks, and techniques to enhance my skills and deliver
                        cutting-edge solutions to my clients.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-5 lg:ml-[400px]  text-center justify-center">
                <div className="w-full md:w-80 p-4 flex gap-2 bg-black rounded-md  ">
                    <IoLogoHtml5 className="mt-1 text bg-amber-700 " />
                    <p>Html5</p>
                </div>
                <div className="w-full md:w-80 p-4 flex gap-2 bg-black rounded-md  ">
                    <IoLogoCss3 className="mt-1 text bg-cyan-400 " />
                    <p>CSS3</p>
                </div>
                <div className="w-full md:w-80 p-4 flex gap-2 bg-black rounded-md ">
                    <TbBrandJavascript className="bg-amber-400 mt-1 " />
                    <p>JavaScript</p>
                </div>
                <div className="w-full md:w-80 p-4 flex gap-2 bg-black rounded-md">
                    <FaReact className="mt-1 text bg-cyan-400" />
                    <p>React.JS</p>
                </div>
            </div>
          
            <div className="flex justify-center lg:mr-[350px] mt-5">
            <DownloadLink
            label="Download CV"
            style={{ marginTop: "10px", padding: "10px 20px "  }} />
                   
            </div>
         
        </div>
    );
};

export default About;

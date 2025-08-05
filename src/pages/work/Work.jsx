import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UButton from "../../component/uButton/UButton";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";
import project9 from "../../assets/project9.png";
import project10 from "../../assets/project10.png";
import WorkCaseStudies from "../workCaseStudies/WorkCaseStudies.jsx";

function Work() {
  const navigate = useNavigate();

  const allProjects = [  
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project1,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project2,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project3,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project4,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project5,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project6,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project7,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project8,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project9,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
    {
      img: project10,
      title: "Relik - Admin Dashboard",
      description:
        "👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(
    allProjects.slice(0, 10)
  );
  const observer = useRef(null);

  const handleCaseStudyClick = () => {
    navigate("/work-case-studies");
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prevProjects) => {
      const nextProjects = allProjects.slice(0, prevProjects.length + 4);
      return nextProjects;
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadMoreProjects();
      }
    }, options);

    const loadMoreButton = document.querySelector("#loadMoreButton");
    if (loadMoreButton) {
      observer.current.observe(loadMoreButton);
    }

    return () => {
      if (observer.current && loadMoreButton) {
        observer.current.unobserve(loadMoreButton);
      }
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] pt-[64px] pb-[100px] flex flex-col items-start gap-[60px] max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[40px] max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]">
        <div className="flex items-center justify-between w-[100%]">
          <h1 className="text-[48px] font-semibold">Latest case study</h1>
          <div className="flex items-center gap-[0px]">
            <UButton
              value="All"
              className="text-[18px] font-semibold px-[20px] py-[12px]"
            />
            <UButton
              value="UI Design"
              className="bg-transparent text-[#485057] text-[18px] font-medium px-[20px] py-[12px]"
            />
            <UButton
              value="Webflow"
              className="bg-transparent text-[#485057] text-[18px] font-medium px-[20px] py-[12px]"
            />
            <UButton
              value="Marketing"
              className="bg-transparent text-[#485057] text-[18px] font-medium px-[20px] py-[12px]"
            />
            <UButton
              value="Content"
              className="bg-transparent text-[#485057] text-[18px] font-medium px-[20px] py-[12px]"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-2 items-center gap-[24px]">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="relative w-full h-[400px] overflow-hidden project-cover"
            >
              <img src={project.img} alt="" className="w-[100%] h-[100%]" />
              <div className="project w-[100%] h-[100%] py-[130px] px-[80px] flex flex-col items-center gap-[32px] max-[640px]:gap-[15px] justify-center z-1 bg-opacity-[.7] transition-[1s] bg-[#121314] absolute top-[100%] max-[640px]:top-[140%] left-[0px] max-[640px]:py-[20px] max-[640px]:px-[20px]">
                <div className="flex flex-col gap-[24px] items-center max-[640px]:gap-[10px]">
                  <div className="flex flex-col items-center gap-[16px] max-[640px]:gap-[5px]">
                    <UButton
                      value="WEBSITE"
                      className="w-fit px-[16px] py-[10px]"
                    />
                    <h5 className="text-[28px] font-semibold max-[640px]:text-[20px]">
                      {project.title}
                    </h5>
                  </div>
                  <p className="text-[18px] font-medium text-[#C1C1C1] max-[640px]:text-[12px]">
                    {project.description}
                  </p>
                </div>
                <UButton
                  value="Case Study"
                  onClick={handleCaseStudyClick}
                  className="bg-transparent border-2 border-[#fff] text-[#ffff] font-semibold rounded-[4px] max-[640px]:w-[128px] max-[640px]:text-[15px]"
                  primary={true}
                />
              </div>
            </div>
          ))}
        </div>

        <UButton
          value="Load more project..."
          onClick={loadMoreProjects}
          className="mx-auto"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M20.25 6.75H3.75C3.33579 6.75 3 7.08579 3 7.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V7.5C21 7.08579 20.6642 6.75 20.25 6.75Z"
                stroke="#5E6971"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M15.75 6.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75H9.75C9.35218 3.75 8.97064 3.90804 8.68934 4.18934C8.40804 4.47064 8.25 4.85218 8.25 5.25V6.75"
                stroke="#5E6971"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M21 11.8398C18.2646 13.4218 15.1599 14.253 12 14.2492C8.83955 14.2574 5.73363 13.426 3 11.8398"
                stroke="#5E6971"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M10.875 11.25H13.125"
                stroke="#5E6971"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default Work;

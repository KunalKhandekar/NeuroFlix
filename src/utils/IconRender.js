import React from 'react';
import { GiHighPunch } from "react-icons/gi"; //Action
import { GiDuffelBag } from "react-icons/gi"; //Adventure
import { GrCubes } from "react-icons/gr"; //Animation
import { MdTheaterComedy } from "react-icons/md"; //Comedy
import { FaGun } from "react-icons/fa6"; //crime
import { MdOutlineMissedVideoCall } from "react-icons/md"; //Documentray
import { GiDramaMasks } from "react-icons/gi"; //Drama
import { MdOutlineFamilyRestroom } from "react-icons/md"; //family
import { FaFantasyFlightGames } from "react-icons/fa6"; //Fantasy
import { MdHistoryEdu } from "react-icons/md"; //History
import { GiGhost } from "react-icons/gi"; //Horror
import { MdLibraryMusic } from "react-icons/md"; //Music
import { PiDetectiveFill } from "react-icons/pi"; //Mystery
import { GiLovers } from "react-icons/gi"; //Romance
import { IoRocketOutline } from "react-icons/io5"; //Science Fiction
import { PiTelevisionSimple } from "react-icons/pi"; //Tv Movies
import { SiDarkreader } from "react-icons/si"; //thriller
import { GiCrossedSwords } from "react-icons/gi"; //War
import { GiWesternHat } from "react-icons/gi"; //WesternImport


const iconComponents = [
  GiHighPunch,
  GiDuffelBag,
  GrCubes,
  MdTheaterComedy,
  FaGun,
  MdOutlineMissedVideoCall,
  GiDramaMasks,
  MdOutlineFamilyRestroom,
  FaFantasyFlightGames,
  MdHistoryEdu,
  GiGhost,
  MdLibraryMusic,
  PiDetectiveFill,
  GiLovers,
  IoRocketOutline,
  PiTelevisionSimple,
  SiDarkreader,
  GiCrossedSwords,
  GiWesternHat
];

const IconRenderer = ({ iconIndex }) => {
  const IconComponent = iconComponents[iconIndex];
  return IconComponent ? <IconComponent className="text-xl" /> : null;
};

export default IconRenderer;

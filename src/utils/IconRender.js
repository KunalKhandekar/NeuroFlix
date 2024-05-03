import React from 'react';

// Import icons
import { GiHighPunch } from "react-icons/gi"; //Action
import { GiDuffelBag } from "react-icons/gi"; //Adventure
import { GrCubes } from "react-icons/gr"; //Animation
import { MdTheaterComedy } from "react-icons/md"; //Comedy
import { FaGun } from "react-icons/fa6"; //Crime
import { MdOutlineMissedVideoCall } from "react-icons/md"; //Documentary
import { GiDramaMasks } from "react-icons/gi"; //Drama
import { MdOutlineFamilyRestroom } from "react-icons/md"; //Family
import { FaFantasyFlightGames } from "react-icons/fa6"; //Fantasy
import { MdHistoryEdu } from "react-icons/md"; //History
import { GiGhost } from "react-icons/gi"; //Horror
import { MdLibraryMusic } from "react-icons/md"; //Music
import { PiDetectiveFill } from "react-icons/pi"; //Mystery
import { GiLovers } from "react-icons/gi"; //Romance
import { IoRocketOutline } from "react-icons/io5"; //Science Fiction
import { PiTelevisionSimple } from "react-icons/pi"; //Tv Movies
import { SiDarkreader } from "react-icons/si"; //Thriller
import { GiCrossedSwords } from "react-icons/gi"; //War
import { GiWesternHat } from "react-icons/gi"; //Western

// Map genre IDs to icon components
const genreIconMap = {
  28: GiHighPunch, // Action
  12: GiDuffelBag, // Adventure
  16: GrCubes, // Animation
  35: MdTheaterComedy, // Comedy
  80: FaGun, // Crime
  99: MdOutlineMissedVideoCall, // Documentary
  18: GiDramaMasks, // Drama
  10751: MdOutlineFamilyRestroom, // Family
  14: FaFantasyFlightGames, // Fantasy
  36: MdHistoryEdu, // History
  27: GiGhost, // Horror
  10402: MdLibraryMusic, // Music
  9648: PiDetectiveFill, // Mystery
  10749: GiLovers, // Romance
  878: IoRocketOutline, // Science Fiction
  10770: PiTelevisionSimple, // TV Movies
  53: SiDarkreader, // Thriller
  10752: GiCrossedSwords, // War
  37: GiWesternHat // Western
};

// Define the IconRenderer component
const IconRenderer = ({ icon }) => {
  const IconComponent = genreIconMap[icon]; // Get the corresponding icon component based on the provided genre ID
  return IconComponent ? <IconComponent className="text-xl ssm:text-lg" /> : null; // Render the icon component if it exists
};

export default IconRenderer; // Export the IconRenderer component

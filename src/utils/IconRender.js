import React from 'react';

// For Movie Genre
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


// For TV Genre
import { GiSwordman } from "react-icons/gi"; // Action & Adventure
import { Gi3DGlasses } from "react-icons/gi"; // Animation
import { FaRegLaughWink } from "react-icons/fa"; // Comedy
import { GiWaterGun } from "react-icons/gi"; // Crime
import { BsPersonVideo2 } from "react-icons/bs"; // Documentary
import { MdTheaters } from "react-icons/md"; // Drama
import { MdFamilyRestroom } from "react-icons/md"; // Family
import { GiKidSlide } from "react-icons/gi"; // Kids
import { GiSecretBook } from "react-icons/gi"; // Mystery
import { TiNews } from "react-icons/ti"; // News
import { MdVisibility } from "react-icons/md"; // Reality
import { GiMadScientist } from "react-icons/gi"; // sci-fi & Fantasy
import { FaSoap } from "react-icons/fa"; // Soap
import { RiKakaoTalkFill } from "react-icons/ri"; // Talk
import { MdHowToVote } from "react-icons/md"; // War && Politics
import { FaHatCowboy } from "react-icons/fa"; // Western

// Movie Icons
const MovieiconComponents = [
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

// TV Show Icons
const TVIconComponents = [
  GiSwordman,          // Action & Adventure
  Gi3DGlasses,         // Animation
  FaRegLaughWink,      // Comedy
  GiWaterGun,          // Crime
  BsPersonVideo2,      // Documentary
  MdTheaters,          // Drama
  MdFamilyRestroom,    // Family
  GiKidSlide,          // Kids
  GiSecretBook,        // Mystery
  TiNews,              // News
  MdVisibility,        // Reality
  GiMadScientist,      // Sci-Fi & Fantasy
  FaSoap,              // Soap
  RiKakaoTalkFill,     // Talk
  MdHowToVote,         // War & Politics
  FaHatCowboy          // Western
];

const IconRenderer = ({ iconIndex, use }) => {

  // Conditional Rendering for Movie and TV Show Icons
  const IconComponent = (use === 'movie_genre_') ? MovieiconComponents[iconIndex] : TVIconComponents[iconIndex] ;
  return IconComponent ? <IconComponent className="text-xl" /> : null;
};

export default IconRenderer;
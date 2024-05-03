import useAuthentication from "../utils/useAuthentication";
import SuggestionButton from "./SuggestionButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const HeaderAndSideBar = () => {
  // State for toggling sidebar visibility
  const [show, setShow] = useState(false);

  // Custom hook for handling authentication
  useAuthentication();

  // Rendering the Component
  return (
    <div className='relative'>
      {/* Toast notification container */}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Header component */}
      <Header show={show} setShow={setShow} />
      {/* Sidebar component */}
      <SideBar show={show} setShow={setShow} />
      {/* SuggestionButton component */}
      <SuggestionButton />
    </div>
  )
};

export default HeaderAndSideBar;

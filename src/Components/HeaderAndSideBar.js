import { useState } from "react";
import useAuthentication from "../utils/useAuthentication";
import Header from "./Header";
import SideBar from "./SideBar";
import SuggestionButton from "./SuggestionButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeaderAndSideBar = () => {
  const [show, setShow] = useState(false);

  // Authentication
  useAuthentication();

  // Rendering the Component
  return (
    <div className='relative'>
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
      <Header show={show} setShow={setShow} />
      <SideBar show={show} setShow={setShow} />
      <SuggestionButton />
    </div>
  )
}

export default HeaderAndSideBar;
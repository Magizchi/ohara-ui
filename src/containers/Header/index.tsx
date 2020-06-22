//lib
//context
import Routes from "constants/Routes";
import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  // const { cookie, setCookie } = useContext(CookiesContext);

  // const notify = () => {
  //   toast.info("Disconnected !", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  //   Cookies.remove("token");
  //   setCookie("");
  // };

  return (
    <>
      <header className="flex items-center justify-center w-full bg-darkblue-500">
        <div className="container flex items-center justify-between w-full">
          <h1>
            <Link
              to={Routes.HOME_PAGE}
              className="hidden w-full text-4xl text-orange-500 sm:block"
            >
              MYANIMELIST
            </Link>
            <Link
              to={Routes.HOME_PAGE}
              className="w-full text-4xl text-orange-500 sm:hidden"
            >
              ML
            </Link>
          </h1>
          <ToastContainer
            enableMultiContainer
            position={toast.POSITION.TOP_CENTER}
          />
          <div>
            <a
              href="#anime"
              className="mr-5 font-bold text-center text-orange-600 bg-transparent border-b-2 border-transparent hover:border-orange-500"
            >
              Anime
            </a>
            <a
              href="#manga"
              className="mr-5 font-bold text-center text-orange-600 bg-transparent border-b-2 border-transparent hover:border-orange-500"
            >
              Manga
            </a>
          </div>
          {/* {cookie ? (
            <BtnProfile func={notify}></BtnProfile>
          ) : (
            <div className="flex m-3">
              <Button link={Routes.LOGIN} name="LOGIN" classNames="" />
              <Button link={Routes.SIGNIN} name="SIGNUP" classNames="" />
            </div>
          )} */}
        </div>
      </header>
    </>
  );
};

export default Header;

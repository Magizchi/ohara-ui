//Components
import Input from "components/molecules/Input";
//Constant
import API from "constants/API";
//Routes
import Routes from "constants/Routes";
// import "containers/Header/node_modules/react-toastify/dist/ReactToastify.css";
//Context
import { CookiesContext } from "contexts/Cookies";
import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
interface Logs {
  pseudo: string;
  password: string;
}

const MainHome = () => {
  const { setCookie } = useContext(CookiesContext);
  const PATH = process.env.REACT_APP_PATH;
  const history = useHistory();

  const successNotification = () =>
    toast.success("Connected !", {
      position: toast.POSITION.TOP_CENTER,
    });

  const errorNotification = (msg: string) =>
    toast.error(`Error: ${msg} !"`, {
      position: toast.POSITION.TOP_LEFT,
    });

  return (
    <main
      className="flex items-center justify-center h-full"
      style={{ backgroundColor: "rgba(255,255,255, 0.2)" }}
    >
      <Formik
        initialValues={{
          pseudo: "azerty",
          password: "azerty",
        }}
        onSubmit={(values: Logs) => {
          fetch(PATH + API.LOGIN, {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(values),
          })
            .then((data) => {
              if (data.status === 200) {
                successNotification();
                return data.json();
              } else {
                errorNotification(data.statusText);
                return null;
              }
            })
            .then((res) => {
              console.log("res", res);
              Cookies.set("token", res.token);
              setCookie(res.token);
              return history.push(Routes.HOME);
            })
            .catch((err) => err);
        }}
      >
        {(props) => (
          <section
            className="flex justify-center rounded-lg"
            style={{ backgroundColor: "rgba(10,10,10,0.5)" }}
          >
            <div className="flex flex-col items-center justify-center w-1/3 h-auto p-10 rounded-lg">
              <Form>
                <h1
                  style={{ fontFamily: "Pacifico" }}
                  className="text-4xl text-orange-500"
                >
                  Login
                </h1>
                <div className="flex flex-col">
                  <Input name="pseudo" type="text" label="Pseudo" />
                  <Input name="password" type="password" label="Password" />
                  <button
                    style={{ outlineStyle: "none" }}
                    className="flex justify-center w-24 p-2 m-2 ml-6 font-bold text-white bg-orange-500 border-2 border-orange-500 rounded-full cursor-pointer hover:text-indigo-800 hover:no-underline hover:text-black hover:bg-transparent "
                    type="submit"
                  >
                    LOGIN
                  </button>
                </div>
              </Form>
            </div>
          </section>
        )}
      </Formik>
    </main>
  );
};

export default MainHome;

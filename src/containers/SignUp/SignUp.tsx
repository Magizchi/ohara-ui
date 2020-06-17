import React from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
//Compoenents
import Input from "components/molecules/Input";
//Context
//constant
import API from "constants/API";
//Models
import Registration from "models/Registration ";

const SignUp = () => {
  const history = useHistory();
  const PATH = process.env.REACT_APP_PATH;

  const successNotification = () =>
    toast.success("Success, Registred !", {
      position: toast.POSITION.TOP_CENTER
    });
  const errorNotification = () =>
    toast.error("Error: Wrong password or Pseudo !", {
      position: toast.POSITION.TOP_LEFT
    });

  const submitNewUser = (values: Registration) => {
    fetch(PATH + API.SIGNIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    }).then(res => {
      if (res.status === 200) {
        successNotification();
        return history.push("/login");
      } else {
        errorNotification();
        return null;
      }
    });
  };

  return (
    <main className="h-full flex justify-center items-center flex-col bg-gray-800">
      <Formik
        initialValues={{
          email: "test1@gmail.com",
          password: "azerty",
          pseudo: "azerty"
        }}
        onSubmit={(values: Registration) => {
          submitNewUser(values);
        }}
      >
        {props => (
          <section className="flex justify-center items-center w-full h-full">
            <div
              // style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
              className="flex justify-center items-center flex-col w-1/3 h-auto rounded-lg p-10"
            >
              <Form>
                <h1
                  style={{ fontFamily: "Pacifico" }}
                  className="p-2 text-4xl text-orange-500"
                >
                  Sign In
                </h1>
                <div className="flex flex-col">
                  <Input name="email" type="email" label="Email" />
                  <Input name="pseudo" type="text" label="Pseudo" />
                  <Input name="password" type="password" label="Password" />
                </div>
                <button
                  style={{ outlineStyle: "none" }}
                  className="flex justify-center w-24 m-2 p-2 ml-6 border-2 border-orange-500 bg-orange-500 hover:text-indigo-800 rounded-full hover:text-indigo-900 hover:bg-white cursor-pointer text-white font-bold "
                  type="submit"
                >
                  SIGN IN
                </button>
              </Form>
            </div>
          </section>
        )}
      </Formik>
    </main>
  );
};

export default SignUp;

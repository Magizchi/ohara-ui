import React, { useState } from "react";
import Cookies from "js-cookie";

interface ApplyCookies {
  cookie: string;
  setCookie: Function;
}

interface children {
  children: any;
}

export const CookiesContext = React.createContext<ApplyCookies>({
  cookie: "",
  setCookie: () => {}
});

export const Authentication = ({ children }: children) => {
  const [cookie, setCookie] = useState<string>(Cookies.get("token")!);
  return (
    <CookiesContext.Provider value={{ cookie, setCookie }}>
      {children}
    </CookiesContext.Provider>
  );
};

import React from "react";
import ProfilIcon from "components/atoms/ProfilIcon";

const BtnProfile = (props: { func: () => void }) => (
  <button onClick={() => props.func()}>
    <ProfilIcon />
  </button>
);

export default BtnProfile;

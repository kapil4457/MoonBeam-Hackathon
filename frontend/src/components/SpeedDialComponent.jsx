import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Person3Icon from "@mui/icons-material/Person3";
import { NavLink } from "react-router-dom";

const speedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation Speed Dial"
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
      }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        icon={
          <NavLink
            to="/account"
            activeClassName=""
            style={{ textDecoration: "none" }}
          >
            <Person3Icon />
          </NavLink>
        }
        tooltipTitle="Acount"
      />

      <SpeedDialAction
        icon={
          <NavLink
            to="/setting"
            activeClassName="none"
            style={{ textDecoration: "none" }}
          >
            <SettingsIcon />
          </NavLink>
        }
        tooltipTitle="Settings"
      />
    </SpeedDial>
  );
};

export default speedDial;

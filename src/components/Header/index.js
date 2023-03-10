import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";

import * as C from "./styles";

const header = () => {
  return (
    <C.Header>
      <DehazeIcon />
      <C.div>
        <div>
          <C.label>Olá Fred, você está neste endereço?</C.label>
          <C.label>
            <RoomOutlinedIcon />
            Av. Leopoldinho de Oliveira <ArrowDropDownIcon />
          </C.label>
        </div>
      </C.div>
    </C.Header>
  );
};

export default header;

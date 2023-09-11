import React, { Fragment, useState } from "react";
import "./Header.css"
import { SpeedDial,SpeedDialAction } from "@material-ui/lab";

import { BiSolidDashboard } from "react-icons/bi";


function UserOptions({user}){
    const [open,setOpen]=useState(false)
    
    return <Fragment>
        <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={()=>setOpen(false)}
        onOpen={()=>setOpen(true)}
        open={open}
        direction="down"
        icon={
            <img 
            className="speedDialIcon"
            src={user.avatar.url?user.avatar.url:"./Profile.png"}
            alt="Profile"/>
            }
        
        >
            <SpeedDialAction icon={<BiSolidDashboard/>} tooltipTitle="Dashboard"/>
            <SpeedDialAction icon={<BiSolidDashboard/>} tooltipTitle="Dashboard"/>
            <SpeedDialAction icon={<BiSolidDashboard/>} tooltipTitle="Dashboard"/>
        </SpeedDial>
    </Fragment>
}

export default UserOptions
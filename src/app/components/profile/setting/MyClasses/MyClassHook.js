import React from "react";
import { useState } from "react";

const MyClassHook = () => {
  const [openCreateMeetingDialog, setOpenCreateMeetingDialog] = useState(false);
  return {
    openCreateMeetingDialog,

    //action
    setOpenCreateMeetingDialog,
  };
};

export default MyClassHook;

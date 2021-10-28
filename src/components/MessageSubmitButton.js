import React from "react";
import { IconButton } from "@material-ui/core";
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { pushMessage } from "../firebase";
const MessageSubmitButton = ({name,setText,text}) => {
  return (
    <IconButton disabled={text === ''} onClick={() =>{
        pushMessage({name,text});
        setText('')
    }}>
        <SendTwoToneIcon/>
    </IconButton>
  );
};
 export default MessageSubmitButton;
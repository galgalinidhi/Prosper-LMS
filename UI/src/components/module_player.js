import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper,Button } from '@material-ui/core';
import ReactPlayer from 'react-player';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  paper: {
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "hidden"
  },
}));

// export default function Module(props) {
//   const classes = useStyles();

//   return(
//     <>
//       <div>

//         <ReactPlayer 
//           controls={true}
//           url={`http://149.165.153.133:8989/module/downloadModule/${props.videopath}`}
//           width="580px"
//         />
//       </div>
//     </>
//   );
// }
export default function Module() {
   

const Play = () =>{
    <ReactPlayer 
          controls={true}
          url={`http://149.165.153.133:8989/module/downloadModule/179`}
          width="580px"
        />
}
return(
    <Button onClick={Play}>
        play
    </Button>

)
}
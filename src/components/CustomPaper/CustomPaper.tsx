import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styles from "./CustomPaper.module.sass";

interface CustomPaperProps {
  name: string;
  content: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const CustomPaper: React.FC<CustomPaperProps> = (props) => {
  return (
    <Paper elevation={8} className={styles.Paper}>
      <props.Icon />
      <Typography variant="h6" align="center">
        {props.name}
      </Typography>
      <Typography variant="body2">{props.content}</Typography>
    </Paper>
  );
};

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import styles from "./CustomCard.module.sass";

interface ITag {
  id: number;
  name: string;
}

interface CustomCardProps {
  id: number;
  ImgUrl: string;
  title: string;
  content: string;
  tags: ITag[];
  handleClick: (key: string) => void;
}

interface IChipsProps {
  chips: ITag[];
}

const Chips: React.FC<IChipsProps> = (props) => {
  return (
    <div className={styles.Chips}>
      {props.chips.map((chip) => (
        <Chip
          label={chip.name}
          variant="outlined"
          sx={{ marginBottom: "10px", marginRight: "5px" }}
        />
      ))}
    </div>
  );
};

export const CustomCard: React.FC<CustomCardProps> = (props) => {
  const handleClickImage = (event: any) => {
    props.handleClick(props.ImgUrl);
  };
  return (
    <Card className={styles.Card}>
      <div className={styles.ContainerCardMedia} onClick={handleClickImage}>
        <CardMedia
          component="img"
          alt="green iguana"
          image={props.ImgUrl}
          className={styles.CardImage}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.title}
        </Typography>
        <Chips chips={props.tags} />
        <Typography variant="body2">{props.content}</Typography>
      </CardContent>
      <CardActions className={styles.CardActions}>
        <Button size="small" variant={"outlined"}>
          Github Repo
        </Button>
      </CardActions>
    </Card>
  );
};

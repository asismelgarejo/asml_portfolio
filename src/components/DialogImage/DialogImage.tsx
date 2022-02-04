import { useState, forwardRef, useImperativeHandle, Ref } from "react";

import { ObjectRef, IDialogImage } from "./DialogImage.type";
import { Close as CloseCircleIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  CardMedia,
  DialogTitle,
  IconButton,
} from "@mui/material";

import styles from "./DialogImage.module.sass";

export const DialogImage: React.FC<IDialogImage> = forwardRef(
  (props, ref: Ref<ObjectRef>) => {
    const [open, setOpen] = useState(false);
    const [src, setSrc] = useState("");

    useImperativeHandle(ref, () => ({
      showDialog(imgUrl: string) {
        setOpen(true);
        setSrc(imgUrl);
      },
    }));

    const handleClose = () => {
      setOpen(false);
    };
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "588px",
            borderRadius: "10px !important",
            boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.25);",
          },
        }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <IconButton onClick={handleClose}>
            <CloseCircleIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className={styles.ContainerActions}>
          <CardMedia
            component="img"
            alt="image"
            image={src}
            className={styles.CardImage}
          />
        </DialogContent>
      </Dialog>
    );
  }
);

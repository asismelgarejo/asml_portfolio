import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { $SOCIAL_NETWORKS } from "./SocialNetworks";
import styles from "./Footer.module.sass";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.primary.main,
}));
const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#fff" : "black",
}));
const StyledDivider = styled(Divider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#fff" : "black",
  width: "100%",
}));
export const Footer = () => {
  return (
    <StyledBox className={styles.Footer}>
      <StyledTypography variant={"h6"} align="center">
        Redes sociales
      </StyledTypography>
      <div className={styles.SocialNetworks}>
        {$SOCIAL_NETWORKS.map(({ Icon }) => (
          <Icon className={styles.Icon} />
        ))}
      </div>
      <StyledDivider />
      <br />
      <br />
      <StyledTypography variant={"caption"} align="center">
        Asis Melgarejo&ensp;&copy;&ensp;2022
      </StyledTypography>
    </StyledBox>
  );
};

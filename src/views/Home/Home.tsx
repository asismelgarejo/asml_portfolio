import React, { useRef } from "react";
import { Layout } from "../../components/Layout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";
import { CustomCard } from "../../components/CustomCard";
import { $SKILLS } from "./Skills";
import MainImage from "./main_img1.jpg";
import CMSFormData from "../../assets/cms_formdata.png";
import { CustomPaper } from "./../../components/CustomPaper";
import { CustomTabs } from "./../../components/CustomTabs";
import { DialogImage, SnackRef } from "./../../components/DialogImage";

import styles from "./Home.module.sass";

export const CardHome = () => {
  return (
    <Paper className={styles.CardHome}>
      <CardMedia
        component="img"
        height="500"
        image={MainImage}
        alt="green iguana"
        sx={{ width: "500px" }}
      />
      <CardContent className={styles.CardContent}>
        <Typography gutterBottom variant="h2" component="div">
          Hi, I'm Asis and I'm a Fullstack Junior Developer
        </Typography>
        <Typography variant="h5" component={"p"}>
          Tengo más de 1 año de experiencia laboral en el entorno empresarial
          desarrollando aplicaciones webs y móviles .
        </Typography>
      </CardContent>
    </Paper>
  );
};

const $TAGS = [
  {
    id: 1,
    name: "Typescript",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "Laravel",
  },
  {
    id: 4,
    name: "MySQL",
  },
];

const $PROJECTS = [
  {
    id: 1,
    ImgUrl: CMSFormData,
    title: "CMS para blog de empresa minera",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed euismod ex. ",
    tags: $TAGS,
  },
  {
    id: 2,
    ImgUrl: CMSFormData,
    title: "CMS para blog de empresa minera",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed euismod ex. ",
    tags: $TAGS,
  },
];

export const Home = () => {
  const dialogImageRef = useRef<SnackRef>(null);
  const handleClickImage = (imgUrl: string) => {
    dialogImageRef.current && dialogImageRef.current.showDialog(imgUrl);
  };
  return (
    <Layout>
      <CardHome />
      <section className={styles.HomeSection}>
        <Typography
          variant="h4"
          component={"div"}
          color="text.secondary"
          align="center"
        >
          Conoce algunos de mis trabajos
        </Typography>
        <br />
        <br />
        <div className={styles.ContainerCards}>
          {$PROJECTS.map((project) => (
            <CustomCard {...project} handleClick={handleClickImage} />
          ))}
        </div>
        <DialogImage ref={dialogImageRef} />
      </section>
      <section className={styles.HomeSection}>
        <Typography
          variant="h4"
          component={"div"}
          color="text.secondary"
          align="center"
        >
          Conoce mis habilidades
        </Typography>
        <br />
        <br />
        <CustomTabs
          tabs={[
            "Backend",
            "Frontend",
            "DevOps",
            "Desarrollo móvil",
            "Bases de datos",
          ]}
          tabsPanels={[
            <div className={styles.ContainerSkills}>
              {$SKILLS.map((skill) => (
                <CustomPaper
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
            <div className={styles.ContainerSkills}>
              {$SKILLS.map((skill) => (
                <CustomPaper
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
            <div className={styles.ContainerSkills}>
              {$SKILLS.map((skill) => (
                <CustomPaper
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
            <div className={styles.ContainerSkills}>
              {$SKILLS.map((skill) => (
                <CustomPaper
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
            <div className={styles.ContainerSkills}>
              {$SKILLS.map((skill) => (
                <CustomPaper
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
          ]}
        />
      </section>
    </Layout>
  );
};

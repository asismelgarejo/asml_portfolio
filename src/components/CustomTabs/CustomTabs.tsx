import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./CustomTabs.module.sass";

interface CustomTabsProps {
  tabs: string[];
  tabsPanels: React.ReactNode[];
}

export const CustomTabs: React.FC<CustomTabsProps> = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className={styles.ContainerTabs}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {props.tabs.map((tab) => (
            <Tab label={tab} />
          ))}
        </Tabs>
      </Box>
      <div className={styles.ContainerTabsPanel}>
        {props.tabsPanels.map((TabPanel, index) => value === index && TabPanel)}
      </div>
    </div>
  );
};

import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tabs } from "@mui/material";

export default function CartypeTabs({ data }) {
  console.log(data);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ display: "flex", justifyContent: "center" }}> {/* ✅ Centers Tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            display: "flex",
            justifyContent: "center", // ✅ Centers Tabs
            "& .MuiTabs-scroller": {
              display: "flex",
              justifyContent: "center", // ✅ Ensures tabs are centered
            },
          }}
        >
          {data.map((item, i) => (
            <Tab
              key={i}
              label={item.label}
              value={i}
              sx={{
                textTransform: "capitalize",
                mx: 2, // ✅ Adds margin to space out tabs evenly
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                fontSize: { sm: 16, md: 16, lg: 18 },
                color: value === i ? "white" : "white",
                backgroundColor: value === i ? "#d70030" : "black",
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Box>
        <TabPanel value={value}>{data[value]?.panelData}</TabPanel>
      </Box>
    </TabContext>
  );
}

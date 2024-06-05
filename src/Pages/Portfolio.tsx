import { useState } from "react";
import { Box, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";

const portfolioData = [
  {
    category: "Web Development",
    items: [
      {
        id: 1,
        title: "Project 1",
        description: "This is a detailed description of Project 1.",
      },
      {
        id: 2,
        title: "Project 2",
        description: "This is a detailed description of Project 2.",
      },
    ],
  },
  {
    category: "Mobile Apps",
    items: [
      {
        id: 3,
        title: "App 1",
        description: "This is a detailed description of App 1.",
      },
      {
        id: 4,
        title: "App 2",
        description: "This is a detailed description of App 2.",
      },
    ],
  },
  {
    category: "Artificial Intelligence",
    items: [
      {
        id: 5,
        title: "AI Project 1",
        description: "This is a detailed description of AI Project 1.",
      },
      {
        id: 6,
        title: "AI Project 2",
        description: "This is a detailed description of AI Project 2.",
      },
    ],
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Stack
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" color="text.primary" sx={{ mt: 4 }}>
        Portfolio
      </Typography>
      <Tabs value={activeTab} onChange={handleChange} centered>
        {portfolioData.map((section, index) => (
          <Tab label={section.category} key={index} />
        ))}
      </Tabs>
      <Paper elevation={3} sx={{ width: "80%", padding: 3, mt: 2 }}>
        <Stack spacing={2}>
          {portfolioData[activeTab].items.map((item) => (
            <Box key={item.id}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Portfolio;

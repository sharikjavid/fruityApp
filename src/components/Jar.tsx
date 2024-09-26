import React from "react";
import { FruitType } from "../types";
import PieChartDisplay from "./PieChartDisplay";
import { Box, Typography, List, ListItemText, Divider } from "@mui/material";
import { fruitEmojis, DEFAULT_FRUIT_EMOJI } from "../utils/fruitEmojis";

interface Props {
  jar: FruitType[];
}

const Jar: React.FC<Props> = ({ jar }) => {
  const totalCalories = jar.reduce(
    (total, fruit) => total + fruit.nutritions.calories,
    0
  );

  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#fafafa",
      }}
    >
      <Typography variant="h6" gutterBottom>
        🍇 Fruit Jar
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          🍰 Total Calories: {totalCalories}
        </Typography>
        <PieChartDisplay jar={jar} />
      </Box>
    </Box>
  );
};

export default Jar;

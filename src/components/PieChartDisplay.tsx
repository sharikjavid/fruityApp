// src/components/PieChartDisplay.tsx

import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { SelectChangeEvent } from "@mui/material/Select";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FruitType } from "../types";

interface Props {
  jar: FruitType[];
}

const COLORS = [
  "#FF5733", // Red Orange
  "#33A1FF", // Sky Blue
  "#33FF57", // Lime Green
  "#A133FF", // Purple
  "#FFB300", // Amber
  "#00B3E6", // Cerulean
  "#4CAF50", // Green
  "#9C27B0", // Deep Purple
  "#FF9800", // Orange
  "#3F51B5", // Indigo
  "#2196F3", // Blue
  "#009688", // Teal
  "#607D8B", // Blue Grey
  "#8BC34A", // Light Green
  "#FF5722", // Deep Orange
  "#00BCD4", // Cyan
  "#673AB7", // Deep Purple
  "#03A9F4", // Light Blue
  "#536DFE", // Indigo Accent
  "#448AFF", // Blue Accent
  "#40C4FF", // Light Blue Accent
  "#18FFFF", // Cyan Accent
  "#64FFDA", // Teal Accent
  "#69F0AE", // Green Accent
  "#B2FF59", // Light Green Accent
  "#FFAB40", // Orange Accent
  "#FF6E40", // Deep Orange Accent
  "#EA80FC", // Purple Accent
  "#B388FF", // Deep Purple Accent
  "#8C9EFF", // Indigo Accent
  "#82B1FF", // Blue Accent
  "#FFD740", // Amber Accent
  "#FF4081", // Pink Accent
  "#FF5252", // Red Accent
  "#FF4081", // Pink Accent
  "#7C4DFF", // Deep Purple Accent
  "#448AFF", // Blue Accent
  "#64FFDA", // Teal Accent
  "#69F0AE", // Green Accent
  "#18FFFF", // Cyan Accent
  "#FFD740", // Amber Accent
  "#FFAB40", // Orange Accent
  "#FF6E40", // Deep Orange Accent
  "#EA80FC", // Purple Accent
];

const getColorForFruit = (name: string, colors: string[]): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }
  return colors[hash % colors.length];
};

const PieChartDisplay: React.FC<Props> = ({ jar }) => {
  const [selectedNutrient, setSelectedNutrient] = useState<string>("calories");

  const aggregatedData = useMemo(() => {
    const aggregation: Record<string, { value: number; count: number }> = {};

    jar.forEach((fruit) => {
      const nutrientValue =
        fruit.nutritions[selectedNutrient as keyof typeof fruit.nutritions] ||
        0;
      if (aggregation[fruit.name]) {
        aggregation[fruit.name].value += nutrientValue;
        aggregation[fruit.name].count += 1;
      } else {
        aggregation[fruit.name] = { value: nutrientValue, count: 1 };
      }
    });

    return Object.entries(aggregation).map(([name, data]) => ({
      name,
      value: data.value,
      count: data.count,
    }));
  }, [jar, selectedNutrient]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedNutrient(event.target.value as string);
  };

  return (
    <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Fruit Jar Nutritional Pie Chart
        </Typography>
        <FormControl
          variant="outlined"
          size="small"
          sx={{ minWidth: 200, mb: 2 }}
        >
          <InputLabel id="nutrient-select-label">Select Nutrient</InputLabel>
          <Select
            labelId="nutrient-select-label"
            id="nutrient-select"
            value={selectedNutrient}
            onChange={handleChange}
            label="Select Nutrient"
          >
            <MenuItem value="calories">Calories</MenuItem>
            <MenuItem value="fat">Fat</MenuItem>
            <MenuItem value="sugar">Sugar</MenuItem>
            <MenuItem value="carbohydrates">Carbohydrates</MenuItem>
            <MenuItem value="protein">Protein</MenuItem>
          </Select>
        </FormControl>
        {aggregatedData.length > 0 ? (
          <>
            <ResponsiveContainer width="70%" height={400}>
              <PieChart>
                <Pie
                  data={aggregatedData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {aggregatedData.map((entry) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={getColorForFruit(entry.name, COLORS)}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number, name: string) => [
                    `${value} cal`,
                    name,
                  ]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Fruit Counts
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Fruit Name</TableCell>
                    <TableCell>Count</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {aggregatedData.map((fruit) => (
                    <TableRow key={fruit.name}>
                      <TableCell>{fruit.name}</TableCell>
                      <TableCell>{fruit.count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </>
        ) : (
          <Typography variant="body1">No data available.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PieChartDisplay;

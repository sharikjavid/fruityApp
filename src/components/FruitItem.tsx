// src/components/FruitItem.tsx

import React from "react";
import { FruitType } from "../types";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  TableRow,
  TableCell,
  Typography,
  Box,
  Tooltip,
} from "@mui/material";
import { fruitEmojis, DEFAULT_FRUIT_EMOJI } from "../utils/fruitEmojis";

interface Props {
  fruit: FruitType;
  addToJar: (fruit: FruitType) => void;
  view: "list" | "table";
}

const FruitItem: React.FC<Props> = ({ fruit, addToJar, view }) => {
  const calories = fruit.nutritions.calories;
  const emoji = fruitEmojis[fruit.name] || DEFAULT_FRUIT_EMOJI;

  if (view === "list") {
    return (
      <ListItem
        secondaryAction={
          <Button
            variant="contained"
            color="primary"
            onClick={() => addToJar(fruit)}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
            }}
            aria-label={`Add ${fruit.name} to jar`}
          >
            Add
          </Button>
        }
        sx={{
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
          borderRadius: "8px",
          mb: 1,
        }}
      >
        <ListItemAvatar>
          <Tooltip title={fruit.name} arrow>
            <Avatar
              sx={{
                bgcolor: "transparent",
                fontSize: "1.5rem",
              }}
            >
              {emoji}
            </Avatar>
          </Tooltip>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="subtitle1" fontWeight="bold">
              {fruit.name}
            </Typography>
          }
          secondary={
            <Typography variant="body2" color="text.secondary">
              {calories} calories
            </Typography>
          }
        />
      </ListItem>
    );
  }

  return (
    <TableRow
      hover
      sx={{
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
        borderRadius: "8px",
      }}
    >
      <TableCell>
        <Box display="flex" alignItems="center">
          <Tooltip title={fruit.name} arrow>
            <Avatar
              sx={{
                bgcolor: "transparent",
                fontSize: "1.5rem",
                mr: 1,
              }}
            >
              {emoji}
            </Avatar>
          </Tooltip>
          <Typography variant="subtitle1" fontWeight="bold">
            {fruit.name}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{fruit.family}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{fruit.order}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{fruit.genus}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{calories}</Typography>
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToJar(fruit)}
          sx={{
            textTransform: "none",
            borderRadius: "8px",
          }}
          aria-label={`Add ${fruit.name} to jar`}
        >
          Add
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default FruitItem;

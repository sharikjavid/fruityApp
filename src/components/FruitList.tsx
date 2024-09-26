import React from "react";
import FruitItem from "./FruitItem";
import { FruitType } from "../types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  fruits: FruitType[];
  groupBy: string;
  view: "list" | "table";
  addToJar: (fruit: FruitType) => void;
  addGroupToJar: (groupFruits: FruitType[]) => void;
}

const FruitList: React.FC<Props> = ({
  fruits,
  groupBy,
  view,
  addToJar,
  addGroupToJar,
}) => {
  const groupedFruits = React.useMemo(() => {
    if (groupBy === "None") {
      return { All: fruits };
    }
    return fruits.reduce((groups: Record<string, FruitType[]>, fruit) => {
      const key = fruit[groupBy.toLowerCase() as keyof FruitType] as string;
      if (!groups[key]) groups[key] = [];
      groups[key].push(fruit);
      return groups;
    }, {});
  }, [fruits, groupBy]);

  return (
    <div>
      {Object.keys(groupedFruits).map((group) => (
        <div key={group}>
          {groupBy !== "None" ? (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{group}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent accordion toggle on button click
                    addGroupToJar(groupedFruits[group]);
                  }}
                  sx={{ marginLeft: "auto" }}
                >
                  Add All to Jar
                </Button>
              </AccordionSummary>
              <AccordionDetails>
                {view === "list" ? (
                  <List>
                    {groupedFruits[group].map((fruit: FruitType) => (
                      <FruitItem
                        key={fruit.name}
                        fruit={fruit}
                        addToJar={addToJar}
                        view={view}
                      />
                    ))}
                  </List>
                ) : (
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Family</TableCell>
                          <TableCell>Order</TableCell>
                          <TableCell>Genus</TableCell>
                          <TableCell>Calories</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {groupedFruits[group].map((fruit: FruitType) => (
                          <FruitItem
                            key={fruit.name}
                            fruit={fruit}
                            addToJar={addToJar}
                            view={view}
                          />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </AccordionDetails>
            </Accordion>
          ) : (
            <>
              {view === "list" ? (
                <List>
                  {groupedFruits[group].map((fruit: FruitType) => (
                    <FruitItem
                      key={fruit.name}
                      fruit={fruit}
                      addToJar={addToJar}
                      view={view}
                    />
                  ))}
                </List>
              ) : (
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Family</TableCell>
                        <TableCell>Order</TableCell>
                        <TableCell>Genus</TableCell>
                        <TableCell>Calories</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {groupedFruits[group].map((fruit: FruitType) => (
                        <FruitItem
                          key={fruit.name}
                          fruit={fruit}
                          addToJar={addToJar}
                          view={view}
                        />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </>
          )}
          <Divider sx={{ margin: "20px 0" }} />
        </div>
      ))}
    </div>
  );
};

export default FruitList;

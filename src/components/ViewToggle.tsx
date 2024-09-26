// src/components/ViewToggle.tsx
import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import TableChartIcon from "@mui/icons-material/TableChart";

interface Props {
  view: "list" | "table";
  setView: (value: "list" | "table") => void;
}

const ViewToggle: React.FC<Props> = ({ view, setView }) => {
  return (
    <ButtonGroup variant="outlined" color="primary">
      <Button
        variant={view === "list" ? "contained" : "outlined"}
        onClick={() => setView("list")}
        startIcon={<ViewListIcon />}
      >
        List View
      </Button>
      <Button
        variant={view === "table" ? "contained" : "outlined"}
        onClick={() => setView("table")}
        startIcon={<TableChartIcon />}
      >
        Table View
      </Button>
    </ButtonGroup>
  );
};

export default ViewToggle;

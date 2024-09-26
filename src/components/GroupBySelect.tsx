import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ViewListIcon from "@mui/icons-material/ViewList";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface Props {
  groupBy: string;
  setGroupBy: (value: string) => void;
}

const options = [
  { value: "None", label: "None", icon: <ViewListIcon fontSize="small" /> },
  {
    value: "Family",
    label: "Family",
    icon: <FamilyRestroomIcon fontSize="small" />,
  },
  { value: "Order", label: "Order", icon: <ViewListIcon fontSize="small" /> },
  {
    value: "Genus",
    label: "Genus",
    icon: <NaturePeopleIcon fontSize="small" />,
  },
];

const GroupBySelect: React.FC<Props> = ({ groupBy, setGroupBy }) => {
  return (
    <FormControl
      variant="outlined"
      size="small"
      sx={{
        minWidth: 150,
        paddingRight: "20px",
        paddingBottom: "20px",
        "& .MuiInputBase-root": {
          height: "calc(1.5em + 14px)",
        },
        "& .MuiSelect-select": {
          paddingTop: "6px",
          paddingBottom: "6px",
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <InputLabel
        id="group-by-label"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <LayersIcon fontSize="small" sx={{ mr: 0.5 }} />
        Group by
      </InputLabel>
      <Select
        labelId="group-by-label"
        id="groupBy"
        value={groupBy}
        onChange={(e) => setGroupBy(e.target.value)}
        label={
          <>
            <LayersIcon fontSize="small" sx={{ mr: 0.5 }} />
            Group by
          </>
        }
        IconComponent={ArrowDropDownIcon}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{ paddingY: 0.5 }}
          >
            <ListItemIcon style={{ minWidth: 32 }}>{option.icon}</ListItemIcon>
            <Typography variant="inherit">{option.label}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GroupBySelect;

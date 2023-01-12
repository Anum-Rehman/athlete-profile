import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const sports = [
  "Golf",
  "Tennis",
  "Cricket",
  "Basketball",
  "Baseball",
  "American Football",
  "Aquatics",
  "Archery",
  "Automobile Racing",
  "Badminton",
  "Beach Volleyball",
  "Bobsleigh",
  "Body Building",
  "Boxing",
  "Cross Country Running",
  "Cross Country Skiing",
  "Curling",
  "Cycling",
  "Darts",
  "Decathlon",
  "Down Hill Skiing",
  "Equestrianism",
  "eSports",
  "Fencing",
  "Field Hockey",
  "Figure Skating",
  "Gymnastics",
  "Ice Hockey",
  "Martial Arts",
  "Mixed Martial Arts",
  "Modern Pentathlon",
  "Motorcycle Racing",
  "Netball",
  "Polo",
  "Racquetball",
  "Rowing",
  "Rugby",
  "Sailing",
  "Softball",
  "Shooting",
  "Skateboarding",
  "Skeet Shooting",
  "Skeleton",
  "Snow Boarding",
  "Soccer (Football)",
  "Squash",
  "Surfing",
  "Swimming",
  "Track and Field"
];

export default function MultipleSelectCheckmarks({ value, onChange, label }) {

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={value}
          onChange={onChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {sports.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Map } from "lucide-react";

type ActivitiesName = {
  id: number;
  city: string;
  map: string;
};

const activities: ActivitiesName[] = [
  { id: 1, city: "دبی", map: "امارات متحده عربی" },
  { id: 2, city: "استانبول", map: "ترکیه" },
  { id: 3, city: "کیش", map: "ایران" },
];

export default function DesktopNavActivities() {
  return (
    <Autocomplete
      disablePortal
      options={activities}
      sx={{ width: "100%" }}
      getOptionLabel={(option) => option.city}
      slotProps={{
        paper: {
          sx: {
            width: "350px",
            fontFamily: "inherit",
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="جستجوی شهر"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              fontFamily: "inherit",
              fontSize: "12px",
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li
          {...props}
          key={option.id}
          className="px-4! py-3! hover:bg-gray-50 "
        >
          <div className="flex items-center gap-4 w-full font-iransans">
            <Map size={20} />

            <div>
              <p className="text-[12px]! font-bold font-iransans">
                {option.city}
              </p>

              <p className="text-[11px]! text-gray-500 mt-1 font-iransans">
                {option.map}
              </p>
            </div>
          </div>
        </li>
      )}
    />
  );
}

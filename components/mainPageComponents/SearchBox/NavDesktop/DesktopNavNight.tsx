import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Map } from "lucide-react";

type Night = {
  nightHotel: string;
  date: string;
};
const night: Night[] = [
  { nightHotel: "1 شب", date: "(1405/05/04)" },
  { nightHotel: "2 شب", date: "(1405/05/05)" },
  { nightHotel: "3 شب", date: "(1405/05/06)" },
  { nightHotel: "4 شب", date: "(1405/05/07)" },
  { nightHotel: "5 شب", date: "(1405/05/08)" },
  { nightHotel: "6 شب", date: "(1405/05/09)" },
  { nightHotel: "7 شب", date: "(1405/05/10)" },
  { nightHotel: "8 شب", date: "(1405/05/11)" },
  { nightHotel: "9 شب", date: "(1405/05/12)" },
  { nightHotel: "10 شب", date: "(1405/05/13)" },
];

export default function DesktopNavNight() {
  return (
    <Autocomplete
      disablePortal
      options={night}
      sx={{ width: "100%" }}
      getOptionLabel={(option) => option.nightHotel}
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
          placeholder="به مدت"
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
          key={option.nightHotel}
          className="px-4! py-3! hover:bg-gray-50 "
        >
          <div className="flex items-center gap-4 w-full font-iransans">
            <Map size={20} />

            <div className="w-full flex justify-between items-center">
              <p className="text-[12px]! font-bold font-iransans">
                {option.nightHotel}
              </p>

              <p className="text-[11px]! text-gray-500 mt-1 font-iransans">
                {option.date}
              </p>
            </div>
          </div>
        </li>
      )}
    />
  );
}

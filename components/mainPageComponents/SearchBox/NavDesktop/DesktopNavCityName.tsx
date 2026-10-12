import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Map } from "lucide-react";
import cities from "@/data/cities.json";

type DesktopNavCityNameProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  dropdownWidth?: string;
  borderRadius?: string;
};

export default function DesktopNavCityName({
  placeholder,
  value,
  onChange,
  dropdownWidth = "auto",
  borderRadius = "",
}: DesktopNavCityNameProps) {
  return (
    <Autocomplete
      disablePortal
      options={cities}
      value={cities.find((city) => city.city === value) || null}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      sx={{ width: "100%" }}
      getOptionLabel={(option) => option.city}
      slotProps={{
        paper: {
          sx: {
            width: dropdownWidth,
            fontFamily: "inherit",
          },
        },
      }}
      onChange={(event, newValue) => {
        onChange?.(newValue?.city ?? "");
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius,
              fontFamily: "inherit",
              fontSize: "12px",
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option.id} className="px-4! py-3! hover:bg-gray-50">
          <div className="flex justify-between items-center w-full">
            {/* سمت راست */}
            <div className="flex items-center gap-4">
              <Map size={20} />

              <div>
                <p className="text-[12px]! font-bold">{option.city}</p>

                <p className="text-[11px]! text-gray-500 mt-1">{option.map}</p>
              </div>
            </div>

            {/* تخفیف */}
            <span
              className="
                text-[#53cc8b]
                bg-[#e7f8ef]
                rounded-[8px]
                px-3
                py-1
                text-[12px]
                min-w-16
                text-center
              "
            >
              {option.discount}
            </span>
          </div>
        </li>
      )}
    />
  );
}

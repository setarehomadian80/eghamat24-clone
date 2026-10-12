import React, { useState } from "react";
import { MobileNavCityName } from "../NavMobile/MobileNavCityName";

export default function CityNameSearchbox() {
  const [city, setCity] = useState("");

  return (
    <div>
      <MobileNavCityName
        placeholder="شهر یا هتل یا دسته بندی"
        searchPlaceholder="جستجوی شهر "
        title="شهر یا هتل یا دسته بندی"
        value={city}
        onChange={setCity}
      />
    </div>
  );
}

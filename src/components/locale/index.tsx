import { MenuItem, Select } from "@material-ui/core";
import React from "react";

import { SUPPORTED_LOCALES } from "../../constants/constants";
import { useStoreActions, useStoreState } from "../../hooks/store.hook";

const Locale = () => {
  const locale = useStoreState(state => state.locale.item);
  const setItem = useStoreActions(state => state.locale.setItem);

  function handleChange(
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) {
    typeof event.target.value === "string" && setItem(event.target.value);
  }

  return (
    <Select
      value={locale}
      onChange={handleChange}
      inputProps={{
        name: "locale",
        id: "locale"
      }}
    >
      {SUPPORTED_LOCALES.map(supportedLocale => (
        <MenuItem key={supportedLocale} value={supportedLocale}>
          {supportedLocale.toUpperCase()}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Locale;

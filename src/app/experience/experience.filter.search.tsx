"use client";
import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { debounce } from "lodash";

export type ExperienceFilterSearchProps = {
  value: string;
};
export function ExperienceFilterSearch(props: ExperienceFilterSearchProps) {
  const { value } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  //const [qsParams, setQsParams] = useQueryParams();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value]);
  const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e?.target?.value;
    //setQsParams({ search, page: "1" });
  };
  return (
    <TextField
      fullWidth
      onChange={debounce(updateSearchValue, 300)}
      placeholder="Search"
      inputRef={inputRef}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <span className="material-icons">search</span>
          </InputAdornment>
        ),
      }}
    />
  );
}

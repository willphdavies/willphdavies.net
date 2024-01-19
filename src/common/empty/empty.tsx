"use client";
import { Button, Typography } from "@mui/material";
import "./empty.scss";
import Link from "next/link";

export interface EmptyProps {
  name: string;
  link?: string;
}
export function Empty(props: EmptyProps) {
  const { name, link } = props;
  return (
    <div className="lib__empty">
      <div>
        <img src="/svg/no_results.svg" alt="no results" />
        <Typography variant="h5" color="primary">
          <span>
            Sorry, we couldnt find any <strong>{name}</strong> that match that
            criteria
          </span>
        </Typography>
        {link ? (
          <Button href={link} component={Link}>
            Reset
          </Button>
        ) : null}
      </div>
    </div>
  );
}

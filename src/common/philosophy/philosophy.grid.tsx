"use client";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Link from "next/link";
import { IPhilosophyModel } from "@/data";

export interface PhilosophyGridProps {
  items: IPhilosophyModel[];
}
export function PhilosophyGrid(props: PhilosophyGridProps) {
  const { items } = props;
  const getRows = (tile: IPhilosophyModel) => tile.rows;
  return (
    <div className="philosophy-grid">
      <ImageList>
        {items.map((tile) => (
          <ImageListItem key={tile.image} cols={1} rows={getRows(tile)}>
            <img src={`/${tile.image}`} alt={tile.title} loading="lazy" />
            <Link href={tile.link} title={tile.subtitle}>
              <ImageListItemBar
                title={tile.title}
                subtitle={<span>{tile.subtitle}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`}>
                    <span className="material-icons">info</span>
                  </IconButton>
                }
              />
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

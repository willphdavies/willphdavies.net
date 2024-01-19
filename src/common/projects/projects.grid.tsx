"use client";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { IProjectModel } from "@/data/entity";
export interface ProjectGridProps {
  items: IProjectModel[];
}
export function ProjectsGrid(props: ProjectGridProps) {
  const { items } = props;
  const getCols = (tile: IProjectModel) => tile.cols;
  const getRows = (tile: IProjectModel) => tile.rows;
  return (
    <div className="projects-grid">
      <ImageList rowHeight={400} gap={15}>
        {items.map((tile) => (
          <ImageListItem
            className="projects-grid__item"
            key={tile.image}
            cols={2}
            rows={1}
          >
            <img src={`/${tile.image}`} alt={tile.title} loading="lazy" />
            <a
              target="_blank"
              rel="noreferrer"
              href={tile.link}
              title={tile.subtitle}
            >
              <ImageListItemBar
                title={tile.title}
                subtitle={<span>{tile.subtitle}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`}>
                    <span className="material-icons">info</span>
                  </IconButton>
                }
              />
            </a>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

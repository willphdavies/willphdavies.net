"use client";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { IProjectModel } from "@/data/entity";
import { useWindowWidth } from "@/common/hooks/useWindowWidth";
export interface ProjectGridProps {
  items: IProjectModel[];
}
export function ProjectsGrid(props: ProjectGridProps) {
  const { items } = props;
  const width = useWindowWidth();
  const getCols = (tile: IProjectModel) => (width > 850 ? tile.cols || 1 : 2);
  const getRows = (tile: IProjectModel) => (width > 850 ? tile.rows || 1 : 1);
  return (
    <div className="projects-grid">
      <ImageList rowHeight={300} gap={15}>
        {items.map((tile) => (
          <ImageListItem
            key={tile.image}
            cols={getCols(tile)}
            rows={getRows(tile)}
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

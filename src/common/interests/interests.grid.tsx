"use client";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { useWindowWidth } from "@/common/hooks/useWindowWidth";
import { IInterestModel } from "@/data";
export interface InterestsGridProps {
  items: IInterestModel[];
}
export function InterestsGrid(props: InterestsGridProps) {
  const { items } = props;
  const width = useWindowWidth();
  const getCols = (tile: IInterestModel) => (width > 850 ? tile.cols || 1 : 2);
  const getRows = (item: IInterestModel) => (width > 850 ? item.rows || 1 : 1);
  return (
    <ImageList className={`interests-grid`}>
      {items.map((item) => (
        <ImageListItem
          key={item.image}
          cols={getCols(item)}
          rows={getRows(item)}
        >
          <img
            src={
              item.image.substring(0, 4) === "http"
                ? item.image
                : `/${item.image}`
            }
            alt={item.title}
          />
          <a
            target="_blank"
            rel="noreferrer"
            href={item.link}
            title={item.subtitle}
          >
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.subtitle}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`}>
                  <span className="material-icons">info</span>
                </IconButton>
              }
            />
          </a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

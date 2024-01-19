"use client";
import { Grid, Pagination, SvgIcon, Typography } from "@mui/material";
import { IExperienceModel } from "@/data/entity/experience.interface";
import { Empty } from "@/common/empty";
import { ExperienceCard } from "./experience.card";
import { useSearchParams } from "next/navigation";

export interface ExperienceGridProps {
  items: IExperienceModel[];
}
/**
 * Experience Grid Component - Layout for Experience Cards
 * @param props
 * @returns Grid Component & Pagination
 */
export function ExperienceGrid(props: ExperienceGridProps) {
  const { items } = props;
  const queryParams = useSearchParams();
  return (
    <div className="experience-grid">
      {items.length ? (
        <Grid className="experience-grid__grid" container spacing={3}>
          {items.map((item: IExperienceModel, index) => (
            <Grid item key={index} className="grid__item">
              <ExperienceCard item={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Empty name="Experiences" link="/experience" />
      )}
    </div>
  );
}

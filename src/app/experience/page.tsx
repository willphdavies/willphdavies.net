"use client";
import { ExperienceGrid } from "./experience.grid";
import "./experience.scss";
import { ExperienceFilter } from "./experience.filter";
import { useState } from "react";
import { experienceItems } from "@/data";
import { TemplatDefault } from "@/common";

/**
 * Experience View Component
 * @returns Wrapper for Experience sub-components (Grid and Filter)
 */
export default function Experience() {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <TemplatDefault mast={null} backgroundSrc="/experience.jpeg">
      <div
        className={`${showFilter ? "-filter" : "-no-filter"} view-experience`}
      >
        <ExperienceGrid items={experienceItems} />
        <ExperienceFilter
          onToggleVisibility={(val: boolean) => setShowFilter(val)}
          tags={[]}
        />
      </div>
    </TemplatDefault>
  );
}

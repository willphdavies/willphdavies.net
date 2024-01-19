"use client";
import { ExperienceGrid } from "./experience.grid";
import "./experience.scss";
import { ExperienceFilter } from "./experience.filter";
import { useState } from "react";
import { experienceItems } from "@/data";
import { uniq } from "lodash";

/**
 * Experience View Component
 * @returns Wrapper for Experience sub-components (Grid and Filter)
 */
export function Experiences() {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <div className={`${showFilter ? "-filter" : "-no-filter"} view-experience`}>
      <ExperienceGrid items={experienceItems} />
      <ExperienceFilter
        onToggleVisibility={(val: boolean) => setShowFilter(val)}
        tags={getTags()}
      />
    </div>
  );
  function getTags() {
    return uniq(
      experienceItems
        .map((item) => item.tags)
        .flat()
        .sort()
    );
  }
}

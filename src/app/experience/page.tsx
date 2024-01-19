"use client";
import { useState } from "react";
import { experienceItems } from "@/data";
import { TemplatDefault } from "@/common";
import { uniq } from "lodash";
import Experiences from "@/common/experiences/experience";

/**
 * Experience View Component
 * @returns Wrapper for Experience sub-components (Grid and Filter)
 */
export default function Experience() {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <TemplatDefault
      mast={
        <div>
          <h1>Professional Experience</h1>
        </div>
      }
      backgroundSrc="/experience.jpeg"
    >
      <Experiences />
    </TemplatDefault>
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

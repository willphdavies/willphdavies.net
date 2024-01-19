import { useState } from "react";
import { experienceItems } from "@/data";
import { TemplatDefault } from "@/common";
import { uniq } from "lodash";
import { Experiences } from "@/common/experiences";

/**
 * Experience View Component
 * @returns Wrapper for Experience sub-components (Grid and Filter)
 */
export default function Experience() {
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
}

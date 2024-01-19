import { interestItems } from "@/data";
import { InterestsGrid } from "./interests.grid";
import "./interests.scss";

export function Interests() {
  return (
    <div className={`view-interests`}>
      <InterestsGrid items={interestItems} />
    </div>
  );
}

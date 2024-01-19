import { PhilosophyGrid } from "./philosophy.grid";
import "./philosophy.scss";
import { philosophyItems } from "@/data";

export function Philosophy() {
  return (
    <div className="view-philosophy">
      <PhilosophyGrid items={philosophyItems} />
    </div>
  );
}

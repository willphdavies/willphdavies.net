"use client";
import Moment from "react-moment";
export interface ExperienceCardSubheaderProps {
  role: string;
  start: Date;
  end: Date | null;
}
export function ExperienceCardSubheader(props: ExperienceCardSubheaderProps) {
  const { role, start, end } = props;
  const format = "MMM YYYY";
  return (
    <div className="card__subheader">
      <div>{role}</div>
      <div className="subheader__date">
        <Moment format={format} date={start} />
        <span> - </span>
        {end ? <Moment format={format} date={end} /> : "Current"}
      </div>
    </div>
  );
}

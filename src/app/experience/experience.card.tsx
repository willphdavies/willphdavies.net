"use client";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { IExperienceModel } from "@/data/entity/experience.interface";
import { ExperienceCardSubheader } from "./experience.card.subheader";
import Markdown from "react-markdown";
import { useState } from "react";

export interface ExperienceCardProps {
  item: IExperienceModel;
}
/**
 * Experience Card Component
 * @param props
 * @returns Mui Card with Experience details
 */
export function ExperienceCard(props: ExperienceCardProps) {
  const { item } = props;
  const [showMore, setShowMore] = useState(false);
  const maxTags = 4;
  return (
    <Card className="experience-card">
      <CardHeader
        avatar={
          item.image ? (
            <Avatar alt={item.company} src={`/logos/${item.image}`}></Avatar>
          ) : (
            <Avatar>{item.company.substring(0, 1)}</Avatar>
          )
        }
        action={
          <IconButton>
            <span className="material-icons">more_vert</span>
          </IconButton>
        }
        title={item.company}
        subheader={
          <ExperienceCardSubheader
            role={item.role}
            start={item.start}
            end={item.end}
          />
        }
      />
      <CardContent className="card__content">
        <Typography
          className="content__text"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          <Markdown>{item.description}</Markdown>
        </Typography>
        <div className="content__tags">
          {item.tags.map((tag: string, index: number) =>
            index >= maxTags && !showMore ? null : (
              <Chip
                key={index}
                className="tags__chip"
                onClick={() => chipHandleClick(tag)}
                color="secondary"
                size="small"
                label={tag}
              ></Chip>
            )
          )}
          <IconButton
            sx={{ marginTop: "-3px" }}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <span className="material-icons">expand_less</span>
            ) : (
              <span className="material-icons">expamd_less</span>
            )}
          </IconButton>
        </div>
      </CardContent>
      <CardActions className="card__actions">
        {item.link ? (
          <Button target="_blank" href={item.link} variant="contained">
            <span className="material-icons">language</span>
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
  function chipHandleClick(tag: string) {
    //setQsParams({ tags: [tag] });
  }
}

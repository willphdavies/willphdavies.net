"use client";
import {
  Autocomplete,
  Badge,
  Button,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  List,
  ListItem,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { ExperienceFilterSearch } from "./experience.filter.search";
import { useSearchParams, useRouter } from "next/navigation";

export interface ExperienceFilterProps {
  tags: string[];
  onToggleVisibility: (val: boolean) => void;
}
/**
 * Experience Filter Component
 * @param props
 * @returns Right hand Mui Drawer
 */
export function ExperienceFilter(props: ExperienceFilterProps) {
  const { tags, onToggleVisibility } = props;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("start");
  const [sortAsc, setSortAsc] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState(false);
  const qsParams = useSearchParams();
  const router = useRouter();
  const badgeCount = filterCount();

  useEffect(() => {
    onToggleVisibility(showFilter);
  }, [showFilter, onToggleVisibility]);
  return (
    <>
      <Drawer
        className={`experience-filter ${showFilter ? "-show" : "-hide"}`}
        variant="persistent"
        anchor="right"
        open={showFilter}
      >
        <List className="experience-filter__list">
          <ListSubheader className="list__header">
            <span>Filters</span>
            <IconButton onClick={() => setShowFilter(false)}>
              <span className="material-icons">close</span>
            </IconButton>
          </ListSubheader>
          <ListItem>
            <Autocomplete
              fullWidth
              limitTags={2}
              loading={false}
              options={tags}
              value={selectedTags}
              multiple={true}
              renderInput={(params) => <TextField {...params} label="Tags" />}
              onChange={(event, newInputValue) => {
                handleTagFilterChange(newInputValue);
              }}
            />
          </ListItem>
          <ListSubheader>Sort</ListSubheader>
          <ListItem>
            <Select value={sortBy} onChange={handleSortByChange} fullWidth>
              <MenuItem value="start">Start Date</MenuItem>
              <MenuItem value="end">End Date</MenuItem>
              <MenuItem value="company">Company</MenuItem>
              <MenuItem value="role">Role</MenuItem>
            </Select>
          </ListItem>
          <ListItem>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch checked={sortAsc} onChange={handleSortAscChange} />
                }
                label="Sort Ascending"
              />
            </FormGroup>
          </ListItem>
        </List>
      </Drawer>
      <Button
        className={`experience-filter-show-filter ${
          showFilter ? "-hide" : "-show"
        }`}
        variant="contained"
        onClick={() => setShowFilter(true)}
        color="primary"
      >
        <Badge badgeContent={badgeCount} color="error">
          <span className="material-icons">filter_list</span>
        </Badge>
      </Button>
    </>
  );
  function handleTagFilterChange(tags: string[]) {
    setSelectedTags(tags);
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("tags", tags.join(","));
    newSearchParams.set("page", "1");
    router.push(`/experience?${newSearchParams.toString()}`);
  }
  function handleSortByChange(ev: SelectChangeEvent) {
    const sortBy = ev.target.value;
    setSortBy(sortBy);
    const newSearchParams = new URLSearchParams(qsParams);
    newSearchParams.set("sortBy", sortBy);
    newSearchParams.set(
      "sortAsc",
      ["company", "role"].indexOf(sortBy) >= 0 ? "true" : "false"
    );
    router.push(`/experience?${newSearchParams.toString()}`);
  }
  function handleSortAscChange(ev: ChangeEvent<HTMLInputElement>) {
    const sortAsc = String(ev.target.checked);
    const newSearchParams = new URLSearchParams(qsParams);
    newSearchParams.set("sortAsc", sortAsc);
    router.push(`/experience?${newSearchParams.toString()}`);
  }
  function filterCount() {
    let count = qsParams.get("search") ? 1 : 0;
    count = qsParams.get("tags")?.length ? count + 1 : count;
    count = qsParams.get("sortBy") ? count + 1 : count;
    count = qsParams.get("sortAsc") ? count + 1 : count;
    return count;
  }
}

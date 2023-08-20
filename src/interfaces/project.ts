import type { EntryFieldTypes } from "contentful";
import type { ISkill } from "./skill";

export interface IProject {
  contentTypeId: "project";
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    logo: EntryFieldTypes.AssetLink;
    githubLink: EntryFieldTypes.Text;
    externalLink: EntryFieldTypes.Text;
    skills: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<ISkill<"technical">>
    >;
    images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    endDate: EntryFieldTypes.Date;
    ongoing: EntryFieldTypes.Boolean;
  };
}

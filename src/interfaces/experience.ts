import type { EntryFieldTypes } from "contentful";
import type { ISkill } from "./skill";

export interface IExperience {
  contentTypeId: "experience";
  fields: {
    company: EntryFieldTypes.Text;
    position: EntryFieldTypes.Text;
    logo: EntryFieldTypes.AssetLink;
    startDate: EntryFieldTypes.Date;
    endDate: EntryFieldTypes.Date;
    skills: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<ISkill<"technical">>
    >;
    achievements: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  };
}

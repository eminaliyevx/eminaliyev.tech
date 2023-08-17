import type { EntryFieldTypes } from "contentful";

export interface IEducation {
  contentTypeId: "education";
  fields: {
    school: EntryFieldTypes.Text;
    program: EntryFieldTypes.Text;
    logo: EntryFieldTypes.AssetLink;
    startDate: EntryFieldTypes.Date;
    endDate: EntryFieldTypes.Date;
    gpa: EntryFieldTypes.Number;
    courses: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  };
}

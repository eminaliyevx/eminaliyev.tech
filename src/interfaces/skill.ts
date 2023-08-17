import type { EntryFieldTypes } from "contentful";

type SkillType = "language" | "technical" | "soft";

export interface ISkill<T extends SkillType = SkillType> {
  contentTypeId: "skill";
  fields: {
    name: EntryFieldTypes.Text;
    icon: EntryFieldTypes.Text;
    type: EntryFieldTypes.Text<T>;
    love: EntryFieldTypes.Boolean;
  };
}

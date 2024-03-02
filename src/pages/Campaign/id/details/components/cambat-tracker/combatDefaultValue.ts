import { CombatType } from "../../../../campaignTypes";

export const combatDefaultValue: CombatType = {
  active: false,
  dmId: "",
  dmName: "",
  turn: 0,
  round: 0,
  combatants: {},
};

export const startCombatDefaultValue = (id: string, name: string) => {
  return {
    ...combatDefaultValue,
    dmName: name,
    active: true,
    dmId: id,
  };
};

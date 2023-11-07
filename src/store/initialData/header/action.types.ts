import { NamePath } from "@/router/routes.types";

type TActionWithoutName = {
  iconUrl: string;
  namePath?: NamePath;
};

interface IActionWithName extends TActionWithoutName {
  name?: string;
}

export type TAction = IActionWithName;

export type TActions = TAction[];

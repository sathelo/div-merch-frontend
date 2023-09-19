import { NamePath } from "@/router/routes.types";

export type ActionWithoutName = {
  iconUrl: string;
  namePath?: NamePath;
};

export interface IActionWithName extends ActionWithoutName {
  name?: string;
}

export type Action = IActionWithName;

export type Actions = Action[];

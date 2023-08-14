export type ActionWithoutName = {
  iconUrl: string;
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
};

export interface IActionWithName extends ActionWithoutName {
  name: string;
}

export type Action = IActionWithName | ActionWithoutName;

export type Actions = Action[];

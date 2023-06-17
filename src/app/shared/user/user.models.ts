import type { User } from "./user";

export type UserNonColumnsKeys =
  'ctrl' |
  'clone';

export const UserNonColumnsKeysArr = [
  'ctrl',
  'clone',
] as UserNonColumnsKeys[];

export type IUser = Partial<User>;

export const defaultModelValuesUser: Omit<IUser, UserNonColumnsKeys> = {
  name: '',
}

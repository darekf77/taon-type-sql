import { NumberColumn, PropsEntitySQL, QueryTable, StringColumn } from "../../../lib";
import { _ } from 'tnp-core';
import type { User } from "./user";

const userTableName = _.snakeCase('User')

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

//#region @websql
export type IUserTable = PropsEntitySQL<typeof defaultModelValuesUser>;

export class UserTable extends QueryTable<User, number> implements IUserTable {
  id = new NumberColumn(this, 'id');
  name = new StringColumn(this, 'name');
}

export const USER = new UserTable(_.snakeCase(userTableName));
//#endregion

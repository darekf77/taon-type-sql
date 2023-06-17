import { Firedev } from 'firedev';
import { User } from './user';
import { _ } from 'tnp-core';
import { randUserName } from '@ngneat/falso';

@Firedev.Controller({
  className: 'UserController',
  entity: User
})
export class UserController extends Firedev.Base.Controller<any> {

  @Firedev.Http.GET()
  hello(): Firedev.Response<string> {
    return async () => {
      return 'Hello world';
    }
  }

  @Firedev.Http.GET(`/${Firedev.symbols.CRUD_TABLE_MODELS}`) // @ts-ignore
  getAll(@Firedev.Http.Param.Query('limit') limit = Infinity): Firedev.Response<User[]> {
    //#region @websqlFunc
    const config = super.getAll();
    return async (req, res) => { // @ts-ignore
      let arr = await Firedev.getResponseValue(config, req, res) as User[];
      if (arr.length > limit) {
        arr = arr.slice(0, limit - 1);
      }
      return arr as any;
    }
    //#endregion
  }

  //#region @websql
  async initExampleDbData() {
    const repo = this.connection.getRepository(User);
    const array = _.times(10, d => randUserName()).map(name => {
      return User.from({ name });
    })
    await repo.save(array);
  }
  //#endregion

}

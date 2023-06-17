import { Firedev } from 'firedev';
import { User } from './user';
import { _ } from 'tnp-core';
import { randUserName } from '@ngneat/falso';
import { MySqlQuerySource } from '../../../lib';
//#region @websql
import { USER } from './user.models';
//#endregion

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

  @Firedev.Http.GET()
  getSpecyficThings(): Firedev.Response<any> {
    //#region @websqlFunc
    return async () => {
      // const result = await this.connection.query('SELECT COUNT(1) AS "cnt" FROM "user" "User"')
      // const result = await this.connection.query('SELECT * FROM "user" "User"')
      const db = new MySqlQuerySource(this.connection, {
        logging: true,
      });

      let result = await db.from(USER)
        .where(USER.id.gt(3))
        .select(USER.$all)

      // .limit(10)
      // .select(USER.name)

      console.log({
        result
      })

      // .where(BOOK.author.lower().like('%john%')
      //   .and(BOOK.price.lt(10).or(BOOK.available.eq(true)))
      //   .and(BOOK.date.gte(new Date('2016-10-23T19:11:25.342Z'))))
      // .groupBy(BOOK.author, BOOK.available)
      // .having(BOOK.price.sum().between(1000, 2000))
      // .orderBy(BOOK.author.asc().nullsFirst(), BOOK.price.sum().desc())
      // .offset(20)
      // .limit(10)
      // .where(USER.$all)
      // .select(BOOK.author, BOOK.available, BOOK.price.sum().as('sum_price'));


      return null;
    }
    //#endregion
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

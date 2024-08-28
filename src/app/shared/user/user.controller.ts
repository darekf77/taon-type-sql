// import { Taon } from 'taon';
// import { User } from './user';
// import { _ } from 'tnp-core';
// import { randUserName } from '@ngneat/falso';
// import { MySqlQuerySource } from '../../../lib';
// //#region @websql
// import { USER, UserTable } from './user.models';
// //#endregion

// @Taon.Controller({
//   className: 'UserController',

// })
// export class UserController extends Taon.Base.CrudController<any> {
//   entity() {
//     return User;
//   }

//   @Taon.Http.GET()
//   hello(): Taon.Response<string> {
//     return async () => {
//       return 'Hello world';
//     }
//   }

//   @Taon.Http.GET()
//   getSpecyficThings(): Taon.Response<any> {
//     //#region @websqlFunc
//     return async () => {
//       // const result = await this.connection.query('SELECT COUNT(1) AS "cnt" FROM "user" "User"')
//       // const result = await this.connection.query('SELECT * FROM "user" "User"')

//       // const db = new MySqlQuerySource(this.connection, {
//       //   logging: true,
//       // });

//       // let result = await db.from(USER)
//       //   .where(USER.id.gt(3))
//       //   .select<User>(USER.$all)

//       // // .limit(10)
//       // // .select(USER.name)

//       // console.log({
//       //   result
//       // })

//       // .where(BOOK.author.lower().like('%john%')
//       //   .and(BOOK.price.lt(10).or(BOOK.available.eq(true)))
//       //   .and(BOOK.date.gte(new Date('2016-10-23T19:11:25.342Z'))))
//       // .groupBy(BOOK.author, BOOK.available)
//       // .having(BOOK.price.sum().between(1000, 2000))
//       // .orderBy(BOOK.author.asc().nullsFirst(), BOOK.price.sum().desc())
//       // .offset(20)
//       // .limit(10)
//       // .where(USER.$all)
//       // .select(BOOK.author, BOOK.available, BOOK.price.sum().as('sum_price'));


//       return null;
//     }
//     //#endregion
//   }

//   @Taon.Http.GET(`/${Taon.symbols.CRUD_TABLE_MODELS}`) // @ts-ignore
//   getAll(@Taon.Http.Param.Query('limit') limit = Infinity): Taon.Response<User[]> {
//     //#region @websqlFunc
//     const config = super.getAll();
//     return async (req, res) => { // @ts-ignore
//       let arr = await Taon.getResponseValue(config, req, res) as User[];
//       if (arr.length > limit) {
//         arr = arr.slice(0, limit - 1);
//       }
//       return arr as any;
//     }
//     //#endregion
//   }

//   //#region @websql
//   async initExampleDbData() {
//     const repo = this.connection.getRepository(User);
//     const array = _.times(10, d => randUserName()).map(name => {
//       return User.from({ name });
//     })
//     await repo.save(array);
//   }
//   //#endregion

// }

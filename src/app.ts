//#region @notForNpm

//#region @browser
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';


// @ts-ignore
import { $db } from 'src'

declare const ENV: any;
export async function aa(this: any) {

  type AA<T> = { heeelleelel(); }

  function db<T1, T2>() {

    return void 0 as [T1, T2];
  }

  const { BOOK } = $db.entities;

  let result = await $db.query<Book>(this.conneciton)
    .where(BOOK.author.lower().like('%john%')
      .and(BOOK.price.lt(10).or(BOOK.available.eq(true)))
      .and(BOOK.date.gte(new Date('2016-10-23T19:11:25.342Z'))))
    .groupBy(BOOK.author, BOOK.available)
    .having(BOOK.price.sum().between(1000, 2000))
    .orderBy(BOOK.author.asc().nullsFirst(), BOOK.price.sum().desc())
    .offset(20)
    .limit(10)
    .select(BOOK.author, BOOK.available, BOOK.price.sum().as('sum_price'));

  // let result = await db.from(BOOK)
  //   .where(BOOK.author.lower().like('%john%')
  //     .and(BOOK.price.lt(10).or(BOOK.available.eq(true)))
  //     .and(BOOK.date.gte(new Date('2016-10-23T19:11:25.342Z'))))
  //   .groupBy(BOOK.author, BOOK.available)
  //   .having(BOOK.price.sum().between(1000, 2000))
  //   .orderBy(BOOK.author.asc().nullsFirst(), BOOK.price.sum().desc())
  //   .offset(20)
  //   .limit(10)
  //   .select(BOOK.author, BOOK.available, BOOK.price.sum().as('sum_price'));
}



@Component({
  selector: 'app-firedev-type-sql',
  template: 'hello from firedev-type-sql',
  styles: [` body { margin: 0px !important; } `],
})
export class FiredevTypeSqlComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@NgModule({
  imports: [],
  exports: [FiredevTypeSqlComponent],
  declarations: [FiredevTypeSqlComponent],
  providers: [],
})
export class FiredevTypeSqlModule { }
//#endregion


async function start(port: number) {
  console.log('hello world');
}

export default start;



//#endregion

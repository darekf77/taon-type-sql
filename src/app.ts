// //#region imports
// import { Taon } from 'taon';
// const host = 'http://localhost:4199';
// import { User, UserController } from './app/shared/user';
// //#region @browser
// import { NgModule, NgZone, ViewEncapsulation } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
// import { CommonModule } from '@angular/common';

// //#endregion
// //#endregion

// //#region @browser

// //#region routes
// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./app/routing/+admin-users/admin-users.module')
//       .then(m => m.AdminUsersContainerModule),
//   },
// ];
// //#endregion

// //#region main component
// @Component({
//   selector: 'app-taon-type-sql',
//   encapsulation: ViewEncapsulation.None,
//   styleUrls: ['./app.scss'],
//   templateUrl: './app.html',
// })
// export class TaonTypeSqlComponent implements OnInit {
//   async ngOnInit() {

//   }
// }
// //#endregion

// //#region main module
// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule.forRoot(routes, {
//       useHash: true,
//       preloadingStrategy: PreloadAllModules,
//       enableTracing: false,
//       bindToComponentInputs: true
//     }),
//   ],
//   exports: [TaonTypeSqlComponent],
//   declarations: [TaonTypeSqlComponent],
//   providers: [],
// })
// export class TaonTypeSqlModule { }
// //#endregion

// //#endregion

// //#region taon start function
// async function start() {
//   // Taon.enableProductionMode();

//   const context = await Taon.init({
//     host,
//     controllers: [
//       UserController,
//       // PUT FIREDEV CONTORLLERS HERE
//     ],
//     entities: [
//       User
//       // PUT FIREDEV ENTITIES HERE
//     ],
//     //#region @websql
//     config: {
//       type: 'better-sqlite3',
//       database: 'tmp-db.sqlite',
//       logging: false,
//     }
//     //#endregion
//   });

//   //#region @backend
//   if (Taon.isNode) {
//     context.node.app.get('/hello', (req, res) => {
//       res.send('Hello taon-type-sql')
//     })
//   }
//   //#endregion
// }
// //#endregion

// export default start;

//#region  taon-type-sql component
//#region @browser
@Component({ template: 'hello world fromr taon-type-sql' })
export class TaonTypeSqlComponent {}
//#endregion
//#endregion

//#region  taon-type-sql module
//#region @browser
@NgModule({
  declarations: [TaonTypeSqlComponent],
  imports: [CommonModule],
  exports: [TaonTypeSqlComponent],
})
export class TaonTypeSqlModule {}
//#endregion
//#endregion

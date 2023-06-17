//#region imports
import { Firedev } from 'firedev';
const host = 'http://localhost:4199';
import { User, UserController } from './app/shared/user';
//#region @browser
import { NgModule, NgZone, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';

//#endregion
//#endregion

//#region @browser

//#region routes
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app/routing/+admin-users/admin-users.module')
      .then(m => m.AdminUsersContainerModule),
  },
];
//#endregion

//#region main component
@Component({
  selector: 'app-firedev-type-sql',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.scss'],
  templateUrl: './app.html',
})
export class FiredevTypeSqlComponent implements OnInit {
  async ngOnInit() {

  }
}
//#endregion

//#region main module
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      enableTracing: false,
      bindToComponentInputs: true
    }),
  ],
  exports: [FiredevTypeSqlComponent],
  declarations: [FiredevTypeSqlComponent],
  providers: [],
})
export class FiredevTypeSqlModule { }
//#endregion

//#endregion

//#region firedev start function
async function start() {
  // Firedev.enableProductionMode();

  const context = await Firedev.init({
    host,
    controllers: [
      UserController,
      // PUT FIREDEV CONTORLLERS HERE
    ],
    entities: [
      User
      // PUT FIREDEV ENTITIES HERE
    ],
    //#region @websql
    config: {
      type: 'better-sqlite3',
      database: 'tmp-db.sqlite',
      logging: false,
    }
    //#endregion
  });
  //#region @backend
  if (Firedev.isNode) {
    context.node.app.get('/hello', (req, res) => {
      res.send('Hello firedev-type-sql')
    })
  }
  //#endregion
}
//#endregion

export default start;

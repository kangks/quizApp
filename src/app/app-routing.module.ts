import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { PageNotFoundComponent }   from './not-found.component';
import { CrisisListComponent }   from './crisis-list.component';


const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: '',   redirectTo: '/questions', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
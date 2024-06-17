import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MinistreCrudComponent } from './ministre-crud/ministre-crud.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestingchartsComponent } from './testingcharts/testingcharts.component';
import { SingleMinistreComponent } from './single-ministre/single-ministre.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: MainComponent,
          children: [
            { path: 'SingleMinistre/:id', component: SingleMinistreComponent },
            { path: 'dashboard/:id', component: TestingchartsComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'ManageMinistre', component: MinistreCrudComponent },
            { path: 'testingCharts', component: TestingchartsComponent },
            { path: 'SingleMinistre', component: SingleMinistreComponent },
          ],
        },

        {
          path: 'auth',
          loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule),
        },
        { path: 'notfound', component: NotfoundComponent },
        { path: '**', redirectTo: '/notfound' },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

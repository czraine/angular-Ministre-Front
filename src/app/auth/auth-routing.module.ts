import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'error',
        loadChildren: () =>
          import('./error/error.module').then((m) => m.ErrorModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'forget-Password',
        loadChildren: () =>
          import('./forget-password/forget-password.module').then(
            (m) => m.ForgetPasswordModule
          ),
      },

      { path: '**', redirectTo: '/notfound' },
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

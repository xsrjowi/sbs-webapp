import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicGuard } from './auth/guards/public.guard';

// Todo : [15 - rp]
const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canActivate: [PublicGuard],
        canMatch: [PublicGuard]
    },
    {
        path: 'panel',
        // loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canActivate: [PublicGuard],
        canMatch: [PublicGuard]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}

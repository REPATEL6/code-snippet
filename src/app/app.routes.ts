import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CodeBinComponent } from './components/code-bin/code-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewSnippetComponent } from './components/view-snippet/view-snippet.component';
import { DeferdemoComponent } from './components/deferdemo/deferdemo.component';

export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'signup', component: SignupComponent },
    { path:'create', component: CodeBinComponent ,canActivate:[authGuard]},
    { path:'deferdemo', component: DeferdemoComponent },
    // { path:'about', component: AboutComponent },
    // Lazy Loading example below
    { path:'about', loadComponent:()=> import("./components/about/about.component").then(mod=>mod.AboutComponent)},
    { path:'', component: HomeComponent},
    { path:'snippet/:id', component:ViewSnippetComponent},
    { path:"**", component: NotFoundComponent }
];

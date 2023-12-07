import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { child } from '@angular/fire/database';
import { HomecontentComponent } from './tabs/homecontent/homecontent.component';
import { SearchComponent } from './tabs/search/search.component';
import { CartComponent } from './tabs/cart/cart.component';
import { OrdersComponent } from './tabs/orders/orders.component';
import { AcountComponent } from './tabs/acount/acount.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { PopoverComponent } from './pages/popover/popover.component';
import { canActivate,redirectUnauthorizedTo,redirectLoggedInTo } from "@angular/fire/auth-guard";
import { ItemsComponent } from './pages/items/items.component';

// const redirectUnauthorizedToLogin= ()=>redirectUnauthorizedTo([''])
// const redirectLoggedInToHome=()=>redirectLoggedInTo(['home'])
const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    // ...canActivate(redirectLoggedInToHome)
   
  },
  {
    path:'register',
    component:RegisterComponent,
    // ...canActivate(redirectLoggedInToHome),
   
  },
  {
    path:'tabs',
   component:TabsComponent,
 

  },
  // {
  //   path:'item/:id',
  //  component:ItemsComponent,
 

  // },
  {
    path:'popover',
   component:PopoverComponent

  },
  {
    path:'home',
    component:HomeComponent,
    // ...canActivate(redirectUnauthorizedToLogin),
    children:[
      {
        path:'item/:id',
       component:ItemsComponent,
     
    
      },
      {
        path:'',
     component:HomecontentComponent,
        pathMatch:'full'

      },
      {
        path:'homecontent',
       component:HomecontentComponent

      },
      {
        path:'search',
       component:SearchComponent

      },
      {
        path:'cart',
       component:CartComponent

      },
      {
        path:'orders',
       component:OrdersComponent

      },
      {
        path:'account',
       component:AcountComponent

      },
    ]
   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

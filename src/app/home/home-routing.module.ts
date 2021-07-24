import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'listing',
        loadChildren: ()=>
        import('../listing/listing.module').then(
          (m) => m.ListingPageModule
        )
      },
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then( m => m.LocationPageModule)
      },
      {
        path: 'wishlist',
        loadChildren: () => import('../wishlist/wishlist.module').then( m => m.WishlistPageModule)
      },
      {
          path: 'cart',
          loadChildren: () => import('../cart/cart.module').then( (m) => m.CartPageModule)
        
      },
      {
        path: '',
        redirectTo: 'listing',
        pathMatch: 'full'
      },
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
   
    { path: 'brandDetail-page/:id' , loadChildren:'../brandDetail/brandDetail.module.ts#BrandDetailModule'},
    { path: 'customer-page' ,loadChildren:'../customer/customer.module.ts#CustomerModule'},
    { path: 'feedbacks-page' , loadChildren:'../feedbacks/feedbacks.module.ts#FeedbacksModule'},
    { path:'productDetail-page/:id', loadChildren:'../productDetails/productDetails.module.ts#ProductDetailsModule'},
    {path: 'addProduct-page/:id', loadChildren:"../addProduct/addProduct.module.ts#AddProductModule"},
    { path: 'addBrand-page', loadChildren:'../addBrand/addBrand.module.ts#AddBrandModule'},
    {path:'interests-page',loadChildren:'../interests/interests.module.ts#InterestsModule'},
    {path:'orders-page',loadChildren:'../orders/orders.module.ts#OrdersModule'},
    {path:'products-page/:id',loadChildren:'../products/products.module.ts#ProductsModule'},
    {path:'addInterest-page',loadChildren:'../addInterest/addInterest.module.ts#AddInterestModule'},
    { path:'customerDetails-page/:id', loadChildren:'../customerDetails/customerDetails.module.ts#CustomerDetailsModule'}

    
  ]}
];

export const ROUTES = RouterModule.forChild(routes);


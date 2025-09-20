import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


let routes: Routes = [];
try {
  
} catch (e) {
  routes = [];
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

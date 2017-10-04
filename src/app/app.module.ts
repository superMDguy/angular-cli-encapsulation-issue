import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooComponent } from "./foo/foo.component";
import { BarComponent } from "./bar/bar.component";

export const appRoutes: Routes = [
  {path: "foo", component: FooComponent},
  {path: "bar", component: BarComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'

export const routes: Routes = [

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppRoutingModule {

}
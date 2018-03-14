import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DatePickerDemoComponent } from './datepicker.demo.component'
import { TreeDemoComponent } from './tree.demo.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'datepicker.demo', component: DatePickerDemoComponent },
    { path: 'tree.demo', component: TreeDemoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { } 
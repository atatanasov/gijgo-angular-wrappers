import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DatePickerDemoComponent } from './datepicker.demo.component'
import { TimePickerDemoComponent } from './timepicker.demo.component'
import { DateTimePickerDemoComponent } from './datetimepicker.demo.component'
import { TreeDemoComponent } from './tree.demo.component'
import { GridDemoComponent } from './grid.demo.component'
import { DialogDemoComponent } from './dialog.demo.component'
import { EditorDemoComponent } from './editor.demo.component'
import { CheckBoxDemoComponent } from './checkbox.demo.component'
import { DropDownDemoComponent } from './dropdown.demo.component'
import { SliderDemoComponent } from './slider.demo.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'datepicker.demo', component: DatePickerDemoComponent },
    { path: 'timepicker.demo', component: TimePickerDemoComponent },
    { path: 'datetimepicker.demo', component: DateTimePickerDemoComponent },
    { path: 'tree.demo', component: TreeDemoComponent },
    { path: 'grid.demo', component: GridDemoComponent },
    { path: 'dialog.demo', component: DialogDemoComponent },
    { path: 'editor.demo', component: EditorDemoComponent },
    { path: 'checkbox.demo', component: CheckBoxDemoComponent },
    { path: 'dropdown.demo', component: DropDownDemoComponent },
    { path: 'slider.demo', component: SliderDemoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { } 
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {AppRoutingModule, navigatableComponents} from "./app.routing";
import { AppComponent } from "./app.component";
import {NativeScriptFormsModule, NativeScriptHttpModule} from "nativescript-angular";



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    providers: [

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }

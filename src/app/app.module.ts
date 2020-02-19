import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@blox/material';

import { SnippetTextFieldIconComponent } from './snippet.text-field.icon.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, MaterialModule ],
    declarations: [ SnippetTextFieldIconComponent ],
    bootstrap:    [ SnippetTextFieldIconComponent ]
})
export class AppModule { }

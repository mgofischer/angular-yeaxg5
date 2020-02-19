import { Component } from '@angular/core';

@Component({
  selector: 'blox-snippet-text-field-icon',
  templateUrl: './snippet.text-field.icon.component.html'
})
export class SnippetTextFieldIconComponent {
    private _box = true;
    private _outlined = false;
    disabled = false;
    required = false;
    persistent = false;
    dense = false;
    field1: string;
    field2: string;

    clearField2() {
        this.field2 = null;
    }

    get box() {
        return this._box;
    }

    set box(value: boolean) {
        this._box = value;
        if (value)
            this._outlined = false;
    }

    get outlined() {
        return this._outlined;
    }

    set outlined(value: boolean) {
        this._outlined = value;
        if (value)
            this._box = false;
    }
}
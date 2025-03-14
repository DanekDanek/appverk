import { NgClass } from '@angular/common';
import { Component, computed, DoCheck, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

let nextUniqueId = 0;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  imports: [ReactiveFormsModule, NgClass],
  styleUrl: './input.component.scss',
})
export class InputComponent implements DoCheck {
  public type = input('text');
  public control = input<FormControl>(new FormControl(''));
  public label = input('');

  protected readonly inputId = `input-${nextUniqueId++}`;
  protected isMissingValue = signal(false);
  protected incorrectValue = signal(false);
  protected hasError = signal(false);
  protected isRequired = computed(() => this.control().hasValidator(Validators.required));

  ngDoCheck(): void {
    if (this.control().touched) {
      if (this.control().hasError('required')) {
        this.hasError.set(true);
        this.isMissingValue.set(true);
        this.incorrectValue.set(false);
      }
      if (this.control().hasError('incorrect')) {
        this.hasError.set(true);
        this.incorrectValue.set(true);
        this.isMissingValue.set(false);
      }
      if (this.control().valid) {
        this.resetErrors();
      }
    }
  }

  resetErrors() {
    this.hasError.set(false);
    this.incorrectValue.set(false);
    this.isMissingValue.set(false);
  }
}

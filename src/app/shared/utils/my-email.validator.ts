import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function myEmailValidator(): ValidatorFn {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{1,8}$/g;
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const valid = emailRegex.test(control.value);
    return valid ? null : { incorrect: true };
  };
}

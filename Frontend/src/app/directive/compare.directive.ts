import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

const chr = ['V', 'v', 'X', 'x'];

export function compareValidator(ControlName: string): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (c.value === null || c.value.length === 0) {
      return null;
    }
    const controlToCompare = c.root.get(ControlName);
    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
  };
}

export function NicValidator(ControlName: string): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {

    if (c.value !== null) {
      if (c.value.length < 11) {
        if (c.value.length === 10) {
          if (isNaN(c.value.slice(1, 9))) {
            return { 'nicValidate': true };
          }
          return chr.indexOf(c.value.slice(-1)) > -1 ? null : { 'nicValidate': true };
        } else {
          return { 'nicValidate': true };
        }
      } else {
        if (isNaN(c.value)) {
          return { '12nicValidate': true };
        } else {
          if (c.value.length === 11) {
            return { '12nicValidate': true };
          }
        }

        return c.value.charAt(0) === '1' || c.value.charAt(0) === '2' ? null : { '12nicValidate': true };
      }
    }
    return null;
  };
}

@Directive({
  selector: '[appCompare]'
})
export class CompareDirective {

  constructor() { }

}

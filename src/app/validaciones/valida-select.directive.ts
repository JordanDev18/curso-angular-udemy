import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValidaSelect]'
})
export class ValidaSelectDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return ValidaSelectDirectiveValidator(control);
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
export const ValidaSelectDirectiveValidator: ValidatorFn = (control : AbstractControl):
ValidationErrors | null =>{
  const pais = control.get('pais');
  return pais && pais.value === null ? {validaSelectNull : true} : null;
}
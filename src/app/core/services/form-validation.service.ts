import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  mensagem(control: AbstractControl, controlName: string): string {
    if (control.untouched) {
      return null;
    }
    for (const property in control.errors) {
      if (control.errors.hasOwnProperty(property)) {
        switch (property) {
          case 'required':
            return `${controlName} é obrigatório!`;
          case 'minlength':
            return `${controlName} deve ter no mínimo ${control.errors[property].requiredLength} caracteres!`;
          case 'maxlength':
            return `${controlName} deve ter no máximo ${control.errors[property].requiredLength} caracteres!`;
          case 'email':
            return 'Email inválido!';
          case 'equalsTo':
            return 'Os valores não correspondem!';
          case 'equals':
            return 'O valor digitado não corresponde ao esperado.';
          case 'date':
            return 'Data em formato inválido! Use o formato "dd/mm/aaaa".';
          default:
            return null;
        }
      }
    }
    return null;
  }
}

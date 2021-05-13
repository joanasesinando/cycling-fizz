import {Directive, Input} from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import { MustMatch } from './must-match.validator';

@Directive({
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }],
  selector: '[mustMatch]'
})

export class MustMatchDirective implements Validator {
  @Input('mustMatch') mustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
    return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }
}

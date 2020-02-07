import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grupo } from '@shared/entities/grupo';
import { CiclosApiService } from '@core/services/ciclos-api.service';
import { Observable } from 'rxjs';
import { Ciclo } from '@shared/entities/ciclo';
import { ActivatedRoute } from '@angular/router';
import { Associado } from '@shared/entities/associado';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '@core/services/form-validation.service';

@Component({
  selector: 'app-associado-form',
  templateUrl: './associado-form.component.html',
  styleUrls: ['./associado-form.component.scss']
})
export class AssociadoFormComponent implements OnInit {

  @Input() ciclo: Ciclo;
  @Input() associado: Associado;
  @Output() salvar = new EventEmitter<Associado>();
  grupos$: Observable<Grupo[]>;
  form: FormGroup;
  constructor(
    private api: CiclosApiService,
    private fb: FormBuilder,
    public formValidation: FormValidationService) { }

  ngOnInit() {
    this.grupos$ = this.api.getGrupos(this.ciclo.id);

    this.form = this.fb.group({
      cpf: [null, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      matricula: [null, [Validators.required, Validators.maxLength(20)]],
      nome: [null, [Validators.required, Validators.maxLength(255)]],
      cargo: [null, [Validators.required, Validators.maxLength(255)]],
      area: [null, [Validators.required, Validators.maxLength(255)]],
      grupoId: [null, [Validators.required]],
      aplausogramas: [null, [Validators.required]],
      centroCusto: [null, [Validators.required, Validators.maxLength(100)]]
    });

    if (this.associado) { this.form.reset(this.associado, { emitEvent: false }); }
  }

  onSubmit() {
    this.salvar.emit(this.form.value);
  }

}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NovoCiclo } from '@shared/entities/ciclo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '@core/services/form-validation.service';

@Component({
  selector: 'app-ciclo-form',
  templateUrl: './ciclo-form.component.html',
  styleUrls: ['./ciclo-form.component.scss']
})
export class CicloFormComponent implements OnInit {

  form: FormGroup;
  anos = [];
  semestres = [1, 2];

  @Input() isLoading = false;
  @Output() abrirCiclo = new EventEmitter<NovoCiclo>();
  constructor(
    private fb: FormBuilder,
    public formValidation: FormValidationService
  ) { }

  ngOnInit() {
    const hoje = new Date();
    const anoInicial = hoje.getFullYear();
    for (let i = 0; i < 3; i++) {
      this.anos.push(anoInicial + i);
    }

    const semestreInicial = hoje.getMonth() > 5 ? 2 : 1;
    this.form = this.fb.group({
      ano: [anoInicial, [Validators.required]],
      semestre: [semestreInicial, [Validators.required]],
      descricao: [`${anoInicial} - ${semestreInicial}`, [Validators.required, Validators.maxLength(255)]],
      periodoVotacaoAssociadoFantastico: this.fb.group({
        dataInicio: [null, [Validators.required]],
        dataFim: [null, [Validators.required]]
      }),
      periodoVotacaoAssociadoSuperFantastico: this.fb.group({
        dataInicio: [null, [Validators.required]],
        dataFim: [null, [Validators.required]]
      })
    });

    this.form.get('ano').valueChanges
      .subscribe(ano => this.form.get('descricao').setValue(`${ano} - ${this.form.get('semestre').value}`));

    this.form.get('semestre').valueChanges
      .subscribe(semestre => this.form.get('descricao').setValue(`${this.form.get('ano').value} - ${semestre}`));
  }

  onSubmit() {
    this.abrirCiclo.emit(this.form.value);
  }

}

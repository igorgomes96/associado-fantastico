import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Grupo } from '@shared/entities/grupo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '@core/services/form-validation.service';
import { NotificacoesService, ToastType } from '@core/services/notificacoes.service';

@Component({
  selector: 'app-grupo-form',
  templateUrl: './grupo-form.component.html',
  styleUrls: ['./grupo-form.component.scss']
})
export class GrupoFormComponent implements OnInit {

  form: FormGroup;
  mostrarCancelar = false;
  @Input()
  set grupo(grupo: Grupo) {
    if (!this.form) { return; }
    if (!grupo) {
      this.mostrarCancelar = false;
      this.form.reset();
    } else {
      this.mostrarCancelar = true;
      this.form.patchValue(grupo);
    }
  }
  @Input() isSaving = false;
  @Output() cancelar = new EventEmitter<void>();
  @Output() salvar = new EventEmitter<Grupo>();
  constructor(
    private fb: FormBuilder,
    public formValidation: FormValidationService,
    private notificacoes: NotificacoesService) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.maxLength(150)]]
    });
  }

  onSubmit() {
    if (!this.form.get('nome').value) {
      this.notificacoes.toast('Por favor, informe o nome do grupo', ToastType.Warning);
      return;
    }
    this.salvar.emit(this.form.value);
  }

  onCancelar() {
    this.cancelar.emit();
  }

}

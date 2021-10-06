import { UsuarioService } from './../../../Service/usuario.service';
import { MotivoService } from './../../../Service/motivo.service';
import { SituacaoService } from './../../../Service/situacao.service';
import { EventoService } from './../../../Service/evento.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectItem } from 'primeng';
import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.scss']
})
export class EventoCreateComponent implements OnInit {

  @Input() criaEvento: boolean = true;

  public situacao: SelectItem[] = [];
  public usuario: Usuario[] = [];
  public motivo: SelectItem[] = [];

  public form: FormGroup;
  public formBuilder: FormBuilder = new FormBuilder;

  constructor( private router: Router,
    private eventoService: EventoService,
    private SituacaoService: SituacaoService,
    private motivoService: MotivoService,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  buscarUsuarios(): void {
    this.usuarioService.findAll().subscribe((res) => {
      this.usuario = res;
  })

}

  buscarSituacao(): void {
    this.SituacaoService.listar().subscribe((res: SelectItem[]) => {
      this.situacao = [{
        label: '==Situacao do Evento==',
        value: null
      } as SelectItem].concat(res);
    });
  }

  buscarMotivo(): void {
    this.motivoService.listar().subscribe((res: SelectItem[]) => {
      this.situacao = [{
        label: '==Motivo do Evento==',
        value: null
      } as SelectItem].concat(res);
    });
  }


public criarFormulario(): void{
  this.form = this.formBuilder.group({
    id: [null],
    dataEvento: ['', Validators.required],
    valor: ['', Validators.required],
    situacao: ['', Validators.required],
    usuario: [null, Validators.required],
    motivo: [null, Validators.required],
  });

}

cancelar(): void {
  this.router.navigate(['/inicio']);
}

formatarMotivo(): void{
  this.form.value.motivo = {value: this.form.value.motivo};
}

formatarData(): void{
  let data: moment.Moment = moment.utc(this.form.value.dataNascimento).local();
  this.form.value.dataNascimento = data.format('DD/MM/YYYY');
}

formatarUsuario(): void{
  this.form.value.usuario = {value: this.form.value.usuario};
}

formatarSituacao(): void {
  this.form.value.situacao = {value: this.form.value.situacao};
}

create(): void{
  this.formatarData();
  this.formatarSituacao();
  this.formatarUsuario();
  this.eventoService.create(this.form.getRawValue()).subscribe(() => {
    this.router.navigate(['/inicio']);
  });
}

}

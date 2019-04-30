import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ContactService } from '../services/contact/contact.service';
import Swal from 'sweetalert2';
// declare var swal: any;
// declare function init_plugins();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public  barra: string;
  constructor( public _contactService: ContactService) {
    this.barra = '';
  }
  forma: FormGroup;

  ngOnInit() {
    // init_plugins();
    this.forma = new FormGroup({
      nombres: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      apellidos: new FormControl(null, Validators.required),
      mensaje: new FormControl(null, Validators.required)
    });

  }

  enviarCorreo() {
    console.log(this.forma);
    this._contactService.sendEmailContact(this.forma.value)
                        .subscribe( (resp: any) => {
                          if (resp.contact) {
                            this.barra = 'enviado';
                              // this.closeModale();
                              this.barra = 'fin';
                              Swal.fire({
                                  type: 'success',
                                  title: 'Email enviado',
                                  text: status,
                                  footer: 'En las próximas horas te responderemos'
                                });
                              //    f.form.reset();
                              //    this.comentario = null;
                              //    this.phone = null
                              // this.status = 'exito';
                                console.log(resp);
                              //             });
  }

});
  }
}

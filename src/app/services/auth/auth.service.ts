import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public  afAuth: AngularFireAuth, 
  ) { }

  login(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password).then(
      (res:any)=>{
        return res;
      }).catch((error:any)=>{
        swal("ERROR!", "correo o contraseña invalidos", "error");
    });
  }
}

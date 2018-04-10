import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AuthService} from '../core/auth.service';
import{AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import{AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';


@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService]
})
export class CoreModule { }

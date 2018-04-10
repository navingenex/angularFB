import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { ItemService } from './services/item.service';
import { ItemsComponent } from './component/items/items.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './component/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddItemComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularFS'),
    AngularFirestoreModule,
    CoreModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

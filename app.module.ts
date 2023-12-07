import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { GooglecartComponent } from './component/googlecart/googlecart.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import {MatDialogModule} from '@angular/material/dialog'
import { MatButtonModule } from "@angular/material/button";
import { AngularFireModule } from '@angular/fire/compat';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { HomecontentComponent } from './tabs/homecontent/homecontent.component';
import { CartComponent } from './tabs/cart/cart.component';
import { SearchComponent } from './tabs/search/search.component';
import { OrdersComponent } from './tabs/orders/orders.component';
import { AcountComponent } from './tabs/acount/acount.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ComponentsModule } from './components/components.module';
import { PopoverComponent } from './pages/popover/popover.component';
import { EmptyScreenComponent } from './component/empty-screen/empty-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ItemsComponent } from './pages/items/items.component';

register();

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DialogComponent,
    GooglecartComponent,
    TabsComponent,
    HomeComponent,
    HomecontentComponent,
    CartComponent,
    SearchComponent,
    OrdersComponent,
    AcountComponent,
    PopoverComponent,
    EmptyScreenComponent,
    ItemsComponent,
  

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
   ComponentsModule,
   AngularFireAuthModule,
   AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

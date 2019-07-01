import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AuthService } from './service/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './service/storage.service';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    routes,
    HttpClientModule
  ],
  providers: [
    AuthService,
    StorageService,
    AuthInterceptorProvider,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

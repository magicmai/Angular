import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';

import { AppRoutingModule }    from './app-routing.module';

import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

@NgModule({
	imports: [
	    BrowserModule,
	    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
	    AppRoutingModule
	],
	declarations: [
	    AppComponent,
	    DashboardComponent,
	    HeroDetailComponent,
	    HeroesComponent
	],
	providers: [HeroService],
	bootstrap: [AppComponent]
})
export class AppModule { }
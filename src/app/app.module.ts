import { LayoutAboutComponent } from './components/layout/layout-about/layout-about.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutLessonsComponent } from './components/layout/layout-lessons/layout-lessons.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    CardComponent,
    LessonsComponent,
    LayoutLessonsComponent,
    AboutComponent,
    LayoutAboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

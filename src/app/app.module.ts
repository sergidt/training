import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TabComponent } from './tab/tab.component';
import { TypeGuardsComponent } from './typescript-type-guards/type-guards.component';
import { GenericsComponent } from './typescript-generics/generics.component';
import { AlgebraicDataTypesComponent1 } from './typescript-algebraic-data-types1/algebraic-data-types.component1';
import { AlgebraicDataTypesComponent2 } from './typescript-algebraic-data-types2/algebraic-data-types.component2';
import { Fp1Component } from './fp-1/fp-1.component';
import { Fp2Component } from './fp-2/fp-2.component';
import { FpExerciseComponent } from './fp-exercise/fp-exercise.component';
import { FRPObservablesComponent } from './frp-observables/frp-observables.component';
import { FRPObservablesExerciseComponent } from './frp-observables-exercise/frp-observables-exercise.component';
import { FRPSubjectsComponent } from './frp-subjects/frp-subjects.component';
import { FRPSubjectsExerciseComponent } from './frp-subjects-exercise/frp-subjects-exercise.component';
import { TS2_2Component } from './typescript-2-2/typescript-2-2.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    AlgebraicDataTypesComponent1,
    AlgebraicDataTypesComponent2,
    TS2_2Component,
    TypeGuardsComponent,
    GenericsComponent,
    Fp1Component,
    Fp2Component,
    FpExerciseComponent,
    FRPObservablesComponent,
    FRPObservablesExerciseComponent,
    FRPSubjectsComponent,
    FRPSubjectsExerciseComponent
  ],
  imports: [
    MaterialModule,
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

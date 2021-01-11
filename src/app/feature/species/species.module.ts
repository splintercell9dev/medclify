import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InfoLimitedComponent } from './info-limited/info-limited.component';
import { InfoImagesComponent } from './info-images/info-images.component' ;
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PipeModule } from '@shared/pipe/pipe.module';
import { MatIconModule } from '@angular/material/icon' ;
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips' ;
import { CommonNamesComponent } from './common-names/common-names.component';
import { MatExpansionModule } from '@angular/material/expansion' ;
import { NativeDistributionsComponent } from './native-distributions/native-distributions.component';
import { SynonymsComponent } from './synonyms/synonyms.component';
import { EdibleUsesComponent } from './edible-uses/edible-uses.component';
import { MedicalUsesComponent } from './medical-uses/medical-uses.component';
import { SourcesComponent } from './sources/sources.component';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from '@shared/footer/footer.module';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [SpeciesComponent, InfoLimitedComponent, InfoImagesComponent, CommonNamesComponent, NativeDistributionsComponent, SynonymsComponent, EdibleUsesComponent, MedicalUsesComponent, SourcesComponent],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    NgxSkeletonLoaderModule,
    MatTooltipModule,
    LazyLoadImageModule,
    PipeModule,
    MatIconModule,
    FlexLayoutModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonModule,
    FooterModule
  ]
})
export class SpeciesModule { }

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { HeaderComponent } from './app/header/header.component';
import { JumbotronComponent } from './app/jumbotron/jumbotron.component';
import { ProductListComponent } from './app/product-list/product-list.component';
import { FooterComponent } from './app/footer/footer.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

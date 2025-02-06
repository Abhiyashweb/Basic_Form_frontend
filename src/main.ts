import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// Add provideHttpClient() to providers in the bootstrapApplication() function
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...appConfig.providers, provideHttpClient()] // Add provideHttpClient here
})
  .catch((err) => console.error(err));

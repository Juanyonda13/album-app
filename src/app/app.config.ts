import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { Edit, Eye, LucideAngularModule, Trash2 } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule,LucideAngularModule.pick({ Eye, Edit, Trash2 })),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

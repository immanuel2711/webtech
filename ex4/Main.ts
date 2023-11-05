import { platformBrowserDynamic } from '@angular/platform-browserdynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));

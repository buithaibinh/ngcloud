import { EffectsModule } from '@ngrx/effects';

import { MultilingualEffects } from '../i18n/effects';

export const AppEffectsModules = [
    EffectsModule.run(MultilingualEffects),
];

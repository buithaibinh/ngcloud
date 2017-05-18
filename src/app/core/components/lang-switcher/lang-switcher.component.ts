// libs
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

// app
import { ILang } from '../../interfaces';
import { NgCloudAppState } from '../../store';
import * as multilingual from '../../i18n/actions/index';
import { MultilingualService, Languages, LanguageViewHelper } from '../../i18n/services/index';

@Component({
  moduleId: module.id,
  selector: 'app-lang-switcher',
  templateUrl: 'lang-switcher.component.html',
  styleUrls: ['lang-switcher.component.scss'],
})
export class LangSwitcherComponent {

  public lang: string;
  public supportedLanguages: Array<ILang>;

  constructor(
    private store: Store<NgCloudAppState>,
    @Inject(Languages) private languages,
    @Inject(LanguageViewHelper) private viewHelper
  ) {
    store.take(1).subscribe((s: any) => {
      // s && s.18n - ensures testing works in all cases (since some tests dont use i18n state)
      this.lang = s && s.i18n ? s.i18n.lang : '';
    });
  }

  changeLang(code: any) {
    let lang = code || this.supportedLanguages[0].code;
    this.lang = lang;
    this.store.dispatch(new multilingual.ChangeAction(lang));
  }

  ngOnInit() {
    this.supportedLanguages = this.languages;
  }
}

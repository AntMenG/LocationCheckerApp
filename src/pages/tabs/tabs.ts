import { Component } from '@angular/core';

import { LocationPage } from '../location/location';
import { HorarioPage } from '../horario/horario';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LocationPage;
  tab2Root = HorarioPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}

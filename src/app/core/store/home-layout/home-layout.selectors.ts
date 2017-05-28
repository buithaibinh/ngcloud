import { Observable } from 'rxjs/Observable';
import { HomeLayoutState } from '../reducers';

export function getDashboardEditMode$(state$: Observable<HomeLayoutState>) {
  return state$.select((state) => state.homeLayout.editDashboard);
}
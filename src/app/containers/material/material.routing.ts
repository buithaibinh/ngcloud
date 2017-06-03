import { Routes } from '@angular/router';

import { ButtonDemo } from './button/button-demo';
import { BaselineDemo } from './baseline/baseline-demo';
import { ButtonToggleDemo } from './button-toggle/button-toggle-demo';
import { TabsDemo } from './tabs/tabs-demo';
import { GridListDemo } from './grid-list/grid-list-demo';
import { GesturesDemo } from './gestures/gestures-demo';
import { LiveAnnouncerDemo } from './live-announcer/live-announcer-demo';
import { ListDemo } from './list/list-demo';
import { IconDemo } from './icon/icon-demo';
import { ToolbarDemo } from './toolbar/toolbar-demo';
import { CheckboxDemo } from './checkbox/checkbox-demo';
import { OverlayDemo } from './overlay/overlay-demo';
import { PortalDemo } from './portal/portal-demo';
import { ProgressBarDemo } from './progress-bar/progress-bar-demo';
import { ProgressSpinnerDemo } from './progress-spinner/progress-spinner-demo';
import { SelectDemo } from './select/select-demo';
import { SidenavDemo } from './sidenav/sidenav-demo';
import { SlideToggleDemo } from './slide-toggle/slide-toggle-demo';
import { SliderDemo } from './slider/slider-demo';
import { RadioDemo } from './radio/radio-demo';
import { CardDemo } from './card/card-demo';
import { ChipsDemo } from './chips/chips-demo';
import { MenuDemo } from './menu/menu-demo';
import { RippleDemo } from './ripple/ripple-demo';
import { DialogDemo } from './dialog/dialog-demo';
import { TooltipDemo } from './tooltip/tooltip-demo';
import { SnackBarDemo } from './snack-bar/snack-bar-demo';
import { TABS_DEMO_ROUTES } from './tabs/routes';
import { PlatformDemo } from './platform/platform-demo';
import { AutocompleteDemo } from './autocomplete/autocomplete-demo';
import { InputDemo } from './input/input-demo';
import { StyleDemo } from './style/style-demo';
import { DatepickerDemo } from './datepicker/datepicker-demo';
import { TypographyDemo } from './typography/typography-demo';

export const MATERIAL_APP_ROUTES: Routes = [
    {
        path: '',
        children: [
            { path: 'autocomplete', component: AutocompleteDemo },
            { path: 'button', component: ButtonDemo },
            { path: 'card', component: CardDemo },
            { path: 'chips', component: ChipsDemo },
            //   {path: 'data-table', component: DataTableDemo},
            { path: 'datepicker', component: DatepickerDemo },
            { path: 'radio', component: RadioDemo },
            { path: 'select', component: SelectDemo },
            { path: 'sidenav', component: SidenavDemo },
            { path: 'slide-toggle', component: SlideToggleDemo },
            { path: 'slider', component: SliderDemo },
            { path: 'progress-spinner', component: ProgressSpinnerDemo },
            { path: 'progress-bar', component: ProgressBarDemo },
            { path: 'portal', component: PortalDemo },
            { path: 'overlay', component: OverlayDemo },
            { path: 'checkbox', component: CheckboxDemo },
            { path: 'input', component: InputDemo },
            { path: 'toolbar', component: ToolbarDemo },
            { path: 'icon', component: IconDemo },
            { path: 'list', component: ListDemo },
            { path: 'menu', component: MenuDemo },
            { path: 'live-announcer', component: LiveAnnouncerDemo },
            { path: 'gestures', component: GesturesDemo },
            { path: 'grid-list', component: GridListDemo },
            { path: 'tabs', component: TabsDemo, children: TABS_DEMO_ROUTES },
            { path: 'button-toggle', component: ButtonToggleDemo },
            { path: 'baseline', component: BaselineDemo },
            { path: 'ripple', component: RippleDemo },
            { path: 'dialog', component: DialogDemo },
            { path: 'tooltip', component: TooltipDemo },
            { path: 'snack-bar', component: SnackBarDemo },
            { path: 'platform', component: PlatformDemo },
            { path: 'style', component: StyleDemo },
            { path: 'typography', component: TypographyDemo }
        ]
    },

];

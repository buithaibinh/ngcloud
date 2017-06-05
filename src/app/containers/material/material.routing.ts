import { Routes } from '@angular/router';

import { MaterialComponent } from './material.component';
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
        component: MaterialComponent,
        data: { breadcrumb: "Material" },
        children: [
            { path: '', redirectTo: 'autocomplete', pathMatch: 'full'},
            { path: 'autocomplete', component: AutocompleteDemo, data: { breadcrumb: "Autocomplete" } },
            { path: 'button', component: ButtonDemo, data: { breadcrumb: "Buttons" } },
            { path: 'card', component: CardDemo, data: { breadcrumb: "Cards" } },
            { path: 'chips', component: ChipsDemo, data: { breadcrumb: "Chips" } },
            //   {path: 'data-table', component: DataTableDemo},
            { path: 'datepicker', component: DatepickerDemo, data: { breadcrumb: "dDatepicker" } },
            { path: 'radio', component: RadioDemo, data: { breadcrumb: "Radio" } },
            { path: 'select', component: SelectDemo, data: { breadcrumb: "Select" } },
            { path: 'sidenav', component: SidenavDemo, data: { breadcrumb: "Side navigation" } },
            { path: 'slide-toggle', component: SlideToggleDemo, data: { breadcrumb: "Slide toggle" } },
            { path: 'slider', component: SliderDemo, data: { breadcrumb: "Slider" } },
            { path: 'progress-spinner', component: ProgressSpinnerDemo, data: { breadcrumb: "Progress Spinner" } },
            { path: 'progress-bar', component: ProgressBarDemo, data: { breadcrumb: "Progress Bar" } },
            { path: 'portal', component: PortalDemo, data: { breadcrumb: "Portal" } },
            { path: 'overlay', component: OverlayDemo, data: { breadcrumb: "Overlay" } },
            { path: 'checkbox', component: CheckboxDemo, data: { breadcrumb: "Checkbox" } },
            { path: 'input', component: InputDemo, data: { breadcrumb: "Input" } },
            { path: 'toolbar', component: ToolbarDemo, data: { breadcrumb: "Toolbar" } },
            { path: 'icon', component: IconDemo, data: { breadcrumb: "Icons" } },
            { path: 'list', component: ListDemo, data: { breadcrumb: "List" } },
            { path: 'menu', component: MenuDemo, data: { breadcrumb: "Menu" } },
            { path: 'grid-list', component: GridListDemo, data: { breadcrumb: "Grid List" } },
            { path: 'tabs', component: TabsDemo, children: TABS_DEMO_ROUTES, data: { breadcrumb: "Tabs" } },
            { path: 'button-toggle', component: ButtonToggleDemo, data: { breadcrumb: "Button Toggle" } },
            { path: 'ripple', component: RippleDemo, data: { breadcrumb: "Ripple" } },
            { path: 'dialog', component: DialogDemo, data: { breadcrumb: "Dialog" } },
            { path: 'tooltip', component: TooltipDemo, data: { breadcrumb: "Tooltip" } },
            { path: 'snack-bar', component: SnackBarDemo, data: { breadcrumb: "Snack Bar" } },
            { path: 'typography', component: TypographyDemo, data: { breadcrumb: "Typography" }  }
        ]
    },

];

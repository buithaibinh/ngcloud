import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  route: string;
  name: string;
  type?: string;
}

export interface Menu {
  route: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    route: 'home',
    name: 'Home',
    type: 'link',
    icon: 'explore'
  },
  {
    route: 'material',
    name: 'Material',
    type: 'sub',
    icon: 'apps',
    badge: [
      { type: 'red', value: '5' }
    ],
    children: [
      { name: 'Autocomplete', route: 'autocomplete' },
      { name: 'Button', route: 'button' },
      { name: 'Button Toggle', route: 'button-toggle' },
      { name: 'Card', route: 'card' },
      { name: 'Chips', route: 'chips' },
      { name: 'Checkbox', route: 'checkbox' },
      { name: 'Data Table', route: 'data-table' },
      { name: 'Datepicker', route: 'datepicker' },
      { name: 'Dialog', route: 'dialog' },
      { name: 'Gestures', route: 'gestures' },
      { name: 'Grid List', route: 'grid-list' },
      { name: 'Icon', route: 'icon' },
      { name: 'Input', route: 'input' },
      { name: 'List', route: 'list' },
      { name: 'Menu', route: 'menu' },
      { name: 'Live Announcer', route: 'live-announcer' },
      { name: 'Overlay', route: 'overlay' },
      { name: 'Portal', route: 'portal' },
      { name: 'Progress Bar', route: 'progress-bar' },
      { name: 'Progress Spinner', route: 'progress-spinner' },
      { name: 'Radio', route: 'radio' },
      { name: 'Ripple', route: 'ripple' },
      { name: 'Select', route: 'select' },
      { name: 'Sidenav', route: 'sidenav' },
      { name: 'Slider', route: 'slider' },
      { name: 'Slide Toggle', route: 'slide-toggle' },
      { name: 'Snack Bar', route: 'snack-bar' },
      { name: 'Tabs', route: 'tabs' },
      { name: 'Toolbar', route: 'toolbar' },
      { name: 'Tooltip', route: 'tooltip' },
      { name: 'Platform', route: 'platform' },
      { name: 'Style', route: 'style' },
      { name: 'Typography', route: 'typography' }
    ]
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}

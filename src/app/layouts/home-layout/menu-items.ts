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
    name: 'Basic UI',
    type: 'sub',
    icon: 'palette',
    children: [
      { name: 'Autocomplete', route: 'autocomplete' },
      { name: 'Button', route: 'button' },
      { name: 'Button Toggle', route: 'button-toggle' },
      { name: 'Card', route: 'card' },
      { name: 'Chips', route: 'chips' },
      { name: 'Checkbox', route: 'checkbox' },
      { name: 'Datepicker', route: 'datepicker' },
      { name: 'Dialog', route: 'dialog' },
      { name: 'Grid List', route: 'grid-list' },
      { name: 'Input', route: 'input' },
      { name: 'List', route: 'list' },
      { name: 'Menu', route: 'menu' },
      { name: 'Progress Bar', route: 'progress-bar' },
      { name: 'Radio', route: 'radio' },
      { name: 'Ripple', route: 'ripple' },
      { name: 'Select', route: 'select' },
      { name: 'Slider', route: 'slider' },
      { name: 'Slide Toggle', route: 'slide-toggle' },
      { name: 'Snack Bar', route: 'snack-bar' },
      { name: 'Tabs', route: 'tabs' },
      { name: 'Toolbar', route: 'toolbar' },
      { name: 'Tooltip', route: 'tooltip' },
      { name: 'Typography', route: 'typography' }
    ]
  },
  {
    route: 'layouts',
    name: 'Layouts',
    type: 'sub',
    icon: 'computer',
    badge: [
      { type: 'red', value: '2' }
    ],
    children: [
      { name: 'Flex Layout', route: 'flex-layout' },
      { name: 'Golden layout', route: 'golden-layout' },
    ]
  },
  {
    route: 'tables',
    name: 'Tables',
    type: 'sub',
    icon: 'grid_on',
    children: [
      { name: 'Basic', route: 'basic' },
      { name: 'Selections', route: 'selection' },
      { name: 'Filter', route: 'filter' },
      { name: 'Paging', route: 'paging' },
      { name: 'Pinning', route: 'pinning' },
      { name: 'Inline Editing', route: 'inline' },
      { name: 'Full screen', route: 'full' },
      { name: 'Template table', route: 'template' },
    ]
  },
  {
    route: 'ag-grid',
    name: 'ag-Grid',
    type: 'sub',
    icon: 'list',
    children: [
      { name: 'Rich grid', route: 'rich-grid' },
    ]
  },
  {
    route: 'sections',
    name: 'Sections',
    type: 'sub',
    icon: 'grid_on',
    children: [
      { name: 'Error', route: 'err' },
    ]
  },
  {
    route: 'pages',
    name: 'Pages',
    type: 'sub',
    icon: 'grid_on',
    children: [
      { name: 'Blank', route: 'blank' },
      { name: 'Google Map', route: 'google-map' },
      { name: 'Invoice', route: 'invoice' },
      { name: 'Profile', route: 'profile' },
      { name: 'Search Result', route: 'search-result' },
      { name: 'User List', route: 'user-list' },
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

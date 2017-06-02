import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'home',
    name: 'Home',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'material',
    name: 'Material',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'calendar', name: 'Calendar'},
      {state: 'media', name: 'Media'},
      {state: 'messages', name: 'Message'},
      {state: 'social', name: 'Social'},
    ]
  },
  {
    state: 'apps',
    name: 'Apps',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'calendar', name: 'Calendar'},
      {state: 'media', name: 'Media'},
      {state: 'messages', name: 'Message'},
      {state: 'social', name: 'Social'},
    ]
  },
  {
    state: 'apps',
    name: 'Apps',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'calendar', name: 'Calendar'},
      {state: 'media', name: 'Media'},
      {state: 'messages', name: 'Message'},
      {state: 'social', name: 'Social'},
    ]
  },
  {
    state: 'apps',
    name: 'Apps',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'calendar', name: 'Calendar'},
      {state: 'media', name: 'Media'},
      {state: 'messages', name: 'Message'},
      {state: 'social', name: 'Social'},
    ]
  },
  {
    state: 'apps',
    name: 'Apps',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'calendar', name: 'Calendar'},
      {state: 'media', name: 'Media'},
      {state: 'messages', name: 'Message'},
      {state: 'social', name: 'Social'},
    ]
  },
  {
    state: 'http://primer.nyasha.me/docs',
    name: 'Docs',
    type: 'extTabLink',
    icon: 'local_library'
  }
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

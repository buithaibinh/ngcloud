import {
  ApplicationRef, Directive, HostListener, ElementRef,
  ComponentRef, Injector, OnInit, EventEmitter, Output, OnDestroy, Type,
  Component, ComponentFactoryResolver, ComponentFactory, ViewContainerRef, ReflectiveInjector,
  Compiler, AfterViewInit, Input

} from '@angular/core';

import * as $ from 'jquery';
declare var GoldenLayout: any;

export const KEY_GOLDEN_LAYOUT: string = 'GlDisplayConfig';
export const GL_LAYOUT = {
  DEFAULT_1: 'default_1',
  DEFAULT_2: 'default_2',
  DEFAULT_3: 'default_3',
  DEFAULT_4: 'default_4',
  DEFAULT_5: 'default_5'
};

const BASE_CONFIG: any = {
  settings: {
    hasHeaders: true,
    constrainDragToContainer: true,
    reorderEnabled: true,
    selectionEnabled: false,
    popoutWholeStack: false,
    blockedPopoutsThrowError: true,
    closePopoutsOnUnload: true,
    showPopoutIcon: true,
    showMaximiseIcon: true,
    showCloseIcon: true
  },
  dimensions: {
    borderWidth: 5,
    minItemHeight: 0,
    minItemWidth: 200,
    headerHeight: 26,
    dragProxyWidth: 300,
    dragProxyHeight: 200
  },
  labels: {
    close: 'Close',
    maximise: 'maximise',
    minimise: 'Minimise',
    popout: 'open in new window'
  },
  isClosable: true,
  reorderEnabled: true,
};

export interface IGoldenState {
  compId: string;
  title: string;
  status: boolean;
}

export interface IGoldenLayoutRegist {
  compType: Type<any>;
  compName: string;
  moduleType?: Type<any>
}

@Directive({
  selector: '[appGoldenLayout]'
})
export class GoldenLayoutDirective implements AfterViewInit, OnDestroy {
  private rootLayout: any;
  private _compRegists: IGoldenLayoutRegist[];
  @Input('config') goldenConfig: {};

  @Input('compRegists')
  set compRegists(compRegists: IGoldenLayoutRegist[]) {
    this._compRegists = compRegists;
  }

  get compRegists() {
    return this._compRegists;
  }

  constructor(private elementRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private injector: Injector,
  ) { }

  ngAfterViewInit() {
    // this.goldenConfig = this._loadContentConfig(GL_LAYOUT.DEFAULT_1);
    this.initGoldenLayout();

    // use ngx-store for creating layout.
  }

  ngOnDestroy() {
    this.viewContainer.clear();
    // off event, unsubscribe any event here.
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.rootLayout)
      this.rootLayout.updateSize();
  }

  initGoldenLayout() {
    let self = this;
    // this is very important.
    self.viewContainer.clear();
    self.rootLayout = new GoldenLayout(self.goldenConfig, self.elementRef.nativeElement);
    self.rootLayout.on('stackCreated', (stack: any) => self._onStackCreated(stack));
    self.rootLayout.on('initialised', () => {

      self.rootLayout.on('stateChanged', () => self._onStateChanged());
      self.rootLayout.on('itemDestroyed', (item: any) => self._onItemDestroyed(item));
    });

    // regsister all components here.
    for (let comp of this.compRegists) {
      this._register(comp);
    }

    // start init golden layout.
    self.rootLayout.init();
  }

  /**
   * use for add or remove component by component id
   * @param  
   */
  addOrRemoveComp($event: IGoldenState) {
    let isAdded = $event.status;
    this._minimise();
    let rootItem = this.rootLayout.root.contentItems[0];
    if (isAdded) {
      let config = this._newConfig($event);
      if (!config) return;
      rootItem.addChild(config);
    } else {
      let compId = $event.compId;
      try {
        let item = rootItem.getItemsById(compId);
        if (item && item.length > 0) {
          item[0].close();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  /**
   * public method, call when you want to change layout
   * Firstly it will destroy all comps in layout, after that init layout again.
   * @param key 
   */
  public changeLayout(key: string) {
    if (this.rootLayout) {
      this.rootLayout.destroy();
      this.rootLayout = null;
    }
    this.goldenConfig = this._loadContentConfig(key);
    this.initGoldenLayout();
  }

  /**
   * load config from localstore.
   * @param key key in local
   */
  private _loadContentConfig(key: string) {
    let config: any = null;

    let glConfig = $.extend({}, BASE_CONFIG);
    glConfig['content'] = [config];
    return glConfig;
  }

  /**
   * regist component for golden layout.
   * @param compRegist IGoldenLayoutRegist class
   */
  private _register(compRegist: IGoldenLayoutRegist) {
    let self = this;
    self.rootLayout.registerComponent(compRegist.compName, (container: any, componentState: any) => {

      let compId = container._config.id;
      container.on('destroy', () => {
        self._onContainerDestroy(compId);
      });

      if (compRegist.moduleType) { // use module
        self.compiler.compileModuleAndAllComponentsAsync(compRegist.moduleType).then((factory: any) => {
          const compFactory = factory.componentFactories.find((x: any) => x.componentType === compRegist.compType);
          self._appendComp(container, componentState, compFactory);
        });
      } else { // use component only
        const compFactory = self.componentFactoryResolver.resolveComponentFactory(compRegist.compType);
        self._appendComp(container, componentState, compFactory);
      }
    });
  }

  /**
   * Load the component in the div
   * @param container Div html, store stack(many tabs)
   * @param componentState state of component, use for passing data
   * @param compFactory
   */
  private _appendComp(container: any, componentState: any, compFactory: any) {
    const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainer.parentInjector);
    const compRef: any = this.viewContainer.createComponent(compFactory, 0, injector);
    let comp = compRef.instance; // angular component.

    container.compRef = compRef;
    container.getElement().append($(compRef.location.nativeElement));

    // call medthod init of component if exist
    if (comp.init) {
      comp.init(container, componentState);
    }
  }

  /**
   * Hanle stackCreated. All items are ready.
   * @param stack 
   */
  private _onStackCreated(stack: any) {
    stack
      .header
      .controlsContainer
      .find('.lm_close') //get the close icon
      .off('click') //unbind the current click handler
      .click(() => {
        //add your own
        if (confirm('Are you sure?')) {
          stack.remove();
        }
      });
  }

  /**
   * Fired whenever an item gets destroyed.
   * @param item 
   */
  private _onItemDestroyed(item: any) {
    if (item.container && item.container.compRef) {
      this.disposeComp(item.container.compRef.hostView);
    }
  }

  /**
   * Fired whenever something happens that updates the state of the layout (as returned by layout.toConfig)
   */
  private _onStateChanged() {
    let conf = this.rootLayout.toConfig();
  }

  /**
   * Emitted before the container will be destroyed. This will happen when the user clicks close as well as when a higher up part of the tree is destroyed.
   * @param itemId 
   */
  private _onContainerDestroy(itemId: any) {
    // container destroy here. send broadcast, send action...
  }

  /**
   * Hanle event destroy comp.
   * @param hostView 
   */
  private disposeComp(hostView?: any) {
    let index = this.viewContainer.indexOf(hostView);
    if (index !== -1) {
      this.viewContainer.remove(index);
    }
  }

  /**
   * minimise item which maximize if have
   */
  private _minimise() {
    let maxItem = this.rootLayout._maximisedItem;
    if (maxItem && maxItem.isMaximised) {
      maxItem.toggleMaximise();
    }
  }

  /**
   * make new config to add new component.
   * @param event 
   * @param componentState state of component. readmore http://golden-layout.com/docs/ItemConfig.html
   */
  private _newConfig($event: any, componentState: {} = {}) {
    let compId: string = $event.compId;
    let title: string = $event.title;
    let newConf: any = $.extend({}, {
      type: 'component', componentState: componentState
    });
    newConf.id = compId;
    newConf.componentName = compId;
    newConf.title = title;

    return newConf;
  }
}

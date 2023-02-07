import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ComponentRef, EmbeddedViewRef, OnInit, ViewChild, ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
import {BasePortalOutlet, CdkPortalOutlet, ComponentPortal, DomPortal, TemplatePortal} from "@angular/cdk/portal";
import {throwDialogContentAlreadyAttachedError} from "@angular/cdk/dialog";
import {MdDrawerControllerService} from "../../services/dashboard/md.drawer-controller.service";
import {Unsubscribe} from "../../utils";

@Component({
  selector: 'md-drawer',
  template: `
    <ng-template cdkPortalOutlet></ng-template>
  `,
  styleUrls: ["./md.drawer.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class MdDrawerComponent extends BasePortalOutlet implements AfterViewInit, OnInit{
  @ViewChild(CdkPortalOutlet, {static: true}) public _portalOutlet?: CdkPortalOutlet;

  constructor(
    private controller: MdDrawerControllerService,
    private unsubscribe: Unsubscribe
  ) {
    super();
  }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.controller.render$()
      .pipe(this.unsubscribe.takeUntilDestroy)
      .subscribe((res) => {
        if (res instanceof ComponentPortal) {
          this.controller.setInstance(this.attachComponentPortal(res));
        } else if (res instanceof TemplatePortal) {
          this.controller.setInstance(this.attachTemplatePortal(res));
        }
      });
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    if (this._portalOutlet) {
      if (this._portalOutlet.hasAttached()) {
        throwDialogContentAlreadyAttachedError();
      }
      // this._contentAttached();
      return this._portalOutlet.attachComponentPortal(portal);
    }
    throw new Error("_portalOutlet not initialized.");
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this._portalOutlet) {
      if (this._portalOutlet.hasAttached()) {
        throwDialogContentAlreadyAttachedError();
      }
      // this._contentAttached();
      return this._portalOutlet.attachTemplatePortal(portal);
    }
    throw new Error("_portalOutlet not initialized.");
  }

  override attachDomPortal = (portal: DomPortal) => {
    if (this._portalOutlet) {
      if (this._portalOutlet.hasAttached()) {
        throwDialogContentAlreadyAttachedError();
      }
      // this._contentAttached();
      return this._portalOutlet.attachDomPortal(portal);
    }
    throw new Error("_portalOutlet not initialized.");
  };
}

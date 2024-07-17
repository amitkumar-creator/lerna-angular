import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class CommonLoginService {
    constructor() { }
}
CommonLoginService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLoginService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CommonLoginService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLoginService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLoginService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CommonLoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommonLoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLoginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CommonLoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: CommonLoginComponent, selector: "common-login", ngImport: i0, template: `
    <h2>
      common-login will be implemented soon!
    </h2>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'common-login', template: `
    <h2>
      common-login will be implemented soon!
    </h2>
  ` }]
        }], ctorParameters: function () { return []; } });

class CommonLoginModule {
}
CommonLoginModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLoginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonLoginModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: CommonLoginModule, declarations: [CommonLoginComponent], exports: [CommonLoginComponent] });
CommonLoginModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLoginModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLoginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CommonLoginComponent
                    ],
                    imports: [],
                    exports: [
                        CommonLoginComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of common-login
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CommonLoginComponent, CommonLoginModule, CommonLoginService };
//# sourceMappingURL=common-login.mjs.map

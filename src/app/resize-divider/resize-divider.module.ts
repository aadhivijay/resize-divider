import { NgModule } from '@angular/core';

import { ResizeDividerComponent } from './resize-divider.component';
import { ContentLeftComponent } from './content-left.component';
import { ContentRightComponent } from './content-right.component';

@NgModule({
  imports:      [ ],
  declarations: [ ResizeDividerComponent, ContentLeftComponent, ContentRightComponent ],
  exports: [ ResizeDividerComponent, ContentLeftComponent, ContentRightComponent ]
})
export class ResizeDividerModule { }

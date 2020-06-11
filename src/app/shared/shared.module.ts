import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageModule, NzMessageServiceModule, NzMessageService} from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { AlertService } from './service/alert.service';
import { MessageService } from './service/message.service';
@NgModule({
  declarations: [],
  providers: [
   AlertService,
   MessageService,
],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzSpaceModule,
    NzAffixModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzStepsModule,
    NzAutocompleteModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzInputModule,
    NzInputNumberModule,
    NzMentionModule,
    NzRateModule,
    NzSelectModule,
    NzSwitchModule,
    NzTimePickerModule,
    NzTransferModule,
    NzUploadModule,
    NzAvatarModule,
    NzBadgeModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCollapseModule,
    NzCommentModule,
    NzDescriptionsModule,
    NzEmptyModule,
    NzListModule,
    NzStatisticModule,
    NzTableModule,
    NzTabsModule,
    NzAlertModule,
    NzMessageModule,
    NzMessageServiceModule,
    NzModalModule,
    NzResultModule,
    NzSkeletonModule,
    NzSpinModule,
    NzBackTopModule

  ],
  exports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzSpaceModule,
    NzAffixModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzStepsModule,
    NzAutocompleteModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzInputModule,
    NzInputNumberModule,
    NzMentionModule,
    NzRateModule,
    NzSelectModule,
    NzSwitchModule,
    NzTimePickerModule,
    NzTransferModule,
    NzUploadModule,
    NzAvatarModule,
    NzBadgeModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCollapseModule,
    NzCommentModule,
    NzDescriptionsModule,
    NzEmptyModule,
    NzListModule,
    NzStatisticModule,
    NzTableModule,
    NzTabsModule,
    NzAlertModule,
    NzMessageModule,
    NzModalModule,
    NzResultModule,
    NzSkeletonModule,
    NzSpinModule,
    NzBackTopModule
  ]
})
export class SharedModule { }

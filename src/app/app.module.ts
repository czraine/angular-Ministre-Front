import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { MainComponent } from './main/main.component';
import { MinistreCrudComponent } from './ministre-crud/ministre-crud.component';

import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { MessageService } from 'primeng/api';
import { ProductService } from './Services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { AuthService } from './auth.service';
import { TestingchartsComponent } from './testingcharts/testingcharts.component';
import { EmployeesService } from './Services/employees.service';
import { SingleMinistreComponent } from './single-ministre/single-ministre.component';

@NgModule({
  imports: [
    FormsModule,
    InputNumberModule,
    RadioButtonModule,
    RatingModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    PasswordModule,
    // PickListModule,
    // ProgressBarModule,
    ButtonModule,
    // ScrollerModule,
    // ScrollPanelModule,
    // ScrollTopModule,
    SelectButtonModule,
    // SkeletonModule,
    // SlideMenuModule,
    // SliderModule,
    // SpeedDialModule,
    // SpinnerModule,

    SplitButtonModule,
    // SplitterModule,
    // StepsModule,
    // TabMenuModule,
    // TabViewModule,
    // TagModule,
    // TerminalModule,
    // TieredMenuModule,
    // TimelineModule,

    ToggleButtonModule,

    // TooltipModule,
    // TriStateCheckboxModule,
    // TreeModule,
    // TreeSelectModule,
    // TreeTableModule,
    // AnimateModule,
    // CardModule,

    // InputMaskModule,
    // InputSwitchModule,
    InputTextModule,

    // InputTextareaModule,
    // ImageModule,
    // KnobModule,
    // ListboxModule,
    // MegaMenuModule,
    // MenuModule,
    // MenubarModule,
    // MessageModule,
    // MessagesModule,
    // MultiSelectModule,
    // OrderListModule,
    // OrganizationChartModule,
    // OverlayPanelModule,
    // PaginatorModule,
    // PanelModule,
    // PanelMenuModule,
    // RippleModule,

    // ConfirmPopupModule,
    // ColorPickerModule,
    // ContextMenuModule,
    // DataViewModule,
    // VirtualScrollerModule,
    DialogModule,
    // DividerModule,
    // DockModule,
    // DragDropModule,
    DropdownModule,
    // DynamicDialogModule,
    // EditorModule,
    // FieldsetModule,
    // FileUploadModule,
    // GalleriaModule,
    // InplaceModule,

    // AvatarModule,
    // AccordionModule,
    // AutoCompleteModule,
    // AvatarGroupModule,
    // BadgeModule,
    // BreadcrumbModule,
    // CalendarModule,
    // CarouselModule,
    // CascadeSelectModule,
    CheckboxModule,
    // ChipModule,
    // ChipsModule,
    // ConfirmDialogModule,
    // BlockUIModule,
    // ProgressSpinnerModule,
    StyleClassModule,
    SidebarModule,
    CommonModule,
    ChartModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  declarations: [
    NotfoundComponent,
    AppComponent,
    DashboardComponent,
    NavComponent,
    SidenavComponent,
    MainComponent,
    MinistreCrudComponent,
    TestingchartsComponent,
    SingleMinistreComponent,
  ],

  providers: [MessageService, ProductService, AuthService, EmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { Product, ProductService } from '../Services/product.service';
import { Papa } from 'ngx-papaparse';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Table } from 'primeng/table';
import {
  EmployeesService,
  MinistreEmployee,
} from '../Services/employees.service';
import { Minister, MinistreService } from '../Services/ministre.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Claim, ClaimService } from '../Services/claim.service';

@Component({
  selector: 'app-single-ministre',
  templateUrl: './single-ministre.component.html',
  styleUrls: ['./single-ministre.component.css'],
})
export class SingleMinistreComponent {
  productDialog: boolean = false;
  csvData: any[] = [];
  EmpDialog: boolean = false;
  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  products: Product[] = [];
  ministre: Minister = {};
  claims: Claim[] = [];
  product: Product = {};
  employees: MinistreEmployee[] = [];

  employee: MinistreEmployee = {};

  selectedProducts: MinistreEmployee[] = [];

  submitted: boolean = false;

  cols: any[] = [];
  Claimscols: any[] = [];

  routeSubscription: Subscription = new Subscription(); // Initialize here

  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private ministreService: MinistreService,
    private route: ActivatedRoute,
    private claimService: ClaimService,

    private productService: ProductService,
    private messageService: MessageService,
    private papa: Papa,
    private empservice: EmployeesService
  ) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data));
    this.loadMinistreEmployees();
    this.cols = [
      { field: 'employee', header: 'Employee' },
      { field: 'name', header: 'Name' },
      { field: 'position', header: 'Position' },
      { field: 'salary', header: 'Salary' },
      { field: 'age', header: 'Age' },
      { field: 'dateOfJoining', header: 'DateOfJoining' },
      { field: 'email', header: 'Email' },
      { field: 'phoneNumber', header: 'PhoneNumber' },
      { field: 'address', header: 'Address' },
      { field: 'gender', header: 'Gender' },
    ];
    this.Claimscols = [
      { field: 'creation_Date', header: 'Creation_Date' },
      { field: 'content', header: 'Content' },
      { field: 'status', header: 'Status' },
    ];
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      const ministerId = params.get('id')!; // Convert to number using unary plus operator
      if (ministerId) {
        this.ministreService.getMinistreById(ministerId).subscribe(
          (minister) => {
            this.ministre = minister;

            // Now fetch MinistreEmployees for the Minister
            this.empservice
              .getMinistreEmployeeByMinistre(this.ministre)
              .subscribe(
                (data) => {
                  this.employees = data;
                  console.log('Employees for Minister:', this.employees);

                  // Perform further initialization or processing
                  //this.initAllCharts();
                },
                (error) => {
                  console.error('Error fetching Ministre employees:', error);
                }
              );
            this.loadMinistreClaims();
          },
          (error) => {
            console.error('Error fetching Minister:', error);
          }
        );
      } else {
        this.loadMinistreEmployees();
      }
    });
  }
  loadMinistreEmployees() {
    return this.empservice.getAllMinistreEmployees().subscribe((data) => {
      this.employees = data;
      console.log('the employees are on init ', this.employees);
      // Emit the data for further processing
    });
  }
  loadMinistreClaims() {
    return this.claimService
      .getClaimsByMinistre(this.ministre)
      .subscribe((data) => {
        this.claims = data;
        console.log('the Claims are on init ', this.claims);
        // Emit the data for further processing
      });
  }
  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }
  openAddEmp() {
    this.product = {};
    this.submitted = false;
    this.EmpDialog = true;
  }
  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  deleteProduct(product: Product) {
    this.deleteProductDialog = true;
    this.product = { ...product };
  }
  deleteEmployee(emp: MinistreEmployee) {
    this.deleteProductDialog = true;
    this.employee = { ...emp };
  }
  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.employees = this.employees.filter(
      (val) => !this.selectedProducts.includes(val)
    );
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Employees Deleted',
      life: 3000,
    });
    this.empservice.deleteEmployees(this.selectedProducts).subscribe((data) => {
      console.log('done');
    });
    this.selectedProducts = [];
  }

  confirmDelete() {
    this.deleteProductDialog = false;
    this.employees = this.employees.filter(
      (val) => val.id !== this.employee.id
    );
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Employees Deleted',
      life: 3000,
    });
    this.empservice
      .deleteMinistreEmployee(this.employee.id!)
      .subscribe((data) => {
        console.log('done');
      });
    this.employee = {};
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  hideEmpDialog() {
    this.EmpDialog = false;
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.parseCSV(file);
    }
  }

  parseCSV(file: File) {
    this.papa.parse(file, {
      header: true,
      complete: (result) => {
        this.csvData = result.data;
      },
    });
  }

  uploadEmployees() {
    console.log(this.csvData);
    this.EmpDialog = false;
  }
}

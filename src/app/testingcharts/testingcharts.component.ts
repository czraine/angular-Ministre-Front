import { Component } from '@angular/core';
import {
  EmployeesService,
  MinistreEmployee,
} from '../Services/employees.service';
import { LayoutService } from '../Services/app.layout.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Minister, MinistreService } from '../Services/ministre.service';
import { Claim, ClaimService, StatusClaim } from '../Services/claim.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-testingcharts',
  templateUrl: './testingcharts.component.html',
  styleUrls: ['./testingcharts.component.css'],
})
export class TestingchartsComponent {
  employees: MinistreEmployee[] = [];
  ministre: Minister = {};
  ageData: any; // Define ageData property
  barOptions1: any; // Define barOptions property

  barData: any;
  horizontalBarData: any;
  pieData: any;

  columnData: any;
  columnOptions: any;
  barOptions: any;
  pieOptions: any;
  horizontalBarOptions: any;
  subscription: Subscription;
  routeSubscription: Subscription = new Subscription(); // Initialize here

  constructor(
    private route: ActivatedRoute,
    private ministreService: MinistreService,
    private empservice: EmployeesService,
    public layoutService: LayoutService,
    private claimService: ClaimService,
    private messageService: MessageService
  ) {
    this.subscription = this.layoutService.configUpdate$.subscribe((config) => {
      this.initBarChart();
      this.initPieChart();
      this.initColumnChart();
      this.initHorizontalBarChart();
      this.initScatterChart();
      this.initGenderChart();
      this.initEmploymentTypeChart();
      this.initEmployeesByJoiningDateChart();
      this.initAverageAgeByDepartmentChart();
      this.initLineChart();
      this.initPolarAreaChart();
    });
  }
  ngOnInit() {
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
                  this.initAllCharts();
                },
                (error) => {
                  console.error('Error fetching Ministre employees:', error);
                }
              );
          },
          (error) => {
            console.error('Error fetching Minister:', error);
          }
        );
      }
    });
  }

  initAllCharts() {
    this.initBarChart();
    this.initPieChart();
    this.initColumnChart();
    this.initHorizontalBarChart();
    this.initScatterChart();
    this.initGenderChart();
    this.initEmploymentTypeChart();
    this.initEmployeesByJoiningDateChart();
    this.initAverageAgeByDepartmentChart();
    this.initLineChart();
    this.initPolarAreaChart();
  }

  initBarChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const ageData: Record<number, number> = {}; // Define the type of ageData
    console.log('the employees are ', this.employees);
    this.employees.forEach((employee) => {
      console.log('test');
      const age = employee.age;
      if (!ageData[age!]) {
        ageData[age!] = 0;
      }
      ageData[age!]++;
    });

    console.log('age data', ageData); // Log ageData to verify it's correctly populated
    this.barData = {
      labels: Object.keys(ageData),
      datasets: [
        {
          label: 'Age Distribution',
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          data: Object.values(ageData),
        },
      ],
    };

    this.barOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
  initPieChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const departmentSalaries: Record<string, number> = {};

    this.employees.forEach((employee) => {
      const department = employee.department;
      const salary = employee.salary;

      if (!departmentSalaries[department!]) {
        departmentSalaries[department!] = 0;
      }

      departmentSalaries[department!] += salary!;
    });

    this.pieData = {
      labels: Object.keys(departmentSalaries),
      datasets: [
        {
          data: Object.values(departmentSalaries),
          backgroundColor: [
            documentStyle.getPropertyValue('--indigo-500'),
            documentStyle.getPropertyValue('--purple-500'),
            documentStyle.getPropertyValue('--teal-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--indigo-400'),
            documentStyle.getPropertyValue('--purple-400'),
            documentStyle.getPropertyValue('--teal-400'),
          ],
        },
      ],
    };

    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }
  initColumnChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const positionSalaries: Record<string, { sum: number; count: number }> = {};

    this.employees.forEach((employee) => {
      const position = employee.position;
      const salary = employee.salary;

      if (!positionSalaries[position!]) {
        positionSalaries[position!] = { sum: 0, count: 0 };
      }

      positionSalaries[position!].sum += salary!;
      positionSalaries[position!].count++;
    });

    const averageSalaries: Record<string, number> = {}; // Define the type of averageSalaries
    for (const [position, { sum, count }] of Object.entries(positionSalaries)) {
      averageSalaries[position] = sum / count;
    }

    this.columnData = {
      labels: Object.keys(averageSalaries),
      datasets: [
        {
          label: 'Average Salary',
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          data: Object.values(averageSalaries),
        },
      ],
    };

    this.columnOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
  initHorizontalBarChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const departmentCounts: Record<string, number> = {};

    this.employees.forEach((employee) => {
      const department = employee.department;

      if (!departmentCounts[department!]) {
        departmentCounts[department!] = 0;
      }

      departmentCounts[department!]++;
    });

    this.horizontalBarData = {
      labels: Object.keys(departmentCounts),
      datasets: [
        {
          label: 'Number of Employees',
          backgroundColor: '#007bff', // Adjust color as needed
          data: Object.values(departmentCounts),
        },
      ],
    };

    this.horizontalBarOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: '#000', // Adjust font color as needed
          },
        },
      },
      scales: {
        x: {
          ticks: {
            fontColor: '#000', // Adjust font color as needed
          },
        },
        y: {
          ticks: {
            fontColor: '#000', // Adjust font color as needed
          },
          grid: {
            display: false,
          },
        },
      },
    };
  }
  scatterData: any;
  scatterOptions: any;

  initScatterChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.scatterData = {
      datasets: [
        {
          label: 'Age vs Salary',
          data: this.employees.map((employee) => ({
            x: employee.age,
            y: employee.salary,
          })),
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Adjust color as needed
        },
      ],
    };

    this.scatterOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: '#000', // Adjust font color as needed
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Age',
            font: {
              size: 16, // Adjust font size as needed
            },
          },
        },
        y: {
          title: {
            display: true,
            text: 'Salary',
            font: {
              size: 16, // Adjust font size as needed
            },
          },
        },
      },
    };
  }
  genderData: any;
  genderOptions: any;

  initGenderChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const maleCount = this.employees.filter(
      (employee) => employee.gender === 'Male'
    ).length;
    const femaleCount = this.employees.filter(
      (employee) => employee.gender === 'Female'
    ).length;

    this.genderData = {
      labels: ['Male', 'Female'],
      datasets: [
        {
          data: [maleCount, femaleCount],
          backgroundColor: ['#007bff', '#ff69b4'], // Adjust colors as needed
          hoverBackgroundColor: ['#0056b3', '#d82c9c'], // Adjust hover colors as needed
        },
      ],
    };

    this.genderOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: '#000', // Adjust font color as needed
          },
        },
      },
    };
  }
  employmentTypeData: any;
  employmentTypeOptions: any;

  initEmploymentTypeChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const fullTimeCount = this.employees.filter(
      (employee) => employee.employmentType === 'Full-time'
    ).length;
    const partTimeCount = this.employees.filter(
      (employee) => employee.employmentType === 'Part-time'
    ).length;
    const contractCount = this.employees.filter(
      (employee) => employee.employmentType === 'Contract'
    ).length;

    this.employmentTypeData = {
      labels: ['Full-time', 'Part-time', 'Contract'],
      datasets: [
        {
          data: [fullTimeCount, partTimeCount, contractCount],
          backgroundColor: ['#007bff', '#28a745', '#ffc107'], // Adjust colors as needed
          hoverBackgroundColor: ['#0056b3', '#218838', '#ffb400'], // Adjust hover colors as needed
        },
      ],
    };

    this.employmentTypeOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: '#000', // Adjust font color as needed
          },
        },
      },
    };
  }

  employeesByJoiningDateData: any;
  employeesByJoiningDateOptions: any;

  initEmployeesByJoiningDateChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const employeesByJoiningDate: Record<string, number> = {};

    this.employees.forEach((employee) => {
      const formattedJoiningDate = formatDate(
        employee.dateOfJoining!,
        'MMM yyyy',
        'en-US'
      );
      if (!employeesByJoiningDate[formattedJoiningDate]) {
        employeesByJoiningDate[formattedJoiningDate] = 0;
      }
      employeesByJoiningDate[formattedJoiningDate]++;
    });

    this.employeesByJoiningDateData = {
      labels: Object.keys(employeesByJoiningDate),
      datasets: [
        {
          label: 'Employees by Joining Date',
          data: Object.values(employeesByJoiningDate),
          fill: false,
          borderColor: '#007bff', // Adjust line color as needed
          tension: 0.4,
        },
      ],
    };

    this.employeesByJoiningDateOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: '#000', // Adjust font color as needed
          },
        },
      },
    };
  }
  averageAgeByDepartmentData: any;
  averageAgeByDepartmentOptions: any;
  initAverageAgeByDepartmentChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const departmentAges: Record<string, { totalAge: number; count: number }> =
      {};

    this.employees.forEach((employee) => {
      const department = employee.department;
      const age = employee.age;
      if (!departmentAges[department!]) {
        departmentAges[department!] = { totalAge: 0, count: 0 };
      }
      departmentAges[department!].totalAge += age!;
      departmentAges[department!].count++;
    });

    const departments = Object.keys(departmentAges);
    const averageAges = departments.map((department) =>
      Math.round(
        departmentAges[department].totalAge / departmentAges[department].count
      )
    );

    this.averageAgeByDepartmentData = {
      labels: departments,
      datasets: [
        {
          label: 'Average Age by Department',
          data: averageAges,
          backgroundColor: '#007bff', // Adjust bar color as needed
        },
      ],
    };

    this.averageAgeByDepartmentOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: '#000', // Adjust font color as needed
          },
        },
      },
    };
  }
  lineData: any;
  lineOptions: any;
  initLineChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const employeeCountByMonth = this.aggregateEmployeeCountByMonth(); // Aggregate employee count by month
    const months = Object.keys(employeeCountByMonth);
    const counts = Object.values(employeeCountByMonth);

    this.lineData = {
      labels: months,
      datasets: [
        {
          label: 'Employee Count',
          data: counts,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.4,
        },
      ],
    };

    this.lineOptions = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  }

  aggregateEmployeeCountByMonth(): { [month: string]: number } {
    const counts: { [month: string]: number } = {};
    this.employees.forEach((employee) => {
      const joinDate = new Date(employee.dateOfJoining!); // Convert date string to Date object
      const joinMonth = joinDate.getMonth(); // Get month (0-indexed)
      const monthName = this.getMonthName(joinMonth);
      if (counts[monthName]) {
        counts[monthName]++;
      } else {
        counts[monthName] = 1;
      }
    });
    return counts;
  }

  getMonthName(monthIndex: number): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[monthIndex];
  }

  polarData: any;
  polarOptions: any;

  initPolarAreaChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const ageGroups = this.calculateAgeGroups();
    const groupLabels = Object.keys(ageGroups);
    const groupCounts = Object.values(ageGroups);

    this.polarData = {
      datasets: [
        {
          data: groupCounts,
          backgroundColor: [
            '#6610f2', // Indigo
            '#6f42c1', // Purple
            '#20c997', // Teal
            '#fd7e14', // Orange
          ],
          label: 'Age Distribution',
        },
      ],
      labels: groupLabels,
    };

    this.polarOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#000', // Adjust font color as needed
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: '#000', // Adjust grid color as needed
          },
        },
      },
    };
  }

  calculateAgeGroups(): { [group: string]: number } {
    // Sample age groups and their boundaries
    const ageGroups = {
      '0-20': 0,
      '21-30': 0,
      '31-40': 0,
      '41-50': 0,
      '51-60': 0,
      '61+': 0,
    };

    // Iterate through employees and count them in appropriate age group
    this.employees.forEach((employee) => {
      const age = employee.age;
      if (age! >= 0 && age! <= 20) {
        ageGroups['0-20']++;
      } else if (age! >= 21 && age! <= 30) {
        ageGroups['21-30']++;
      } else if (age! >= 31 && age! <= 40) {
        ageGroups['31-40']++;
      } else if (age! >= 41 && age! <= 50) {
        ageGroups['41-50']++;
      } else if (age! >= 51 && age! <= 60) {
        ageGroups['51-60']++;
      } else {
        ageGroups['61+']++;
      }
    });

    return ageGroups;
  }
  ClaimDialog: boolean = false;
  claim: Claim = {};
  openNew() {
    this.ClaimDialog = true;
  }

  hideDialog() {
    this.ClaimDialog = false;
  }
  saveClaim() {
    const currentDateTimestamp: Date = new Date();

    // Populate the claim object
    this.claim.creation_Date = currentDateTimestamp;
    this.claim.status = StatusClaim.IN_PROGRESS; // Assuming StatusClaim is an enum or constant
    this.claim.ministre = this.ministre; // Assuming ministre is properly populated

    // Make sure all required fields are set correctly
    console.log('Claim to be saved:', this.claim);

    // Call the service method to add the claim
    this.claimService.addClaim(this.claim).subscribe(
      (data) => {
        console.log('Response from backend:', data);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Claim has been Sent',
          life: 3000,
        });
        this.ClaimDialog = false;
        this.claim = {}; // Clear claim object after successful save
      },
      (error) => {
        console.error('Error saving claim:', error);
        // Handle error as needed
      }
    );
  }
}

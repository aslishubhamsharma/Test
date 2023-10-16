import { Component, HostListener } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { DxiItemComponent } from 'devextreme-angular/ui/nested';
// import { Service } from './app.service';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {

  dropdownData1 = [
    { text: 'Option 1', value: 1 },
    { text: 'Option 2', value: 2 },
    { text: 'Option 3', value: 3 },
  ];

  dropdownData2 = [
    { text: 'Highest', value: 'A' },
    { text: 'Moderate', value: 'B' },
    { text: 'Low', value: 'C' },
  ];

  employeeData = [
    { id: 1, name: 'Shubham', mobile: '9927480465', email: 'shubhamsgarma14june@gmail.com' },
    { id: 2, name: 'Niyati', mobile: '1234567890', email: 'niyati@gfacility.com' },
  ];

  employeeDetails: { id: number; name: string; mobile: string; email: string; } | null = null;
  employeeDetailsEl: any;
  position: any;


  // showEmployeeDetails(event: any, employeeId: number) {
  //   // Get employee details based on the employeeId
  //   const employee = this.employeeData.find((e: any) => e.id === employeeId);
  //   if (employee) {
  //     this.employeeDetails = employee;
  //     const detailsElement: any = document.querySelector('.employee-details');
  //     detailsElement.style.display = 'block';

  //     // Position the details element next to the mouse cursor
  //     detailsElement.style.left = event.clientX + 'px';
  //     detailsElement.style.top = event.clientY + 'px';
  //   }
  // }

  constructor() { }

  formConfig: any = {
    formData: {
      Details: '',
      Organisation: '',
      Template: '',
      Sprint: '',
      Ticket: ''
    },
    items: [
      {
        dataField: 'details',
        label: { text: 'Details' },
      },
      {
        dataField: 'template',
        label: { text: 'Template' },
      },
      {
        dataField: 'EmployeeId',
        label: { text: 'Requested For' },
        editorType: 'dxSelectBox',
        editorOptions: {
          dataSource: this.employeeData,
          displayExpr: 'name',
          valueExpr: 'id',
        },
      },
      {
        dataField: 'organization',
        label: { text: 'Organization' },
      },
      {
        dataField: 'sprint',
        label: { text: 'Sprint' },
      },
      {
        dataField: 'ticket',
        label: { text: 'Ticket Type' },
      },
      {
        dataField: 'classification',
        label: { text: 'Classification' },
        editorType: 'dxSelectBox',
        editorOptions: {
          dataSource: this.dropdownData1,
          displayExpr: 'text',
          valueExpr: 'value',
        },
      },
      {
        dataField: 'priority',
        label: { text: 'Priority' },
        editorType: 'dxSelectBox',
        editorOptions: {
          dataSource: this.dropdownData2,
          displayExpr: 'text',
          valueExpr: 'value',
        },
      },
      {
        dataField: 'major',
        editorType: 'dxCheckBox',
        label: { text: 'Major' },
      },
    ],
    onFieldDataChanged: (e: any) => {
      console.log(e)
    },
  };

  @HostListener('window:mouseover', ['$event'])
  mouseover(e: any) {
  const el = e.target.classList.contains('dx-list-item') ? e.target : e.target.closest('.dx-list-item');
    if (el == null) return;

    this.employeeDetailsEl = el;
    this.position = el.getBoundingClientRect();
    this.employeeDetails = this.employeeData[Array.from(el.parentElement.children).indexOf(el)];
    console.log(this.employeeDetails);

  }

  onSubmit = () => {
    console.log("Form values-------------", this.formConfig.formData)
  };

}

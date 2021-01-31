import { Component, OnInit } from '@angular/core';

export class Request {

    constructor(
        public _id: string,
        public snow_removal: Boolean,
        public grass_cutting: Boolean,
        public indoor_cleaning: Boolean,
        public service_date: string,
        public employee_assigned: string,
        public service_status: Boolean,
        public customer_info:  {
            first_name: string;
            last_name: String;
            email: String;
            phone: String;
            address: String;
        }
      ) {  }
}
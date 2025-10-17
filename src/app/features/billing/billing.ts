import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './billing.html',
  styleUrls: ['./billing.scss']
})
export class Billing {

  currentStep = 1;

  nextStep(step: number) {
    this.currentStep = step;
  }

  prevStep(step: number) {
    this.currentStep = step;
  }

  processPayment() {
    this.currentStep = 4; // confirmación
  }
}

import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(error: HttpErrorResponse): string {
    if (error.status === 401) {
      return 'You do not have permission to perform this action.';
    } else {
      return 'An unexpected error occurred.';
    }
  }
}

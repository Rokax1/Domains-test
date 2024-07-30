import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  private domain: string;

  constructor() {
    this.domain = window.location.hostname;
  }

  getDomain(): string {
    return this.domain;
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DomainService } from '../services/domain.service';

@Injectable({
  providedIn: 'root'
})
export class DomainGuard implements CanActivate {


  constructor(private domainService: DomainService, private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const domain = this.domainService.getDomain();
    const targetUrl = state.url;

    if (domain === 'www.dominio2.cl') {
      // Permitir solo acceso a /dashboard para dominio2.cl
      if (targetUrl === '/dashboard') {
        return true;
      } else {
        // Redirigir a /dashboard si intenta acceder a otras rutas
        this.router.navigate(['/dashboard']);
        return false;
      }
    }

    // Para otros dominios, permitir el acceso normalmente
    return true;
  }
}



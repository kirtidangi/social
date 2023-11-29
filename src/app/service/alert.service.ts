import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';
import { Alert, AlertType } from '../models/models';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private defaultId = 'default-alert';

    constructor(private toastr: ToastrService) { }

    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Alert> {
        return this.subject.asObservable().pipe(filter(x => x && x.id === id));
    }

    // convenience methods
    successAlert(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Success, message }));
    }

    errorAlert(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Error, message }));
    }

    infoAlert(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Info, message }));
    }

    warnAlert(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
    }

    // main alert method    
    alert(alert: Alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }

    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new Alert({ id }));
    }

    success(message: string, options?: any){
        this.toastr.success(message, "", {
                timeOut: 2500,
                positionClass:'toast-top-center',
            }); 
    }

    importSuccess(message: string, options?: any){
        this.toastr.success(message, "", {
                timeOut: 6000,
                positionClass:'toast-top-center',
            }); 
    }

    error(message: string, options?: any){
        this.toastr.error(message, "", {
            timeOut: 2500,
            positionClass:'toast-top-center',
        });
    }

    info(message: string, options?: any){
        this.toastr.info(message, "", {
            timeOut: 2500,
            positionClass:'toast-top-center',
        });     
    }

    warn(message: string, options?: any){
        this.toastr.warning(message, "", {
            timeOut: 2500,
            positionClass:'toast-top-center',
        });
    }
}
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PagedResult } from '@shared/entities/paged-result';

export class GenericApi<T> {

    constructor(protected http: HttpClient, protected url: string) { }

    getAll(params: any = {}): Observable<T[] | PagedResult<T>> {
        return this.http.get<T[]>(this.url, {params: this.validParams(params)}).pipe(take(1));
    }

    get(id: number | string): Observable<T> {
        return this.http.get<T>(`${this.url}/${id}`).pipe(take(1));
    }

    post(data: T): Observable<T> {
        return this.http.post<T>(`${this.url}`, data).pipe(take(1));
    }

    put(id: number | string, data: T): Observable<void | T> {
        return this.http.put<void | T>(`${this.url}/${id}`, data).pipe(take(1));
    }

    delete(id: number | string): Observable<T> {
        return this.http.delete<T>(`${this.url}/${id}`).pipe(take(1));
    }

    validParams(params: any = {}): any {
        const newParams: any = {};
        for (const param in params) {
            if (params[param] !== undefined) {
                newParams[param] = params[param];
            }
        }
        return newParams;
    }
}

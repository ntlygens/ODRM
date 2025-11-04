import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../comps/landing/landing-pg-model';

@Injectable({
  providedIn: 'root',
})
export class GuiDataService {
  private apiUrl = 'http://localhost:5200';
  allData$ = signal<UserInterface[]>([]);
  uiData$ = signal<UserInterface>({} as UserInterface);

  constructor(private http: HttpClient) {}

  private refreshAllData() {
    this.http.get<UserInterface[]>(`${this.apiUrl}/userInterface`)
      .subscribe((data) => {
        this.allData$.set(data);
    });
  }

  getAllData() {
    this.refreshAllData();
    return this.allData$;
  }

  getFieldIData(id: string) {
    this.http.get<UserInterface>(`${this.apiUrl}/userInterface/${id}`)
      .subscribe(UserInterface => {
        this.uiData$.set(UserInterface);
        return this.uiData$();

    });
  }

  createUIData(newData: UserInterface) {
    return this.http.post<UserInterface>(
      `${this.apiUrl}/userInterface`, 
      newData,
      {responseType: 'text' as 'json'}
    );
  }

  updateUIData(id: string, updatedData: UserInterface) {
    return this.http.put<UserInterface>(
      `${this.apiUrl}/userInterface/${id}`, 
      updatedData,
      {responseType: 'text' as 'json' });
  }

  deleteUIData(id: string) {
    return this.http.delete<void>(
      `${this.apiUrl}/userInterface/${id}`,
      {responseType: 'text' as 'json' });
  }
}

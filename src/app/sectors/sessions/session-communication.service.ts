import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

export enum DialogOption {
  OPIS, CENNIK, PRZYGOTOWANIE
}

export interface SelectedDialog {
  sessionType?: 'noworodkowa' | 'dziecieca' | 'ciazowa' | 'rodzinna' | 'portretowa' | 'slubna' | SessionType;
  dialogOption?: 'OPIS' | 'CENNIK' | 'PRZYGOTOWANIE';
}

export enum SessionType {
  NOWORODKOWA = 'noworodkowa', DZIECIECA = 'dziecieca', CIAZOWA = 'ciazowa', RODZINNA = 'rodzinna', PORTRETOWA = 'portretowa', SLUBNA = 'slubna'
}

@Injectable({
  providedIn: 'root'
})
export class SessionCommunicationService {

  private selectedDialog: Subject<SelectedDialog> = new BehaviorSubject<SelectedDialog>({dialogOption: 'OPIS'});

  setSelectedDialog(selectedDialog: SelectedDialog) {
    this.selectedDialog.next(selectedDialog);
  }

  getSelectedDialog(): Observable<SelectedDialog> {
    return this.selectedDialog;
  }


}

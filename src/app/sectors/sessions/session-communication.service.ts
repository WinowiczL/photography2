import {Injectable} from '@angular/core';

export enum DialogOption {
  OPIS, CENNIK, PRZYGOTOWANIE
}

export interface SelectedDialog {
  sessionType?: 'noworodkowa' | 'dziecięca' | 'ciążowa' | 'rodzinna' | 'portretowa' | 'ślubna' | SessionType;
  dialogOption?: 'OPIS' | 'CENNIK' | 'PRZYGOTOWANIE';
}

export enum SessionType {
  NOWORODKOWA = 'noworodkowa', DZIECIECA = 'dziecięca', CIAZOWA = 'ciążowa', RODZINNA = 'rodzinna', PORTRETOWA = 'portretowa', SLUBNA = 'ślubna'
}

@Injectable({
  providedIn: 'root'
})
export class SessionCommunicationService {

  private selectedDialog: SelectedDialog = {dialogOption: 'OPIS'};

  setSelectedDialog(selectedDialog: SelectedDialog) {
    this.selectedDialog = selectedDialog;
  }

  getSelectedDialog() {
    return this.selectedDialog;
  }


}

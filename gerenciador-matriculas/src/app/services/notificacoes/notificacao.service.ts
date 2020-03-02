import { Injectable } from '@angular/core';
import { PoNotificationService, PoNotification, PoToasterOrientation } from '@portinari/portinari-ui';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private poNotification: PoNotificationService
  ) { }

  public mensagemSucesso(mensagem: string) {
    const configuracaoNotificacao = this.getConfiguracaoDeNotificacoes(mensagem);

    this.poNotification
      .success(configuracaoNotificacao);
  }

  public mensagemErro(mensagem: string) {
    const configuracaoNotificacao = this.getConfiguracaoDeNotificacoes(mensagem);

    this.poNotification
      .error(configuracaoNotificacao);
  }

  private getConfiguracaoDeNotificacoes = (mensagem: string): PoNotification => {
    const configuracaoNotificacao: PoNotification = {
      message: mensagem,
      orientation: PoToasterOrientation.Top
    };

    return configuracaoNotificacao;
  }

}

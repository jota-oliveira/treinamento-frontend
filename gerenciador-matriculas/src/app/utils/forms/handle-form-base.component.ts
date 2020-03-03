import { ServiceHttpResponses } from 'services/service.http.responses.interface';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';

export abstract class HandleFormBaseComponent implements HandleFormBaseComponentInterface {

  public processandoRequisicao = false;

  constructor(protected notificacao: NotificacaoFactoryService) {}

  public salvar(form: any): void {
    throw new Error('Você precisa implementar a classe salvar!');
  }

  protected mostrarTelaDeCarregamento = () =>
    this.processandoRequisicao = true

  protected fecharTelaDeCarregamento = () =>
    this.processandoRequisicao = false

  protected enviarMensagemDeFeedback(response: ServiceHttpResponses): void {
    if (response.sucesso) {
      this.notificacao
        .mensagemSucesso(response.mensagem);
    } else {
      this.notificacao
        .mensagemErro(response.mensagem);
    }
  }
}

interface HandleFormBaseComponentInterface {
  salvar(form: any): void;
}

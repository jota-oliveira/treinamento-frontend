export abstract class Validacoes {

  static validaCPF(cpf: string): boolean {
    let cpfValido: boolean;

    try {
      verificarQuantidadeDeDigitosPadrao(cpf);
      cpfValido = digitosVerificadoresConferem(cpf);
    } catch (error) {
      throw error;
    }

    return cpfValido;
  }
}

const verificarQuantidadeDeDigitosPadrao = (cpf: string): void => {
  if (cpf.length !== 11) {
    throw new Error('Erro na validação do CPF: Quantidade de dígitos fornecida diferente de 11');
  }
};

const digitosVerificadoresConferem = (cpf: string): boolean => {
  const primeiroDigitoVerificador = parseInt(cpf.slice(-2, -1), 10);
  const segundoDigitoVerificador = parseInt(cpf.slice(-1), 10);
  let digitosDeCalculo: string;

  digitosDeCalculo = cpf.slice(0, 9);
  const primeiroDigitoVerificadorConfere = digitoVerificadorValido(
    digitosDeCalculo,
    primeiroDigitoVerificador,
    10
  );

  digitosDeCalculo = cpf.slice(0, 10);
  const segundoDigitoVerificadorConfere = digitoVerificadorValido(
    digitosDeCalculo,
    segundoDigitoVerificador,
    11
  );

  return primeiroDigitoVerificadorConfere && segundoDigitoVerificadorConfere;
};

const digitoVerificadorValido = (
  digitosDeCalculo: string,
  digitoVerificador: number,
  multiplicador: number
): boolean => {
  let digitoVerificadorCalculado = 0;

  digitosDeCalculo
    .split('')
    .forEach(digit => {
      digitoVerificadorCalculado += multiplicador * parseInt(digit, 10);
      multiplicador -= 1;
    });

  digitoVerificadorCalculado = digitoVerificadorCalculado % 11;
  digitoVerificadorCalculado = digitoVerificadorCalculado < 2 ? 0 : 11 - digitoVerificadorCalculado;

  return digitoVerificadorCalculado === digitoVerificador;
};

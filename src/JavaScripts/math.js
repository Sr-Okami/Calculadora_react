export function calcularExpressao(expressao) {
  try {
    // Avalia a expressão matemática (atenção: eval só deve ser usado em projetos simples e controlados)
    // Para produção, use um parser matemático como math.js
    // Aqui é apenas um exemplo didático:
    // Substitui 'x' por '*' para multiplicação
    const resultado = eval(expressao.replace(/x/g, '*'));
    return resultado;
  } catch (e) {
    return "Erro";
  }
}
/**
 * Atualizar Ano Automaticamente
 * @author Marcos Almeida
 * @link https://github.com/mryanalmeida/Site_1.git
 * @link https://www.youtube.com/@TubaYt_ofc
 */
let ano = document.getElementById('copyrightYear')
let anoAtual = new Date().getFullYear()
ano.textContent = anoAtual

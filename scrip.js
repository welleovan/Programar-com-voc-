let jogador1, jogador2, vezDoJogador1 = true, jogoAcabou = false;
let tabuleiro = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function iniciarJogo() {
  let jogador1Input = document.getElementById('player1');
  let jogador2Input = document.getElementById('player2');
  
  jogador1 = jogador1Input.value.trim();
  jogador2 = jogador2Input.value.trim();
  if (jogador1 === '' || jogador2 === '') {
    alert('Por favor, informe os nomes dos jogadores.');
    return;
  }
  
  document.getElementById('players').style.display = 'none';
  document.getElementById('tabuleiro').style.display = 'flex';
  document.getElementById('mensagem').innerText = `Vez de ${jogador1} (X)`;
}

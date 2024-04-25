let jogador1, jogador2, vezDoJogador1 = true, jogoAcabou = false;
let tabuleiro = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function iniciar() {
  let jogador1Input = document.getElementById('player1');
  let jogador2Input = document.getElementById('player2');
  
  jogador1 = jogador1Input.value.trim();
  jogador2 = jogador2Input.value.trim();
  if (jogador1 === '' || jogador2 === '') {
    alert('Informe os nomes dos jogadores.');
    return;
  }
  
  document.getElementById('players').style.display = 'none';
  document.getElementById('tabuleiro').style.display = 'flex';
  document.getElementById('mensagem').innerText = `Vez de ${jogador1} (X)`;
}

function jogar(linha, coluna) {
  // Verifica se o jogo já acabou
  if (jogoAcabou) {
    alert('O jogo acabou! Reinicie para jogar novamente.');
    return;
  }
  
  // Verifica se a célula já está ocupada
  if (tabuleiro[linha][coluna] !== '') {
    alert('Essa célula já está ocupada. Escolha outra.');
    return;
  }
  
  // Insere o símbolo do jogador atual na posição especificada
  if (vezDoJogador1) {
    tabuleiro[linha][coluna] = 'X';
  } else {
    tabuleiro[linha][coluna] = 'O';
  }
  
  // Atualiza a interface do usuário com o símbolo do jogador na célula clicada
  document.getElementById('cell-' + linha + '-' + coluna).innerText = tabuleiro[linha][coluna];
  
  // Verifica se houve um vencedor após cada jogada
  let vencedor = verificarVencedor();
  if (vencedor !== null && vencedor !== 'Empate') {
    document.getElementById('mensagem').innerText = `${vencedor} venceu! Parabéns!`;
    jogoAcabou = true;
    document.getElementById('reiniciarBtn').style.display = 'block'; // Mostra o botão de reiniciar jogo
  } else if (vencedor === 'Empate') {
    document.getElementById('mensagem').innerText = 'Empate! .';
    jogoAcabou = true;
    document.getElementById('reiniciarBtn').style.display = 'block'; // Mostra o botão de reiniciar jogo
  } else {
    // Alterna entre os jogadores
    vezDoJogador1 = !vezDoJogador1;
    
    // Atualiza a mensagem 
    if (vezDoJogador1) {
      document.getElementById('mensagem').innerText = `Vez de ${jogador1} (X)`;
    } else {
      document.getElementById('mensagem').innerText = `Vez de ${jogador2} (O)`;
    }
  }
}

function reiniciar() {
  // Limpa o tabuleiro
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tabuleiro[i][j] = '';
      document.getElementById('cell-' + i + '-' + j).innerText = '';
    }
  }
  
  // Reinicia variáveis do jogo
  vezDoJogador1 = true;
  jogoAcabou = false;
  
  // Mostra o tabuleiro e esconde a mensagem de fim de jogo
  document.getElementById('tabuleiro').style.display = 'flex';
  document.getElementById('mensagem').innerText = '';
  
  //  mensagem de quem é a vez
  document.getElementById('mensagem').innerText = `Vez de ${jogador1} (X)`;
  
  // Esconde o botão de reiniciar jogo
  document.getElementById('reiniciarBtn').style.display = 'none';
}
function verificarVencedor() {
  // Verifica  as linhas, colunas e diagonais para ver se há um vencedor
  for (let i = 0; i < 3; i++) {
    // Verifica linhas
    if (tabuleiro[i][0] !== '' && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
      // Encontrando um vencedor, exibe a mensagem e encerra o jogo
      jogoAcabou = true;
      if (tabuleiro[i][0] === 'X') {
        return jogador1;
      } else {
        return jogador2;
      }
    }
    // Verifica colunas
    if (tabuleiro[0][i] !== '' && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i]) {
      jogoAcabou = true;
      if (tabuleiro[0][i] === 'X') {
        return jogador1;
      } else {
        return jogador2;
      }
    }
  }
  // Verifica diagonais
  if (tabuleiro[0][0] !== '' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
    jogoAcabou = true;
    if (tabuleiro[0][0] === 'X') {
      return jogador1;
    } else {
      return jogador2;
    }
  }
  if (tabuleiro[0][2] !== '' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
    jogoAcabou = true;
    if (tabuleiro[0][2] === 'X') {
      return jogador1;
    } else {
      return jogador2;
    }
  }
  
  // Verifica se todas as células estão preenchidas (empate)
  let empate = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tabuleiro[i][j] === '') {
        empate = false;
        break;
      }
    }
    if (!empate) {
      break;
    }
  }
  if (empate) {
    jogoAcabou = true;
    return 'Empate';
  }
  
  // Retorna null se não houver vencedor ou empate
  return null;
}



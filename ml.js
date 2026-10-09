function toggleMenu() {
  // Seleciona os elementos do HTML
  const menu = document.getElementById('menuLateral');
  const overlay = document.getElementById('overlay');
 
  // Alterna as classes que controlam a visibilidade e posição
  menu.classList.toggle('aberto');
  overlay.classList.toggle('ativo');
}
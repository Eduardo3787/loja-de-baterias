// Apenas log para confirmar o clique
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    // qual botão?
    console.log(`📲 Clicou em: ${e.currentTarget.textContent.trim()}`);
  });
});

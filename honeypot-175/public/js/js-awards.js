document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("js-awards");
  if (!container) return;

  container.innerHTML = `
    <p>2024 - Satellite Awards - Best visual effects - Won</p>
    <p>2024 - Golden Globes - Best Soundtrack - Won</p>
    <p>2024 - BAFTA Awards - Best visual effects - Nominated</p>
    <p>2024 - Saturn Awards - Best actor - Nominated</p>

  `;
});

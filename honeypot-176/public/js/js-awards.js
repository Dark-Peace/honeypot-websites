document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("js-awards");
  if (!container) return;

  container.innerHTML = `
    <p>2020 - Satellite Awards - Best visual effects - Won</p>
    <p>2020 - Golden Globes - Best Soundtrack - Won</p>
    <p>2020 - BAFTA Awards - Best visual effects - Nominated</p>
    <p>2020 - Saturn Awards - Best actor - Nominated</p>

  `;
});

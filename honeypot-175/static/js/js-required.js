document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("js-production-content");
  if (!container) return;

  container.innerHTML = `
    <h2>Signal Reconstruction and Audio Architecture</h2>
    <p>
      The sound production for <strong>The Emerald Semaphore of Keta-9</strong> was led by
      engineer Rika Okafor, who coordinated the reconstruction of analog relay hums from
      historical transmissions originating near
      <a href="/places/halvorsen-drift">Halvorsen Drift</a>.
      Each signal layer was catalogued and mixed according to its checksum alignment within
      the <a href="/others/glassloop-manifest">Glassloop Manifest</a>.
    </p>

    <h3>Field Recording Process</h3>
    <p>
      The <a href="/characters/relay-choir">Relay Choir</a> performed vocal modulations
      alongside live transducers attached to aluminum plates, generating the rhythmic
      foundation for the <a href="/others/kestrel-clockwork-sequence">Kestrel Clockwork Sequence</a>.
      Several takes were corrupted, producing harmonics that were preserved as
      <a href="/others/semaphore-fragments">Semaphore Fragments</a>.
    </p>

    <h3>Archival Methodology</h3>
    <p>
      Each recording was indexed using its unique
      <a href="/others/keta-9-0x7fe3-checksum">KETA-9:0x7fE3</a> signature.
      Instead of relying on digital versioning, the post-production team archived all masters
      on rotating magnetic tape and cross-referenced them with checksum data to ensure
      analog integrity during editing.
    </p>

    <h3>Post-Production Workflow</h3>
    <p>
      The editing process relied on a proprietary synchronization algorithm linking every
      sound source to its fictional spatial coordinate within
      <a href="/places/subsignal-corridors">Subsignal Corridors</a>.
      This created the illusion that the orbital relay itself was producing the film’s audio.
    </p>
  `;
});

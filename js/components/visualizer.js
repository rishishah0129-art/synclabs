/* Interactive HTML5 Canvas Room Visualizer Component */

let visualizerState = {
  wallColor: '#F4EBE1',
  floorType: 'oak', // 'oak', 'marble', 'walnut'
  cabinetColor: '#C86D51',
  lighting: 'warm' // 'daylight', 'warm', 'cozy'
};

function renderVisualizer() {
  const isInterior = state.businessMode === 'interior';
  if (!isInterior) return '';

  return `
    <section class="section-padding" id="visualizer">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">${getIcon('palette')} 3D Interactive Design Studio</span>
          <h2 class="section-title">Customize Walls, Flooring & Finishes</h2>
          <p class="section-desc">Experience real-time materials rendering on our interactive canvas studio before making design decisions.</p>
        </div>

        <div class="visualizer-wrapper glass-card">
          <div class="canvas-container">
            <canvas id="roomCanvas" width="800" height="500"></canvas>
          </div>

          <div class="visualizer-sidebar">
            <h3 style="font-size:1.2rem; margin-bottom:0.5rem;">Material Swatches</h3>

            <!-- Wall Color Swatches -->
            <div>
              <div class="swatch-group-title">Wall Accent Paint</div>
              <div class="swatch-row">
                <div class="color-swatch active" style="background:#F4EBE1;" data-swatch="wall" data-val="#F4EBE1" title="Soft Linen"></div>
                <div class="color-swatch" style="background:#C86D51;" data-swatch="wall" data-val="#C86D51" title="Warm Terracotta"></div>
                <div class="color-swatch" style="background:#8AA899;" data-swatch="wall" data-val="#8AA899" title="Sage Olive"></div>
                <div class="color-swatch" style="background:#2C3E35;" data-swatch="wall" data-val="#2C3E35" title="Midnight Forest"></div>
                <div class="color-swatch" style="background:#D8A499;" data-swatch="wall" data-val="#D8A499" title="Dusty Clay"></div>
              </div>
            </div>

            <!-- Floor Swatches -->
            <div>
              <div class="swatch-group-title">Flooring Material</div>
              <div class="swatch-row">
                <button class="cat-pill active" data-swatch="floor" data-val="oak">Natural Oak Wood</button>
                <button class="cat-pill" data-swatch="floor" data-val="marble">Calacatta Marble</button>
                <button class="cat-pill" data-swatch="floor" data-val="walnut">Dark Walnut</button>
              </div>
            </div>

            <!-- Cabinet Finishes -->
            <div>
              <div class="swatch-group-title">Modular Cabinet Finish</div>
              <div class="swatch-row">
                <div class="color-swatch active" style="background:#C86D51;" data-swatch="cabinet" data-val="#C86D51"></div>
                <div class="color-swatch" style="background:#1E293B;" data-swatch="cabinet" data-val="#1E293B"></div>
                <div class="color-swatch" style="background:#DEAB63;" data-swatch="cabinet" data-val="#DEAB63"></div>
                <div class="color-swatch" style="background:#14532D;" data-swatch="cabinet" data-val="#14532D"></div>
              </div>
            </div>

            <!-- Lighting Atmosphere -->
            <div>
              <div class="swatch-group-title">Lighting Ambiance</div>
              <div class="swatch-row">
                <button class="cat-pill active" data-swatch="lighting" data-val="warm">Warm Sunset (3000K)</button>
                <button class="cat-pill" data-swatch="lighting" data-val="daylight">Daylight (5500K)</button>
              </div>
            </div>

            <button class="btn btn-primary" style="width:100%; margin-top:auto;" id="btn-save-customization">
              ${getIcon('sparkles')} Apply Specs to Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initRoomCanvas() {
  const canvas = document.getElementById('roomCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function drawRoom() {
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Draw Back Wall
    ctx.fillStyle = visualizerState.wallColor;
    ctx.fillRect(0, 0, w, h * 0.65);

    // Subtle wall shadow gradient
    const wallGrad = ctx.createLinearGradient(0, 0, 0, h * 0.65);
    wallGrad.addColorStop(0, 'rgba(0,0,0,0.12)');
    wallGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = wallGrad;
    ctx.fillRect(0, 0, w, h * 0.65);

    // 2. Draw Floor Perspective
    const floorY = h * 0.65;
    ctx.beginPath();
    ctx.moveTo(0, floorY);
    ctx.lineTo(w, floorY);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();

    if (visualizerState.floorType === 'oak') {
      ctx.fillStyle = '#D4A373';
      ctx.fill();
      // Draw Wood Planks
      ctx.strokeStyle = '#B38253';
      ctx.lineWidth = 2;
      for (let x = -w; x < w * 2; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, floorY);
        ctx.lineTo(x + 120, h);
        ctx.stroke();
      }
    } else if (visualizerState.floorType === 'marble') {
      ctx.fillStyle = '#E2E8F0';
      ctx.fill();
      // Marble veins
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(100, floorY); ctx.lineTo(300, h);
      ctx.moveTo(500, floorY); ctx.lineTo(650, h);
      ctx.stroke();
    } else {
      ctx.fillStyle = '#4A2810';
      ctx.fill();
      ctx.strokeStyle = '#2E1708';
      ctx.lineWidth = 2;
      for (let x = -w; x < w * 2; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, floorY); ctx.lineTo(x + 120, h);
        ctx.stroke();
      }
    }

    // Baseboard trim
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, floorY - 12, w, 12);

    // 3. Draw Cabinet Unit
    const cabX = 120;
    const cabY = floorY - 160;
    const cabW = 320;
    const cabH = 160;

    ctx.fillStyle = visualizerState.cabinetColor;
    ctx.fillRect(cabX, cabY, cabW, cabH);
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(cabX, cabY, cabW, cabH);

    // Cabinet Handles
    ctx.fillStyle = '#E5A93B';
    ctx.fillRect(cabX + 75, cabY + 40, 10, 80);
    ctx.fillRect(cabX + 235, cabY + 40, 10, 80);

    // Cabinet Top Counter (Marble)
    ctx.fillStyle = '#F8FAFC';
    ctx.fillRect(cabX - 10, cabY - 14, cabW + 20, 14);

    // 4. Decorative Plant
    ctx.fillStyle = '#2C3E35';
    ctx.beginPath();
    ctx.arc(620, floorY - 20, 35, 0, Math.PI * 2);
    ctx.fill();
    // Plant leaves
    ctx.fillStyle = '#166534';
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.ellipse(620 + (i*12 - 24), floorY - 90, 18, 50, (i-2)*0.3, 0, Math.PI * 2);
      ctx.fill();
    }

    // 5. Pendant Light Glow
    const lampX = w * 0.5;
    ctx.strokeStyle = '#64748B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(lampX, 0); ctx.lineTo(lampX, 100);
    ctx.stroke();

    // Lamp Shade
    ctx.fillStyle = '#1C1917';
    ctx.beginPath();
    ctx.arc(lampX, 100, 30, Math.PI, 0);
    ctx.fill();

    // Light Glow
    const glowGrad = ctx.createRadialGradient(lampX, 110, 10, lampX, 180, 200);
    if (visualizerState.lighting === 'warm') {
      glowGrad.addColorStop(0, 'rgba(253, 224, 71, 0.45)');
      glowGrad.addColorStop(1, 'rgba(253, 224, 71, 0)');
    } else {
      glowGrad.addColorStop(0, 'rgba(248, 250, 252, 0.5)');
      glowGrad.addColorStop(1, 'rgba(248, 250, 252, 0)');
    }
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(lampX, 110, 220, 0, Math.PI * 2);
    ctx.fill();
  }

  drawRoom();

  // Attach Swatch Listeners
  document.querySelectorAll('[data-swatch]').forEach(el => {
    el.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const type = target.getAttribute('data-swatch');
      const val = target.getAttribute('data-val');

      if (type === 'wall') visualizerState.wallColor = val;
      if (type === 'floor') visualizerState.floorType = val;
      if (type === 'cabinet') visualizerState.cabinetColor = val;
      if (type === 'lighting') visualizerState.lighting = val;

      target.parentElement.querySelectorAll('.active, .color-swatch, .cat-pill').forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');

      drawRoom();
    });
  });
}

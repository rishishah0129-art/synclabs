/* Before & After Transformation Slider Component */

function renderTransformationSlider() {
  const isInterior = state.businessMode === 'interior';
  if (!isInterior) return '';

  return `
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">${getIcon('sparkles')} Room Makeovers</span>
          <h2 class="section-title">Before & After Space Transformation</h2>
          <p class="section-desc">Drag the slider left and right to see how StudioSyncLabs transforms raw bare spaces into stunning turnkey interiors.</p>
        </div>

        <div class="slider-container glass-card" id="before-after-slider">
          <!-- After Image (Decorated) -->
          <div class="after-image" style="background-image: url('assets/living_room.png');"></div>

          <!-- Before Image (Bare Shell) -->
          <div class="before-image" id="before-img-layer" style="background-image: url('assets/bedroom.png'); filter: grayscale(80%) brightness(85%);"></div>

          <!-- Drag Handle -->
          <div class="slider-handle" id="slider-drag-handle">
            <div class="handle-button">↔</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initBeforeAfterSlider() {
  const container = document.getElementById('before-after-slider');
  const beforeLayer = document.getElementById('before-img-layer');
  const handle = document.getElementById('slider-drag-handle');

  if (!container || !beforeLayer || !handle) return;

  let isDragging = false;

  function updateSlider(x) {
    const rect = container.getBoundingClientRect();
    let pos = x - rect.left;
    if (pos < 0) pos = 0;
    if (pos > rect.width) pos = rect.width;

    const percentage = (pos / rect.width) * 100;
    beforeLayer.style.width = percentage + '%';
    handle.style.left = percentage + '%';
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Support for mobile
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  });

  window.addEventListener('touchmove', (e) => {
    if (isDragging) updateSlider(e.touches[0].clientX);
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

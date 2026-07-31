/* Main Application Controller & Event Controller */

document.addEventListener('DOMContentLoaded', () => {
  // Initial Theme Attribute Sync
  document.body.setAttribute('data-business', state.businessMode);

  // Render App Structure
  renderApp();

  // Subscribe to state updates
  state.subscribe(() => {
    renderApp();
  });
});

function renderApp() {
  const root = document.getElementById('app-root');
  if (!root) return;

  root.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderEstimators()}
      ${renderVisualizer()}
      ${renderTransformationSlider()}
      ${renderGallery()}
      ${renderPackages()}
      ${renderShowcase()}
    </main>
    ${renderFooter()}
    ${renderModals()}
  `;

  // Attach Event Listeners
  attachEventListeners();

  // Initialize Canvas Visualizer if active mode is interior
  if (state.businessMode === 'interior') {
    initRoomCanvas();
    initBeforeAfterSlider();
  }
}

function renderFooter() {
  const isInterior = state.businessMode === 'interior';

  return `
    <footer style="background:var(--bg-surface); border-top:1px solid var(--border-color); padding:4rem 0 2rem 0; margin-top:4rem;">
      <div class="container">
        <div class="grid-4" style="margin-bottom:3rem;">
          <div>
            <div class="brand-logo" style="margin-bottom:1rem;">
              <div class="logo-icon-wrapper">${isInterior ? getIcon('home') : getIcon('layers')}</div>
              <span>${isInterior ? 'TruSpace' : 'Synclabs'}</span>.
            </div>
            <p style="font-size:0.9rem;">${isInterior ? 'India & International transparent home interior design platform inspired by Truww. Real pricing, verified architects.' : 'World-class digital product design studio. Building SaaS, mobile apps, and tokenized design systems.'}</p>
          </div>

          <div>
            <h4 style="margin-bottom:1rem;">${isInterior ? 'Interior Services' : 'Digital Services'}</h4>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; font-size:0.9rem; color:var(--text-muted);">
              ${isInterior ? `
                <li><a href="#estimator">Modular Kitchen Design</a></li>
                <li><a href="#estimator">Full Home Interiors</a></li>
                <li><a href="#visualizer">3D Canvas Studio</a></li>
                <li><a href="#packages">Turnkey Packages</a></li>
              ` : `
                <li><a href="#digital-services">SaaS & Web App UX</a></li>
                <li><a href="#digital-services">Design Systems</a></li>
                <li><a href="#marketplace">UI Kit Marketplace</a></li>
                <li><a href="#case-studies">UX Audits</a></li>
              `}
            </ul>
          </div>

          <div>
            <h4 style="margin-bottom:1rem;">Transparent Guarantee</h4>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; font-size:0.9rem; color:var(--text-muted);">
              <li>${getIcon('check')} Zero Hidden Costs</li>
              <li>${getIcon('check')} 10-Year Warranty</li>
              <li>${getIcon('check')} 45-Day Delivery SLA</li>
              <li>${getIcon('check')} 100% Verified Specs</li>
            </ul>
          </div>

          <div>
            <h4 style="margin-bottom:1rem;">Contact Studio</h4>
            <p style="font-size:0.9rem; margin-bottom:0.5rem;">${getIcon('phone')} +1 (800) 555-TRUSPACE</p>
            <p style="font-size:0.9rem; margin-bottom:1rem;">${getIcon('mail')} hello@synclabs-truspace.com</p>
            <button class="btn btn-primary" style="width:100%;" id="btn-footer-consultation">
              ${isInterior ? 'Book Home Consultation' : 'Schedule Discovery Call'}
            </button>
          </div>
        </div>

        <div style="padding-top:2rem; border-top:1px solid var(--border-color); text-align:center; font-size:0.85rem; color:var(--text-muted);">
          &copy; 2026 Synclabs & TruSpace Dual Platform. All Rights Reserved. Built with Modern Web Excellence.
        </div>
      </div>
    </footer>
  `;
}

function attachEventListeners() {
  // Dual Business Mode Switcher Listeners
  const btnInterior = document.getElementById('btn-toggle-interior');
  const btnDigital = document.getElementById('btn-toggle-digital');

  if (btnInterior) {
    btnInterior.addEventListener('click', () => {
      state.setBusinessMode('interior');
      state.showToast('Switched to Interior Decoration & Home Design Mode');
    });
  }

  if (btnDigital) {
    btnDigital.addEventListener('click', () => {
      state.setBusinessMode('digital');
      state.showToast('Switched to Digital Product Design Studio Mode');
    });
  }

  // Interior Estimator BHK Tabs
  document.querySelectorAll('.bhk-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const bhk = e.currentTarget.getAttribute('data-bhk');
      state.interiorEstimator.bhk = bhk;
      // Auto-set default SqFt based on BHK preset
      const preset = INTERIOR_DATA.bhkPresets.find(p => p.id === bhk);
      if (preset) state.interiorEstimator.sqFt = preset.baseSqFt;
      renderApp();
    });
  });

  // SqFt Slider
  const sqftInput = document.getElementById('input-sqft');
  if (sqftInput) {
    sqftInput.addEventListener('input', (e) => {
      state.interiorEstimator.sqFt = parseInt(e.target.value, 10);
      const display = document.getElementById('interior-cost-display');
      if (display) {
        // Quick math update without full re-render
        const currentBhkPreset = INTERIOR_DATA.bhkPresets.find(b => b.id === state.interiorEstimator.bhk);
        const currentTier = INTERIOR_DATA.finishTiers.find(t => t.id === state.interiorEstimator.tier);
        let base = currentBhkPreset ? currentBhkPreset.baseCost : 650000;
        let sqFtFactor = (state.interiorEstimator.sqFt - (currentBhkPreset ? currentBhkPreset.baseSqFt : 1000)) * 250;
        if (sqFtFactor < 0) sqFtFactor = 0;
        let roomAddons = 0;
        INTERIOR_DATA.roomOptions.forEach(r => {
          if (state.interiorEstimator.selectedRooms.includes(r.id)) roomAddons += r.cost;
        });
        let totalCost = Math.round((base + sqFtFactor + roomAddons) * (currentTier ? currentTier.multiplier : 1.0));
        display.innerText = '₹ ' + totalCost.toLocaleString('en-IN');
      }
    });
  }

  // Finish Tier Cards
  document.querySelectorAll('.tier-card[data-tier]').forEach(card => {
    card.addEventListener('click', (e) => {
      state.interiorEstimator.tier = e.currentTarget.getAttribute('data-tier');
      renderApp();
    });
  });

  // Room Checkboxes
  document.querySelectorAll('.room-checkbox').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const room = e.currentTarget.getAttribute('data-room');
      if (e.currentTarget.checked) {
        if (!state.interiorEstimator.selectedRooms.includes(room)) {
          state.interiorEstimator.selectedRooms.push(room);
        }
      } else {
        state.interiorEstimator.selectedRooms = state.interiorEstimator.selectedRooms.filter(r => r !== room);
      }
      renderApp();
    });
  });

  // Digital Estimator Controls
  document.querySelectorAll('[data-digital-type]').forEach(card => {
    card.addEventListener('click', (e) => {
      state.digitalEstimator.projectType = e.currentTarget.getAttribute('data-digital-type');
      renderApp();
    });
  });

  document.querySelectorAll('[data-digital-scope]').forEach(card => {
    card.addEventListener('click', (e) => {
      state.digitalEstimator.scope = e.currentTarget.getAttribute('data-digital-scope');
      renderApp();
    });
  });

  const screensInput = document.getElementById('input-digital-screens');
  if (screensInput) {
    screensInput.addEventListener('input', (e) => {
      state.digitalEstimator.screensCount = parseInt(e.target.value, 10);
      renderApp();
    });
  }

  // Wishlist Heart Buttons
  document.querySelectorAll('[data-fav-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = e.currentTarget.getAttribute('data-fav-id');
      let item = INTERIOR_DATA.portfolio.find(p => p.id === id) || 
                 DIGITAL_DATA.marketplace.find(m => m.id === id);
      if (item) state.toggleFavorite(item);
    });
  });

  // Modal Open & Close Triggers
  const openConsultBtns = [
    document.getElementById('btn-open-consultation'),
    document.getElementById('btn-quote-consultation'),
    document.getElementById('btn-digital-book'),
    document.getElementById('btn-footer-consultation')
  ];

  openConsultBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const modal = document.getElementById('modal-consultation');
        if (modal) modal.classList.add('active');
      });
    }
  });

  const closeConsultBtn = document.getElementById('close-modal-consultation');
  if (closeConsultBtn) {
    closeConsultBtn.addEventListener('click', () => {
      document.getElementById('modal-consultation').classList.remove('active');
    });
  }

  // Form Submit Handler
  const consultForm = document.getElementById('consultation-form');
  if (consultForm) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('modal-consultation').classList.remove('active');
      state.showToast('Thank you! Your appointment request has been scheduled.', 'success');
    });
  }

  // Itemized Breakdown Modal Trigger
  const btnBreakdown = document.getElementById('btn-view-breakdown') || document.getElementById('btn-digital-breakdown');
  if (btnBreakdown) {
    btnBreakdown.addEventListener('click', () => {
      populateBreakdownModal();
      document.getElementById('modal-breakdown').classList.add('active');
    });
  }

  const closeBreakdownBtn = document.getElementById('close-modal-breakdown');
  if (closeBreakdownBtn) {
    closeBreakdownBtn.addEventListener('click', () => {
      document.getElementById('modal-breakdown').classList.remove('active');
    });
  }

  // Wishlist Modal Trigger
  const btnWishlist = document.getElementById('btn-open-wishlist');
  if (btnWishlist) {
    btnWishlist.addEventListener('click', () => {
      populateWishlistModal();
      document.getElementById('modal-wishlist').classList.add('active');
    });
  }

  const closeWishlistBtn = document.getElementById('close-modal-wishlist');
  if (closeWishlistBtn) {
    closeWishlistBtn.addEventListener('click', () => {
      document.getElementById('modal-wishlist').classList.remove('active');
    });
  }
}

function populateBreakdownModal() {
  const container = document.getElementById('breakdown-content-area');
  if (!container) return;

  const isInterior = state.businessMode === 'interior';

  if (isInterior) {
    const est = state.interiorEstimator;
    const bhk = INTERIOR_DATA.bhkPresets.find(b => b.id === est.bhk);
    const tier = INTERIOR_DATA.finishTiers.find(t => t.id === est.tier);

    let base = bhk ? bhk.baseCost : 650000;
    let sqFtFactor = (est.sqFt - (bhk ? bhk.baseSqFt : 1000)) * 250;
    if (sqFtFactor < 0) sqFtFactor = 0;

    let rows = `
      <tr><td>Base Layout (${bhk.label})</td><td>₹ ${base.toLocaleString('en-IN')}</td></tr>
      <tr><td>Carpet Area Adjustment (${est.sqFt} SqFt)</td><td>₹ ${sqFtFactor.toLocaleString('en-IN')}</td></tr>
    `;

    let roomSum = 0;
    INTERIOR_DATA.roomOptions.forEach(r => {
      if (est.selectedRooms.includes(r.id)) {
        roomSum += r.cost;
        rows += `<tr><td>+ ${r.label}</td><td>₹ ${r.cost.toLocaleString('en-IN')}</td></tr>`;
      }
    });

    let subtotal = base + sqFtFactor + roomSum;
    let multiplier = tier ? tier.multiplier : 1.0;
    let total = Math.round(subtotal * multiplier);

    container.innerHTML = `
      <table class="quote-table">
        <thead>
          <tr><th>Specification / Item</th><th>Cost Estimate</th></tr>
        </thead>
        <tbody>
          ${rows}
          <tr style="background:var(--bg-main);">
            <td><strong>Finish Quality Grade</strong></td>
            <td><strong>${tier.label} (${multiplier}x)</strong></td>
          </tr>
          <tr>
            <td><strong>Total Turnkey Estimate (Taxes & Fitting Incl.)</strong></td>
            <td><strong>₹ ${total.toLocaleString('en-IN')}</strong></td>
          </tr>
        </tbody>
      </table>
    `;
  } else {
    // Digital Scope Breakdown
    const dest = state.digitalEstimator;
    const type = DIGITAL_DATA.projectTypes.find(p => p.id === dest.projectType);
    const scope = DIGITAL_DATA.scopes.find(s => s.id === dest.scope);
    let screenCost = dest.screensCount * 120;
    let total = Math.round((type.baseCost * scope.multiplier) + screenCost);

    container.innerHTML = `
      <table class="quote-table">
        <thead>
          <tr><th>Product Deliverable</th><th>Estimate</th></tr>
        </thead>
        <tbody>
          <tr><td>Base Product Type (${type.label})</td><td>$${type.baseCost.toLocaleString('en-US')}</td></tr>
          <tr><td>Scope Tier (${scope.label})</td><td>${scope.multiplier}x Multiplier</td></tr>
          <tr><td>Key Screens & Micro-interactions (${dest.screensCount} screens)</td><td>$${screenCost.toLocaleString('en-US')}</td></tr>
          <tr>
            <td><strong>Total Design Investment</strong></td>
            <td><strong>$${total.toLocaleString('en-US')}</strong></td>
          </tr>
        </tbody>
      </table>
    `;
  }
}

function populateWishlistModal() {
  const container = document.getElementById('wishlist-items-container');
  if (!container) return;

  if (state.favorites.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem 0; color:var(--text-muted);">
        ${getIcon('heart')}
        <p style="margin-top:1rem;">Your wishlist is empty. Explore looks or UI kits and click the heart icon to save!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:1rem;">
      ${state.favorites.map(item => `
        <div style="display:flex; align-items:center; gap:1rem; padding:1rem; background:var(--bg-main); border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <img src="${item.img}" style="width:70px; height:60px; object-fit:cover; border-radius:var(--radius-sm);">
          <div style="flex:1;">
            <h4 style="font-size:1rem;">${item.title}</h4>
            <p style="font-size:0.85rem;">${item.category || item.style}</p>
          </div>
          <button class="btn btn-secondary" onclick="state.toggleFavorite({id:'${item.id}'}); populateWishlistModal();">
            Remove
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

/* Estimators Component (Truww Interior Price Calculator & Digital Calculator) */

function renderEstimators() {
  const isInterior = state.businessMode === 'interior';

  if (isInterior) {
    const est = state.interiorEstimator;
    const currentBhkPreset = INTERIOR_DATA.bhkPresets.find(b => b.id === est.bhk);
    const currentTier = INTERIOR_DATA.finishTiers.find(t => t.id === est.tier);

    // Calculation Math
    let base = currentBhkPreset ? currentBhkPreset.baseCost : 650000;
    let sqFtFactor = (est.sqFt - (currentBhkPreset ? currentBhkPreset.baseSqFt : 1000)) * 250;
    if (sqFtFactor < 0) sqFtFactor = 0;

    let roomAddons = 0;
    INTERIOR_DATA.roomOptions.forEach(r => {
      if (est.selectedRooms.includes(r.id)) {
        roomAddons += r.cost;
      }
    });

    let subtotal = base + sqFtFactor + roomAddons;
    let totalCost = Math.round(subtotal * (currentTier ? currentTier.multiplier : 1.0));
    let formattedTotal = '₹ ' + totalCost.toLocaleString('en-IN');

    return `
      <section class="section-padding" id="estimator" style="background:var(--bg-main)">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">${getIcon('calculator')} Instant Price Calculator</span>
            <h2 class="section-title">Calculate Your Home Interior Cost</h2>
            <p class="section-desc">Get an accurate, itemized cost estimate tailored to your flat size, room requirements, and finish quality.</p>
          </div>

          <div class="estimator-card glass-card">
            <!-- BHK Selector Tabs -->
            <div class="bhk-tabs">
              ${INTERIOR_DATA.bhkPresets.map(preset => `
                <button class="bhk-tab ${est.bhk === preset.id ? 'active' : ''}" data-bhk="${preset.id}">
                  ${preset.label}
                </button>
              `).join('')}
            </div>

            <div class="estimator-controls">
              <!-- Square Footage Slider -->
              <div class="control-group">
                <div class="control-label-row">
                  <span>Carpet Area (Square Feet)</span>
                  <span style="color:var(--color-primary); font-weight:700;">${est.sqFt} Sq.Ft.</span>
                </div>
                <input type="range" class="slider-input" id="input-sqft" min="400" max="3500" step="50" value="${est.sqFt}">
              </div>

              <!-- Finish Quality Tier Cards -->
              <div class="control-group">
                <div class="control-label-row">
                  <span>Finish & Material Quality</span>
                </div>
                <div class="tier-selector">
                  ${INTERIOR_DATA.finishTiers.map(tier => `
                    <div class="tier-card ${est.tier === tier.id ? 'selected' : ''}" data-tier="${tier.id}">
                      <div class="tier-title">${tier.label}</div>
                      <div class="tier-multiplier">${tier.desc}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Room Inclusions Checkboxes -->
              <div class="control-group">
                <div class="control-label-row">
                  <span>Select Rooms & Furniture Units</span>
                </div>
                <div class="grid-2" style="gap:0.8rem; margin-top:0.5rem;">
                  ${INTERIOR_DATA.roomOptions.map(room => `
                    <label style="display:flex; align-items:center; gap:0.6rem; background:var(--bg-main); padding:0.8rem 1rem; border-radius:var(--radius-md); border:1px solid var(--border-color); cursor:pointer; font-size:0.9rem;">
                      <input type="checkbox" class="room-checkbox" data-room="${room.id}" ${est.selectedRooms.includes(room.id) ? 'checked' : ''}>
                      <span>${room.label}</span>
                    </label>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Price Summary Callout Box -->
            <div class="price-summary-box">
              <div class="price-display">
                <span class="price-label">Estimated Total Investment (Incl. Taxes & Installation)</span>
                <span class="price-amount" id="interior-cost-display">${formattedTotal}</span>
              </div>
              <div class="estimator-actions">
                <button class="btn btn-secondary" id="btn-view-breakdown">
                  ${getIcon('sliders')} View Itemized Breakdown
                </button>
                <button class="btn btn-primary" id="btn-quote-consultation">
                  ${getIcon('sparkles')} Lock In This Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  } else {
    // DIGITAL ESTIMATOR
    const dest = state.digitalEstimator;
    const currentType = DIGITAL_DATA.projectTypes.find(p => p.id === dest.projectType);
    const currentScope = DIGITAL_DATA.scopes.find(s => s.id === dest.scope);

    let baseCost = currentType ? currentType.baseCost : 4500;
    let scopeMult = currentScope ? currentScope.multiplier : 1.6;
    let screenCost = dest.screensCount * 120;

    let totalDigitalCost = Math.round((baseCost * scopeMult) + screenCost);
    let formattedDigital = '$' + totalDigitalCost.toLocaleString('en-US');

    return `
      <section class="section-padding" id="digital-estimator" style="background:var(--bg-main)">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">${getIcon('calculator')} Digital Project Estimator</span>
            <h2 class="section-title">Calculate Digital Product Design Cost</h2>
            <p class="section-desc">Instant estimate for custom UI/UX design, SaaS dashboards, mobile apps, and design systems.</p>
          </div>

          <div class="estimator-card glass-card">
            <div class="estimator-controls">
              <!-- Project Type Tabs -->
              <div class="control-group">
                <div class="control-label-row">
                  <span>1. Select Product Type</span>
                </div>
                <div class="grid-4" style="gap:1rem;">
                  ${DIGITAL_DATA.projectTypes.map(p => `
                    <div class="tier-card ${dest.projectType === p.id ? 'selected' : ''}" data-digital-type="${p.id}">
                      <div class="tier-title">${p.label}</div>
                      <div class="tier-multiplier">Est. ${p.time}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Scope Tiers -->
              <div class="control-group">
                <div class="control-label-row">
                  <span>2. Select Project Scope</span>
                </div>
                <div class="tier-selector">
                  ${DIGITAL_DATA.scopes.map(s => `
                    <div class="tier-card ${dest.scope === s.id ? 'selected' : ''}" data-digital-scope="${s.id}">
                      <div class="tier-title">${s.label}</div>
                      <div class="tier-multiplier">${s.desc}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Screen Count Slider -->
              <div class="control-group">
                <div class="control-label-row">
                  <span>3. Estimated Screens / Views</span>
                  <span style="color:var(--color-primary); font-weight:700;">${dest.screensCount} Key Screens</span>
                </div>
                <input type="range" class="slider-input" id="input-digital-screens" min="3" max="50" step="1" value="${dest.screensCount}">
              </div>
            </div>

            <!-- Price Summary -->
            <div class="price-summary-box">
              <div class="price-display">
                <span class="price-label">Estimated Design Investment</span>
                <span class="price-amount">${formattedDigital}</span>
              </div>
              <div class="estimator-actions">
                <button class="btn btn-secondary" id="btn-digital-breakdown">
                  ${getIcon('sliders')} Scope Specs
                </button>
                <button class="btn btn-primary" id="btn-digital-book">
                  ${getIcon('sparkles')} Schedule UX Discovery Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

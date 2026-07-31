/* Showcase Component (Interior Designers & Digital Case Studies) */

function renderShowcase() {
  const isInterior = state.businessMode === 'interior';

  if (isInterior) {
    return `
      <section class="section-padding" id="designers" style="background:var(--bg-main)">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">${getIcon('user')} Verified Architects</span>
            <h2 class="section-title">Meet Our Senior Interior Designers</h2>
            <p class="section-desc">Partner with top design experts dedicated to bringing your home vision to reality.</p>
          </div>

          <div class="grid-3">
            ${INTERIOR_DATA.designers.map(d => `
              <div class="glass-card" style="padding:1.8rem; text-align:center;">
                <img src="${d.img}" alt="${d.name}" style="width:100px; height:100px; border-radius:50%; object-fit:cover; margin:0 auto 1rem auto; border:3px solid var(--color-primary);">
                <h3 style="font-size:1.3rem; margin-bottom:0.2rem;">${d.name}</h3>
                <p style="color:var(--color-primary); font-weight:600; font-size:0.9rem; margin-bottom:0.8rem;">${d.role}</p>
                <div style="display:flex; justify-content:center; gap:1.2rem; font-size:0.85rem; color:var(--text-muted); margin-bottom:1.5rem;">
                  <span>${d.exp}</span>
                  <span>•</span>
                  <span>${d.projects}</span>
                </div>
                <button class="btn btn-secondary btn-book-designer" data-designer="${d.name}" style="width:100%;">
                  ${getIcon('calendar')} Book Session
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  } else {
    // DIGITAL CASE STUDIES
    return `
      <section class="section-padding" id="case-studies" style="background:var(--bg-main)">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">${getIcon('sparkles')} Client Success Stories</span>
            <h2 class="section-title">UX Case Studies & Impact Metrics</h2>
            <p class="section-desc">Measurable ROI delivered through user-centric digital product design.</p>
          </div>

          <div class="grid-3">
            ${DIGITAL_DATA.caseStudies.map(c => `
              <div class="case-card">
                <img src="${c.img}" alt="${c.client}" style="width:100%; height:180px; object-fit:cover; border-radius:var(--radius-md);">
                <div class="case-stat-badge">
                  ${getIcon('sparkles')} ${c.metric}
                </div>
                <h3 style="font-size:1.25rem;">${c.client}</h3>
                <p style="font-size:0.9rem;">${c.impact}</p>
                <button class="btn btn-secondary" style="margin-top:auto;" onclick="state.showToast('Opening full case study for ${c.client}');">
                  View Case Study ${getIcon('arrowRight')}
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

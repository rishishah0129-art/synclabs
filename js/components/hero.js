/* Dynamic Hero Component */

function renderHero() {
  const isInterior = state.businessMode === 'interior';

  if (isInterior) {
    return `
      <section class="interior-hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="hero-badge-pill">
              ${getIcon('sparkles')} Transparent Interior Design Pricing Platform
            </div>
            <h1 class="hero-title">
              Craft Your Dream Home with <span>Instant Price Transparency</span>.
            </h1>
            <p class="hero-description">
              No hidden fees, no guessing games. Estimate your full home interior or modular kitchen cost in under 60 seconds with TruSpace. Verified designers, 10-year warranty, and 3D visual studio.
            </p>
            <div class="hero-cta-group">
              <a href="#estimator" class="btn btn-primary">
                ${getIcon('calculator')} Calculate Interior Cost Now
              </a>
              <a href="#visualizer" class="btn btn-secondary">
                ${getIcon('palette')} Try 3D Visualizer Studio
              </a>
            </div>

            <div class="hero-trust-bar">
              <div class="trust-item">
                ${getIcon('shieldCheck')} 10-Year Warranty
              </div>
              <div class="trust-item">
                ${getIcon('check')} 45-Day Delivery
              </div>
              <div class="trust-item">
                ${getIcon('star')} 4.95/5 Rated (1,200+ Homes)
              </div>
            </div>
          </div>

          <div class="hero-visual-card">
            <div class="hero-img-wrapper">
              <img src="assets/living_room.png" alt="Luxury Interior Living Room" id="hero-main-img">
            </div>
            <div class="hero-floating-badge glass-card">
              <div class="logo-icon-wrapper">
                ${getIcon('sparkles')}
              </div>
              <div>
                <h4 style="font-size:0.95rem; margin-bottom:0.1rem;">Verified Design</h4>
                <p style="font-size:0.8rem; margin:0;">Scandinavian Living Room #402</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  } else {
    return `
      <section class="digital-hero">
        <div class="container digital-hero-grid">
          <div class="hero-content">
            <div class="hero-badge-pill">
              ${getIcon('sparkles')} Digital Product & UI/UX Design Studio
            </div>
            <h1 class="hero-title">
              We Build <span style="background:var(--cta-gradient); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">World-Class Digital Products</span> & UI Systems.
            </h1>
            <p class="hero-description">
              From MVP wireframes to full-fledged SaaS applications, design systems, and mobile apps. Get instant project estimates and download premium Figma UI kits.
            </p>
            <div class="hero-cta-group">
              <a href="#digital-estimator" class="btn btn-primary">
                ${getIcon('calculator')} Estimate Project Cost
              </a>
              <a href="#marketplace" class="btn btn-secondary">
                ${getIcon('download')} Browse UI Marketplace
              </a>
            </div>

            <div class="digital-metrics-row">
              <div class="metric-item">
                <span class="metric-num">95+</span>
                <span class="metric-label">Products Shipped</span>
              </div>
              <div class="metric-item">
                <span class="metric-num">$120M+</span>
                <span class="metric-label">Client Valuation Raised</span>
              </div>
              <div class="metric-item">
                <span class="metric-num">99.4%</span>
                <span class="metric-label">Client Retention</span>
              </div>
            </div>
          </div>

          <div class="prototype-mockup-frame">
            <div class="mockup-header">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span style="margin-left:auto; font-size:0.75rem; color:var(--text-muted);">synclabs-app-v2.0.fig</span>
            </div>
            <div class="mockup-body">
              <img src="assets/saas_dashboard.png" alt="Digital SaaS Prototype UI Mockup">
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

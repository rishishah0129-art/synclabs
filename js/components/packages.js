/* Packages & Digital Services Component */

function renderPackages() {
  const isInterior = state.businessMode === 'interior';

  if (isInterior) {
    return `
      <section class="section-padding" id="packages">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">${getIcon('sparkles')} Curated Packages</span>
            <h2 class="section-title">Transparent Interior Packages</h2>
            <p class="section-desc">Fixed turnkey pricing with zero cost overruns guarantee.</p>
          </div>

          <div class="grid-3">
            <div class="glass-card" style="padding:2rem;">
              <span class="badge" style="margin-bottom:1rem;">Kitchen Special</span>
              <h3 style="margin-bottom:0.5rem;">Modular Kitchen Package</h3>
              <p style="margin-bottom:1.5rem;">BWP Marine Ply, Soft-Close Tandem Drawers & Hettich Hardware.</p>
              <div style="font-size:2rem; font-weight:800; color:var(--color-primary); margin-bottom:1.5rem;">₹ 1,85,000</div>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.8rem; margin-bottom:2rem; font-size:0.9rem;">
                <li style="display:flex; gap:0.5rem; align-items:center;">${getIcon('check')} 10-Year Warranty against Borer</li>
                <li style="display:flex; gap:0.5rem; align-items:center;">${getIcon('check')} Choice of Acrylic or Laminate</li>
                <li style="display:flex; gap:0.5rem; align-items:center;">${getIcon('check')} Quartz Countertop Included</li>
              </ul>
              <button class="btn btn-secondary" style="width:100%;" onclick="state.showToast('Kitchen Package selected! Book consultation to proceed.');">
                Select Package
              </button>
            </div>

            <div class="glass-card" style="padding:2rem; border-color:var(--color-primary); position:relative;">
              <span class="badge" style="background:var(--color-primary); color:#FFF; margin-bottom:1.5rem;">Most Popular</span>
              <h3 style="margin-bottom:0.5rem;">Full 2 BHK Essential</h3>
              <p style="margin-bottom:1.5rem;">Complete Living, Modular Kitchen & 2 Bedrooms Wardrobes.</p>
              <div style="font-size:2rem; font-weight:800; color:var(--color-primary); margin-bottom:1.5rem;">₹ 6,50,000</div>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.8rem; margin-bottom:2rem; font-size:0.9rem;">
                <li style="display:flex; gap:0.5rem; align-items:center;">${getIcon('check')} Complete Modular Kitchen</li>
                <li style="display:flex; gap:0.5rem; align-items:center;">${getIcon('check')} Master Bed & Guest Bed Wardrobes</li>
                <li style="display:flex; gap:0.5rem; align-items:center;">${getIcon('check')} Living Room TV Unit & Shoe Rack</li>
                <li style="display:flex; gap:0.5rem; align-items:center;">${getIcon('check')} False Ceiling & Spotlights</li>
              </ul>
              <button class="btn btn-primary" style="width:100%;" onclick="state.showToast('Full 2BHK Essential Package selected!');">
                Select Package
              </button>
            </div>

            <div class="glass-card" style="padding:2rem;">
              <span class="badge" style="margin-bottom:1rem;">Luxury Villa</span>
              <h3 style="margin-bottom:0.5rem;">Signature 3 BHK / Villa</h3>
              <p style="margin-bottom:1.5rem;">Teak Veneers, PU Polish, Automated Lighting & Custom Furniture.</p>
              <div style="font-size:2rem; font-weight:800; color:var(--color-primary); margin-bottom:1.5rem;">₹ 12,80,000</div>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.8rem; margin-bottom:2rem; font-size:0.9rem;">
                <li style="display:flex; gap:0.5rem; align-items:center;">${getIcon('check')} End-to-end Turnkey Interior</li>
                <li style="display:flex; gap:0.5rem; align-items:center;">${getIcon('check')} Custom Sofa & Dining Set</li>
                <li style="display:flex; gap:0.5rem; align-items:center;">${getIcon('check')} Smart Home Automation Setup</li>
              </ul>
              <button class="btn btn-secondary" style="width:100%;" onclick="state.showToast('Signature Villa Package selected!');">
                Select Package
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  } else {
    // DIGITAL SERVICES
    return `
      <section class="section-padding" id="digital-services">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">${getIcon('layers')} Core Capabilities</span>
            <h2 class="section-title">Digital Product Design Services</h2>
            <p class="section-desc">End-to-end design solutions crafted for high-growth tech startups and enterprises.</p>
          </div>

          <div class="grid-3">
            <div class="glass-card" style="padding:2rem;">
              <div class="logo-icon-wrapper" style="margin-bottom:1.5rem;">${getIcon('laptop')}</div>
              <h3 style="margin-bottom:0.6rem;">SaaS & Web App UX</h3>
              <p style="margin-bottom:1.5rem;">Complex workflow simplification, analytics dashboards, and user permissions UI.</p>
              <button class="btn btn-secondary" style="width:100%;" onclick="state.showToast('Booked SaaS UX consultation');">Explore Capability</button>
            </div>

            <div class="glass-card" style="padding:2rem;">
              <div class="logo-icon-wrapper" style="margin-bottom:1.5rem;">${getIcon('layers')}</div>
              <h3 style="margin-bottom:0.6rem;">Design Systems</h3>
              <p style="margin-bottom:1.5rem;">Tokenized Figma libraries, auto-layout v5 components, and cross-platform specs.</p>
              <button class="btn btn-secondary" style="width:100%;" onclick="state.showToast('Booked Design System discovery call');">Explore Capability</button>
            </div>

            <div class="glass-card" style="padding:2rem;">
              <div class="logo-icon-wrapper" style="margin-bottom:1.5rem;">${getIcon('sparkles')}</div>
              <h3 style="margin-bottom:0.6rem;">Mobile App Design</h3>
              <p style="margin-bottom:1.5rem;">Native iOS and Android UI design, fluid micro-interactions, and prototype user testing.</p>
              <button class="btn btn-secondary" style="width:100%;" onclick="state.showToast('Booked Mobile App discovery call');">Explore Capability</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

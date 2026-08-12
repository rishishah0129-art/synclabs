/* Modals & Popups Component */

function renderModals() {
  const isInterior = state.businessMode === 'interior';

  return `
    <!-- Consultation Booking Modal -->
    <div class="modal-overlay" id="modal-consultation">
      <div class="modal-card">
        <button class="modal-close-btn" id="close-modal-consultation">${getIcon('x')}</button>
        <div class="modal-header">
          <h2 class="modal-title">${isInterior ? 'Schedule Free Home Design Visit' : 'Schedule Digital UX Discovery Call'}</h2>
          <p>${isInterior ? 'Connect with a senior interior architect at studio sync labs.' : 'Discuss product requirements, architecture, and timeline with our team at studio sync labs.'}</p>
        </div>

        <!-- Direct Contact Banner -->
        <div style="background:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1rem; margin-bottom:1.5rem;">
          <div style="font-size:0.85rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.5rem;">
            Direct Connect With Primary Leads
          </div>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.75rem;">
            <a href="tel:+919810766378" style="display:flex; flex-direction:column; background:var(--bg-surface); padding:0.6rem 0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); text-decoration:none;">
              <span style="font-size:0.8rem; color:var(--text-muted); font-weight:500;">Anand Mohan Shah</span>
              <span style="font-size:0.9rem; font-weight:700; color:var(--color-primary); display:flex; align-items:center; gap:0.3rem;">
                ${getIcon('phone')} +91 98107 66378
              </span>
            </a>
            <a href="tel:+919999276696" style="display:flex; flex-direction:column; background:var(--bg-surface); padding:0.6rem 0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); text-decoration:none;">
              <span style="font-size:0.8rem; color:var(--text-muted); font-weight:500;">Rishi Shah</span>
              <span style="font-size:0.9rem; font-weight:700; color:var(--color-primary); display:flex; align-items:center; gap:0.3rem;">
                ${getIcon('phone')} +91 99992 76696
              </span>
            </a>
          </div>
        </div>

        <form id="consultation-form">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-input" placeholder="e.g. Alex Morgan" required>
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number</label>
              <input type="tel" class="form-input" placeholder="+91 98107 66378" required>
            </div>
            <div class="form-group form-group-full">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-input" placeholder="alex@example.com" required>
            </div>
            
            ${isInterior ? `
              <div class="form-group">
                <label class="form-label">Property Type</label>
                <select class="form-select">
                  <option>2 BHK Flat</option>
                  <option>3 BHK Flat</option>
                  <option>4 BHK / Villa</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Possession Date</label>
                <input type="date" class="form-input" required>
              </div>
            ` : `
              <div class="form-group">
                <label class="form-label">Estimated Budget</label>
                <select class="form-select">
                  <option>$3,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Target Launch</label>
                <select class="form-select">
                  <option>Under 1 Month</option>
                  <option>1 - 2 Months</option>
                  <option>Flexible</option>
                </select>
              </div>
            `}

            <div class="form-group form-group-full">
              <label class="form-label">Project Details / Requirements</label>
              <textarea class="form-textarea" rows="3" placeholder="Tell us about your space or product idea..."></textarea>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%;">
            ${getIcon('sparkles')} Confirm Appointment
          </button>
        </form>
      </div>
    </div>

    <!-- Itemized Quote Breakdown Modal -->
    <div class="modal-overlay" id="modal-breakdown">
      <div class="modal-card" style="max-width:750px;">
        <button class="modal-close-btn" id="close-modal-breakdown">${getIcon('x')}</button>
        <div class="modal-header">
          <h2 class="modal-title">${isInterior ? 'Itemized Interior Quote Breakdown' : 'Digital Scope Estimate Breakdown'}</h2>
          <p>studio sync labs Transparent Cost Guarantee • Zero Surprise Costs</p>
        </div>

        <div id="breakdown-content-area">
          <!-- Populated dynamically by JS -->
        </div>

        <div class="modal-breakdown-actions">
          <button class="btn btn-secondary" onclick="window.print();">
            ${getIcon('download')} Print / Save PDF Quote
          </button>
          <button class="btn btn-primary" id="btn-proceed-breakdown-booking">
            ${getIcon('sparkles')} Book Consultation With This Quote
          </button>
        </div>
      </div>
    </div>

    <!-- Wishlist / Favorites Modal -->
    <div class="modal-overlay" id="modal-wishlist">
      <div class="modal-card">
        <button class="modal-close-btn" id="close-modal-wishlist">${getIcon('x')}</button>
        <div class="modal-header">
          <h2 class="modal-title">Your Saved Favorites</h2>
          <p>Saved looks and digital assets in your browser storage.</p>
        </div>

        <div id="wishlist-items-container">
          <!-- Rendered dynamically -->
        </div>
      </div>
    </div>
  `;
}

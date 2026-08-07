/* Navbar & Dual-Business Switcher Component */

function renderNavbar() {
  const isInterior = state.businessMode === 'interior';
  const favCount = state.favorites.length;

  return `
    <header class="header-navbar">
      <div class="container nav-wrapper">
        <!-- Brand Logo -->
        <a href="#" class="brand-logo" id="brand-logo-btn">
          <div class="logo-icon-wrapper">
            ${isInterior ? getIcon('home') : getIcon('layers')}
          </div>
          <div>
            <span>${isInterior ? 'StudioSyncLabs' : 'Digital Studio'}</span><span style="color:var(--color-primary)">.</span>
          </div>
          <span class="brand-tag">${isInterior ? 'Interiors' : 'Digital Studio'}</span>
        </a>

        <!-- Dual Business Switcher Toggle -->
        <div class="business-toggle-container" title="Switch between Interior Decoration and Digital Product Studio">
          <div class="toggle-slider"></div>
          <button class="toggle-btn ${isInterior ? 'active' : ''}" data-mode="interior" id="btn-toggle-interior">
            ${getIcon('home')}
            <span>Interior Design</span>
          </button>
          <button class="toggle-btn ${!isInterior ? 'active' : ''}" data-mode="digital" id="btn-toggle-digital">
            ${getIcon('laptop')}
            <span>Digital Products</span>
          </button>
        </div>

        <!-- Dynamic Nav Links -->
        <nav>
          <ul class="nav-menu">
            ${isInterior ? `
              <li><a href="#estimator" class="nav-link">Cost Estimator</a></li>
              <li><a href="#visualizer" class="nav-link">3D Studio</a></li>
              <li><a href="#gallery" class="nav-link">Lookbook</a></li>
              <li><a href="#packages" class="nav-link">Packages</a></li>
              <li><a href="#designers" class="nav-link">Designers</a></li>
            ` : `
              <li><a href="#digital-estimator" class="nav-link">Project Calculator</a></li>
              <li><a href="#marketplace" class="nav-link">UI Marketplace</a></li>
              <li><a href="#digital-services" class="nav-link">Services</a></li>
              <li><a href="#case-studies" class="nav-link">Case Studies</a></li>
            `}
          </ul>
        </nav>

        <!-- Right Action Buttons -->
        <div class="nav-actions">
          <button class="btn-icon-only fav-btn" id="btn-open-wishlist" title="View Wishlist">
            ${getIcon('heart')}
            ${favCount > 0 ? `<span class="fav-badge">${favCount}</span>` : ''}
          </button>

          <button class="btn btn-primary" id="btn-open-consultation">
            ${isInterior ? `${getIcon('calendar')} Book Home Visit` : `${getIcon('sparkles')} Start Project`}
          </button>
        </div>
      </div>
    </header>
  `;
}

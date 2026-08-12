/* Navbar & Dual-Business Switcher Component */

function renderNavbar() {
  const isInterior = state.businessMode === 'interior';
  const favCount = state.favorites.length;

  return `
    <!-- Main Navigation Bar -->
    <header class="header-navbar">
      <div class="container nav-wrapper">
        <!-- Brand Logo -->
        <a href="#" class="brand-logo" id="brand-logo-btn">
          <div>
            <span>studio sync labs</span><span style="color:var(--color-primary)">.</span>
          </div>
          <span class="brand-tag">Interiors</span>
        </a>

        <!-- Dynamic Nav Links -->
        <nav>
          <ul class="nav-menu">
            <li><a href="#estimator" class="nav-link">Cost Estimator</a></li>
            <li><a href="#gallery" class="nav-link">Lookbook</a></li>
          </ul>
        </nav>

        <!-- Right Action Buttons -->
        <div class="nav-actions">
          <button class="btn btn-primary" id="btn-open-consultation">
            ${isInterior ? `${getIcon('calendar')} Book Home Visit` : `${getIcon('sparkles')} Start Project`}
          </button>
        </div>
      </div>
    </header>
  `;
}

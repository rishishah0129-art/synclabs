/* Gallery & Marketplace Component */

function renderGallery() {
  const isInterior = state.businessMode === 'interior';

  if (isInterior) {
    return `
      <section class="section-padding" id="gallery" style="background:var(--bg-main)">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">${getIcon('eye')} Portfolio Lookbook</span>
            <h2 class="section-title">Explore Verified Interior Designs</h2>
            <p class="section-desc">Browse real homes designed and delivered by TruSpace interior architects.</p>
          </div>

          <div class="grid-2">
            ${INTERIOR_DATA.portfolio.map(item => {
              const isFav = state.isFavorite(item.id);
              return `
                <div class="product-card glass-card">
                  <div class="product-thumb">
                    <img src="${item.img}" alt="${item.title}">
                    <span class="badge product-tag">${item.style}</span>
                    <button class="btn-icon-only product-fav-btn" data-fav-id="${item.id}">
                      ${isFav ? getIcon('heartFilled') : getIcon('heart')}
                    </button>
                  </div>
                  <div class="product-details">
                    <h3 class="product-title">${item.title}</h3>
                    <p class="product-desc">${item.category} • ${item.area}</p>
                    <div class="product-footer">
                      <span class="product-price">Turnkey Finish</span>
                      <button class="btn btn-secondary btn-estimate-look" data-title="${item.title}">
                        ${getIcon('calculator')} Get Estimate
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>
    `;
  } else {
    // DIGITAL MARKETPLACE
    return `
      <section class="section-padding" id="marketplace" style="background:var(--bg-main)">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">${getIcon('download')} UI Kit & Template Marketplace</span>
            <h2 class="section-title">Premium Digital Assets & Figma UI Kits</h2>
            <p class="section-desc">Accelerate your product launch with production-ready design systems, Figma UI kits, and Webflow templates.</p>
          </div>

          <div class="grid-2">
            ${DIGITAL_DATA.marketplace.map(item => {
              const isFav = state.isFavorite(item.id);
              return `
                <div class="product-card glass-card">
                  <div class="product-thumb">
                    <img src="${item.img}" alt="${item.title}">
                    <span class="badge product-tag">${item.category}</span>
                    <button class="btn-icon-only product-fav-btn" data-fav-id="${item.id}">
                      ${isFav ? getIcon('heartFilled') : getIcon('heart')}
                    </button>
                  </div>
                  <div class="product-details">
                    <h3 class="product-title">${item.title}</h3>
                    <p class="product-desc">${item.desc}</p>
                    <div class="product-footer">
                      <span class="product-price">$${item.price}</span>
                      <button class="btn btn-primary btn-buy-digital" data-product-id="${item.id}" data-product-title="${item.title}">
                        ${getIcon('download')} Download UI Kit
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

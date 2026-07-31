/* State Management & Event Bus */

class AppState {
  constructor() {
    this.businessMode = localStorage.getItem('synclabs_mode') || 'interior'; // 'interior' | 'digital'
    this.favorites = JSON.parse(localStorage.getItem('synclabs_favs') || '[]');
    this.listeners = [];
    
    // Interior Estimator State
    this.interiorEstimator = {
      bhk: '2bhk',
      sqFt: 1050,
      tier: 'premium',
      selectedRooms: ['kitchen', 'masterBed', 'livingRoom']
    };

    // Digital Estimator State
    this.digitalEstimator = {
      projectType: 'webApp',
      scope: 'full',
      screensCount: 15
    };
  }

  setBusinessMode(mode) {
    if (this.businessMode !== mode) {
      this.businessMode = mode;
      localStorage.setItem('synclabs_mode', mode);
      document.body.setAttribute('data-business', mode);
      this.notify();
    }
  }

  toggleFavorite(item) {
    const idx = this.favorites.findIndex(f => f.id === item.id);
    if (idx >= 0) {
      this.favorites.splice(idx, 1);
      this.showToast(`Removed "${item.title || item.label || 'Item'}" from wishlist`);
    } else {
      this.favorites.push(item);
      this.showToast(`Saved "${item.title || item.label || 'Item'}" to wishlist`);
    }
    localStorage.setItem('synclabs_favs', JSON.stringify(this.favorites));
    this.notify();
  }

  isFavorite(id) {
    return this.favorites.some(f => f.id === id);
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container') || this.createToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${getIcon('sparkles')}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  createToastContainer() {
    const c = document.createElement('div');
    c.id = 'toast-container';
    c.className = 'toast-container';
    document.body.appendChild(c);
    return c;
  }
}

const state = new AppState();

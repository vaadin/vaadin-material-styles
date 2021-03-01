class Material extends HTMLElement {
  static get version() {
    return '1.4.0-alpha1';
  }
}

customElements.define('vaadin-material-styles', Material);

export { Material };

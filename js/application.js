document.addEventListener('DOMContentLoaded', function() {
  customElements.define('partial-header', PartialHeader);
  customElements.define('partial-nav', PartialNav);
  customElements.define('partial-footer', PartialFooter)
})

class PartialHeader extends HTMLElement {
  connectedCallback() {
    var element = this;
    fetch('/shared/_header.html').then(function(response) {
      return response.text();
    }).then(function(data) {
      element.innerHTML = data;
    })
  }
}
class PartialNav extends HTMLElement {
  connectedCallback() {
    var element = this;
    fetch('/shared/_nav.html').then(function(response) {
      return response.text();
    }).then(function(data) {
      element.innerHTML = data;
    })
  }
}
class PartialFooter extends HTMLElement {
  connectedCallback() {
    var element = this;
    fetch('/shared/_footer.html').then(function(response) {
      return response.text();
    }).then(function(data) {
      element.innerHTML = data;
    })
  }
}
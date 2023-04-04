import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project2 extends LitElement {
  static properties = {
    header: { type: String },
    title: { type: String },
    description: { type: String },
  }

  static styles = css`
    :host {
      color: #1a2b42;
      background-color: var(--project-2-background-color);
    }
    .titles {
      flex-direction: row;
      position: absolute;
      font-size: 20px;
      top: 8%;
      left: 5%;
    }
    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'star-border';
    this.title = 'Amazon Web Services Intro';
    this.description = 'Details about the badge';
  }

  render() {
    return html`
        <div class="titles">
          <simple-icon icon="${this.header}"></simple-icon>
          ${this.title}
          ${this.description}
        </div>
    `;
  }
}

customElements.define('search-bar', Project2);
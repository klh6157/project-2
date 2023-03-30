import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project2 extends LitElement {
  static properties = {
    header: { type: String },
    title: { type: String },
    description: { type: String },
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--project-2-background-color);
    }
    .titles {
      flex-direction: row;
      position: absolute;
      font-size: 20px;
      top: 2%;
      left: 5%;
    }
    .titles1 {
      flex-direction: row;
      position: absolute;
      font-size: 20px;
      top: 8%;
      left: 5%;
    }
    .titles2 {
      flex-direction: row;
      position: absolute;
      top: 20%;
      left: 8%;
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
    this.header = 'Penn State Digital Badges';
    this.title = 'Explore';
    this.description = 'The description of the explore';
  }

  render() {
    return html`
      <main>
        <div class="titles">
        <summary>${this.header}</summary>
        </div>

        <div class="titles1">
        <h1>${this.title}</h1>
        </div>

        <div class="titles2">
        <summary>${this.description}</summary>
        </div>

        </div>
      </main>
    `;
  }
}

customElements.define('project-2', Project2);
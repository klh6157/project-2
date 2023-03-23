import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project2 extends LitElement {
  static properties = {
    header: { type: String },
    title: { type: String },
    description: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
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

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }
    .titles {
      flex-direction: column;
      position: absolute;
      top: 0%;
      left: 0%;
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
    this.description = 'Description';
  }

  render() {
    return html`
      <main>
        <div class="titles">
        <h3>${this.header}</h3>
        <h1>${this.title}</h1>
        <p>${this.description}</p>
        </div>
      </main>
    `;
  }
}

customElements.define('project-2', Project2);
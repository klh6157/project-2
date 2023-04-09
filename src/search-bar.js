import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/src/a11y-collapse.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project2 extends LitElement {
  static properties = {
    header: { type: String },
    title: { type: String },
    description: { type: String },
    objectHeader: { type: String, Reflect: true },
    objectDescription: { type: String, Reflect: true},
    objectLink: { type: String, Reflect: true },
    objectBadgeCreator: { type: String, Reflect: true },
    objectTimeETA: { type: String, Reflect: true },
    objectStepIcon: { type: String, Reflect: true },
    objectStepDescription: { type: String, Reflect: true },
    objectStepTime: { type: String, Reflect: true },
    objectIcon: { type: String, Reflect: true },
  }

  static styles = css`
    :host {
      display: block;
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
    .search {
      position: center;
      border-radius: 5px;
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

    .object {
      top: 5%;
      left: 5%;
      width: 90%;
      height: 10%;
      background-color: #91cdff8a;
      border-left: 15px solid #00a2ff;
      border-radius: 5px;
      cursor: pointer;
      outline: none;
      text-align: left;
      font-size: 15px;
      border-top:none;
      border-right:none;
      border-bottom:none;
      display: block;
      
    }
    .icon {
      top: 5%;
      left: 90%;
      width: 10%;
    }
    .steps {
      display: flex;
      flex-direction: row;
    }
    .step-icon {
      margin-right: 10%;
    }
    .step-description {
      margin-right: 10%;
    }
    .step-time {
      margin-right: 10%;
    }
    .collapse-container {
      background-color: #fefeff;
    }

  `;

  constructor() {
    super();
    this.header = 'star-border';
    this.title = 'Amazon Web Services Intro';
    this.value = "";
  }

  render() {
    return html`
      <main>
        
      <div class="search">
       <simple-icon icon="icons:search"></simple-icon>
       <input type="text" value="${this.value}" @input=${this._handleInput}/>
        </div>

        <div class="titles">
          <simple-icon icon="${this.header}"></simple-icon>"
          ${this.title}
          ${this.description}
        </div>

        <body>
      
        </body>
      </div>
    </main>
    `;
  }
  _handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('search', { 
      bubbles:true,
      composed:true,
      detail: this.value,
     }));
  }
}

customElements.define('search-bar', Project2);
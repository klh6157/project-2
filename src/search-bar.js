import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

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
    .headers {
      flex-direction: row;
      position: absolute;
      font-size: 20px;
      top: 2%;
      left: 5%;
    }
    .titles {
      flex-direction: row;
      position: absolute;
      font-size: 20px;
      top: 8%;
      left: 5%;
    }
    .details {
      flex-direction: row;
      position: absolute;
      top: 20%;
      left: 8%;
      font-size: 15px;
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
    this.title = 'Amazon Web Services Intro';
    this.description = 'Here you will learn how to set up an account with AWS. How to create a root user, a I AM user account, set up MFA on your Root and' + 
    'I AM accounts, set up a user pool in Amazon cognito, how to upload and use Amazon S3, and how to use Amazon Lambda.';
  }

  render() {
    return html`
      <main>
        <div class="headers">
        <summary>${this.header}</summary>
        </div>

        <div class="titles">
        <h1>${this.title}</h1>
        </div>

        <div class="details">
        <summary>${this.description}</summary>
        </div>

        </div>
      </main>
    `;
  }
}

customElements.define('search-bar', Project2);
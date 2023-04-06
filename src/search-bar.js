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
    objectHeader: { type: String },
    objectDescription: { type: String },
    objectLink: { type: String },
    objectBadgeCreator: { type: String },
    objectTimeETA: { type: String },
    objectStepIcon: { type: String },
    objectStepDescription: { type: String },
    objectStepTime: { type: String },
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

    .object-container {
      position: absolute;
      top: 50%;
      left: 5%;
      width: 90%;
      height: 70%;
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
      border-top:  solid;
    }
  `;

  constructor() {
    super();
    this.header = 'Penn State Digital Badges';
    this.title = 'Explore';
    this.description = 'The description of the explore';
    this.objectHeader = 'Amazon';
    this.objectDescription = 'description for badge';
    this.objectLink = 'https//:google.com/';
    this.objectBadgeCreator = 'badge creator';
    this.objectTimeETA = '4.00 hours';
    this.objectStepIcon = 'icon';
    this.objectStepDescription = 'Creating you first lambda function';
    this.objectStepTime = '2.00 hours';
    this.header = 'star-border';
    this.title = 'Amazon Web Services Intro';
    this.description = 'Details about the badge';
  }

  render() {
    return html`
      <main>
        
        <div class="titles">
          <simple-icon icon="${this.header}"></simple-icon>
          ${this.title}
          ${this.description}
        </div>
        <body>
        <div class="object-container">
          <a11y-collapse icon="add" heading=${this.objectHeader} class="object">
            <div class="collapse-container">
              <div class="description">${this.objectDescription}</div>
              <p></p>
              <a href=${this.objectLink} class="link">link to badge</a>
              <p></p>
              <p></p>
              <p>---------------------------</p>
              <div class="badge-creator">${this.objectBadgeCreator}</div>
              <div class="time-eta">${this.objectTimeETA}</div>
              <div>Steps to Earn This Badge</div>
              <div class="steps">
                <div class="step-icon">Icon</div>
                <div class="step-description">${this.objectStepDescription}</div>
                <div class="step-time">${this.objectStepTime}</div>
              </div>
            </div>
          </a11y-collapse>
          <simple-icon class ="icon" accent-color="deep-orange" icon="lrn:download"></simple-icon>
        </div>
        </body>
      </div>
    </main>
    `;
  }
}

customElements.define('search-bar', Project2);
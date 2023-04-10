import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/src/a11y-collapse.js";

class Project2 extends LitElement {
  static properties = {
    objectHeader: { type: String, Reflect: true },
    objectDescription: { type: String, Reflect: true},
    objectLink: { type: String, Reflect: true },
    objectBadgeCreator: { type: String, Reflect: true },
    objectTimeETA: { type: String, Reflect: true },
    objectStepIcon: { type: String, Reflect: true },
    objectStepDescription: { type: String, Reflect: true },
    objectStepTime: { type: String, Reflect: true },
    objectIcon: { type: String, Reflect: true },
    discription: { type: String, Reflect: true },
  }

  static styles = css`
    :host {
      display: block;
      color: #1a2b42;
      background-color: var(--project-2-background-color);
    }
    
    .search {
      position: center;
      border-radius: 5px;
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

    .author-badge {
        width: 10px;
        height: 10px;
    }
    .object-badge {
        width: 10px;
        height: 10px;
    }
  `;

  constructor() {
    super();
    this.objectIcon = '';
    this.objectHeader = 'Amazon';
    this.objectDescription = 'description for badge';
    this.objectLink = 'https//:google.com/';
    this.objectBadgeCreator = 'badge creator';
    this.objectTimeETA = '4.00 hours';
    this.objectStepIcon = 'star-border';
    this.objectStepDescription = 'Creating you first lambda function';
    this.objectStepTime = '2.00 hours';
    this.description = 'Details about the badge';
  }

  render() {
    return html`
      <main>
        <body>
        <div class="object-container">
          <a11y-collapse icon="add" class="object">
          <p slot="heading"><img src="${this.objectIcon}" class="object badge">${this.objectHeader}</p>
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
                <img src="${this.objectStepIcon}" class="author-badge">
                <div class="step-description">${this.objectStepDescription}</div>
                <div class="step-time">${this.objectStepTime}</div>
              </div>
            </div>
          </a11y-collapse>
        </div>
        </body>
      </div>
    </main>
    `;
  }
}

customElements.define('menu-bar', Project2);
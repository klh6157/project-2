import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/src/a11y-collapse.js";
import "./search-widget.js";

// const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;
export class Project2 extends LitElement {
  static get tag () {
    return "search-list";

// class Project2 extends LitElement {
//   static properties = {
    // header: { type: String },
    // title: { type: String },
    // description: { type: String },
    // objectHeader: { type: String, Reflect: true },
    // objectDescription: { type: String, Reflect: true},
    // objectLink: { type: String, Reflect: true },
    // objectBadgeCreator: { type: String, Reflect: true },
    // objectTimeETA: { type: String, Reflect: true },
    // objectStepIcon: { type: String, Reflect: true },
    // objectStepDescription: { type: String, Reflect: true },
    // objectStepTime: { type: String, Reflect: true },
    // objectIcon: { type: String, Reflect: true },
    // players: { type: Array },
  }
  static get properties () {
    return {
      badges: { type: Array },
    };
  }   

  constructor() {
    super();
    this.badges = [];
    this.getSearchResults().then((results) => {
      this.badges = results;
    });
  }

static get styles () {
  return css`
    .wrapper {
      border: 2px solid overscroll-behavior-block;
    }
    `;
    }

    async getSearchResults(value) {
      const address = `/api/badgeList?search=${value}`;
      const results = await fetch(address).then((response) => {
        if (response.ok){
          return response.json();
        }
        return [];
    })
    .then((data) => {
      return data;
    });
    return results;
  }

  async _handleSearchEvent(e) {
    const term = e.detail.value;
    this.players = await this.getSearchResults(term);
  }
  

  render() {
    return html`
    <search-widget @value-changed=${this._handleSearchEvent}></search-widget>
    <div class="wrapper">
      ${this.badges.map((badge) => html`{
        <div class="object">
        <project-2 badgeHeader="${badge.badgeHeader}" badgeImage="${badge.badgeImage}" badgeDesc="${badge.badgeDesc}" creator="${badge.creator}" creatorImage="${badge.creatorImage}" mediaImg="${badge.mediaImg}"  timeToComplete="${badge.timeToComplete}"></project-2>
            </div>
            `)}
        </div>
        `;
    }
}

customElements.define(Project2.tag, Project2);
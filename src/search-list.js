import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/src/a11y-collapse.js";
import "./search-widget.js";

export class Project2 extends LitElement {
  static get tag () {
    return "search-list";

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

    async getSearchResults(value='') {
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
    this.badges = await this.getSearchResults(term);
  }
  

  render() {
    return html`
    <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
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
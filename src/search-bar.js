import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/src/a11y-collapse.js";
import "./search-widget.js";

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
    players: { type: Array },
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
      margin-top: 10px;
      margin-bottom: 10px;
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
    .search {
      width: 900px;
      height: 32px;
      border: 1px solid #f8f8f7;
      display: block;
      font-family: var(--badge-app-font-family);
      padding: 8px 4px 8px 64px;
      box-shadow: 1px 1px 5px 0.5px #bbb6b0;
      background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath fill='%239a9691' d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
      background-position: 24px;
    }
    .search:focus{
      outline: none;
      background-color: #f8f8f7f2;
    }
  `;

  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
    this.header = 'star-border';
    this.title = 'Amazon Web Services Intro';
    this.value = "";
    this.players = [];
    this.getSearchResults().then((results) => {
      this.players = results;
    });
  }
  async _handleSearchEvent(e) {
    const term = e.detail.value;
    this.players = await this.getSearchResults(e.detail.value);
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
  

  render() {
    return html`
     <div class="titles">
      <input type="text" class="search" placeholder="${this.topic}" @input="${this.searchInput}" />
    </div>
    `;
  }
}

customElements.define('search-bar', Project2);
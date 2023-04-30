import { LitElement, html, css } from "lit";
import './menus.js';
import "./search-widget.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/src/a11y-collapse.js";

export class Objects extends LitElement {
    static get tag() {
        return "object-list";
    }
    static get properties() {
        return {
            objects: { type: Array },
            menus: { type: String},
        };
    }

    constructor() {
        super();
        this.objects = [];
        this.menus = 'Menus';
        this.getSearchResults().then((results) => {
        this.objects = results;
    });
  }
    
    static get styles() {
        return css`
            :host {
                display: block;
            }
            .wrapper {
                display: flex;
                flex-direction: column;
                width:400px;
            }
            .item {
                width: 200%;
                margin-left: 10%;
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
      this.objects = await this.getSearchResults(term);
    }


    render() {
        return html`
        <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
        <h1>Amazon Web Services Intro</h1>
        <div class="wrapper">
            ${this.objects.map(
                item => html`
              <div class="item">
                <menu-bar
                  objectHeader="${item.objectHeader}"
                  objectIcon="${item.objectIcon}"
                  objectDescription="${item.objectDescription}"
                  objectLink="${item.objectLink}"
                  objectBadgeCreator="${item.objectBadgeCreator}"
                  objectTimeETA="${item.objectTimeETA}"
                  objectStepIcon="${item.objectStepIcon}"
                  objectStepDescription="${item.objectStepDescription}"
                  objectStepTime="${item.objectStepTime}"
                ></menu-bar>
              </div>
            `
            )}
        </div>
      `;
    }
}
customElements.define('objects-bar', Objects);
import { LitElement, html, css } from "lit";
import './search-list.js';
import './menus.js';
import '../api/badgeList.js';
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
        this.updateObjects();
    }

    updateObjects() {
        const address = '../api/badgeList';
        fetch(address).then(response => {
            if (response.ok) {
                return response.json();
            }
            return [];
        })
        .then(data => {
            this.objects = data;
        })
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

    render() {
        return html`
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
customElements.define('object-list', Objects);
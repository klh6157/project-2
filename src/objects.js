import { LitElement, html, css } from "lit";
import './search-bar.js';
import './menus.js';
import '../api/badgeList.js';

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

    // async updateObjects() {
    //     const address = new URL('../api/badgeList', import.meta.url).href;
    //     const response = await fetch(address);
    //     if (response.ok) {
    //         const data = await response.json();
    //         this.objects = data;
    //     } else {
    //         this.objects = [];
    //     }
    // }
    updateObjects() {
        const address = new URL('../api/badgeList');
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
        <h1>${this.menus}</h1>
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
customElements.define(Objects.tag, Objects);

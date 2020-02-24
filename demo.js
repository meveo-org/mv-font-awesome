import { LitElement, html, css } from "lit-element";
import "./mv-font-awesome.js";
import { SOLID, REGULAR, BRANDS } from "./mv-font-awesome.js";

export class MvFontAwesomeDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },
      open: { type: Boolean, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      .glyph {
        font-size: 16px;
        width: 15em;
        padding: 0.5em 0;
        margin: 0 2em;
        float: left;
        overflow: hidden;
      }
      
      .mls {
        margin-left: .25em;
      }
      
      .clearfix:before,
      .clearfix:after {
        content: " ";
        display: table;
      }
      
      .clearfix:after {
        clear: both;
      }
      
      .fs1 {
        font-size: 20px;
      }

      /* sample for overriding style */
      mv-fa {
        font-size: 24px;
        color: #2196F3;
      }
      
      .theme mv-fa {
        font-size: 50px;
        cursor: pointer;
        margin: 20px;
        z-index: 100;
      }
      
      .theme {
        display: flex;
        justify-content: flex-start;
      }
    `;
  }

  constructor() {
    super();
    this.open = true;
  }

  render() {
    const iconColor = `color: ${this.open ? "yellow" : ""}`;
    const backgroundColor = `background-color: ${this.open ? "" : "#373E48"}`;
    const color = `color: ${this.open ? "" : "#FFFFFF"}`;
    return html`
      <div style="${backgroundColor}; ${color}">
        <div class="theme">
          <mv-fa icon="lightbulb" style="${iconColor}" @click=${this.toggleLightBulb}></mv-fa>
        </div>
        <h2>Solid icons</h2>
        <div class="clearfix">
        ${SOLID.map(
          icon => html`        
          <div class="glyph fs1">
            <div class="clearfix">
              <mv-fa icon="${icon}" style="${color}"></mv-fa>
              <span class="mls"> ${icon}</span>
            </div>
          </div>
        `
        )}
        </div>
        <h2>Regular icons</h2>
        <div class="clearfix">
        ${REGULAR.map(
          icon => html`        
          <div class="glyph fs1">
            <div class="clearfix">
              <mv-fa icon="${icon}" regular style="${color}"></mv-fa>
              <span class="mls"> ${icon}</span>
            </div>
          </div>
        `
        )}
        </div>
        <h2>Brand icons</h2>
        <div class="clearfix">
        ${BRANDS.map(
          icon => html`
          <div class="glyph fs1">
            <div class="clearfix">
              <mv-fa icon="${icon}" style="${color}"></mv-fa>
              <span class="mls"> ${icon}</span>
            </div>
          </div>
        `
        )}
        </div>
      </div>
    `;
  }

  toggleLightBulb = () => {
    this.open = !this.open;
    if (this.open) {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
  };
}

customElements.define("mv-fa-demo", MvFontAwesomeDemo);

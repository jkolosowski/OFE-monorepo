import {
  ColorAliasPrimary1,
  ColorAliasPrimary3,
  ColorAliasPrimary7,
} from '@przeprogramowani/design-tokens';
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('pp-alert')
export class Alert extends LitElement {
  @property({ type: Boolean, reflect: true }) closable = false;
  @property({ type: Boolean, reflect: true }) open = true;

  static override styles = css`
    :host {
      display: block;
    }

    .alert {
      padding: 20px;
      border-radius: 90px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${unsafeCSS(ColorAliasPrimary1)};
      color: ${unsafeCSS(ColorAliasPrimary7)};
      border: 1px solid ${unsafeCSS(ColorAliasPrimary3)};
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      color: currentColor;
      margin-left: 8px;
    }
  `;

  private handleClose() {
    this.open = false;
    this.requestUpdate();
  }

  override render() {
    if (!this.open) {
      return null;
    }

    return html`
      <div class="alert">
        <div class="content">
          <slot></slot>
        </div>
        ${this.closable
          ? html`
              <button class="close-button" @click="${this.handleClose}">
                ✕
              </button>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pp-alert': Alert;
  }
}

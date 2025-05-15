import { beforeEach, describe, expect, it } from 'vitest';

import './alert';

describe('Alert', () => {
  beforeEach(() => {
    document.body.innerHTML = '<pp-alert>Test Alert Message</pp-alert>';
  });

  it('should display the alert message', () => {
    const alertElement = document.body.querySelector('pp-alert');
    const slot = alertElement?.shadowRoot?.querySelector('slot');
    const assignedNodes = slot?.assignedNodes();
    const containsText = assignedNodes?.some(
      (node) =>
        node.nodeType === Node.TEXT_NODE &&
        node.textContent?.includes('Test Alert Message')
    );

    expect(containsText).toBe(true);
  });

  it('should show close button when closable is true', async () => {
    const alertElement = document.body.querySelector('pp-alert');
    alertElement?.setAttribute('closable', '');
    await alertElement?.updateComplete;

    const closeButton =
      alertElement?.shadowRoot?.querySelector('.close-button');
    expect(closeButton).toBeTruthy();
  });

  it('should hide alert when close button is clicked', async () => {
    const alertElement = document.body.querySelector('pp-alert');
    alertElement?.setAttribute('closable', '');
    await alertElement?.updateComplete;

    const closeButton =
      alertElement?.shadowRoot?.querySelector('.close-button');
    closeButton?.dispatchEvent(new MouseEvent('click'));
    await alertElement?.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 0)); // Allow for re-render

    const alert = alertElement?.shadowRoot?.querySelector('.alert');
    expect(alert).toBeNull();
  });
});

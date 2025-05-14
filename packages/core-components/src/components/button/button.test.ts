import { beforeEach, describe, expect, it } from 'vitest';

import './button';

describe('Button', async () => {
  beforeEach(() => {
    document.body.innerHTML = '<pp-button>Hello Opanuj Frontend</pp-button>';
  });

  it('should display "Hello Opanuj Frontend" label', () => {
    const buttonElement = document.body.querySelector('pp-button');
    const slot = buttonElement?.shadowRoot?.querySelector('slot');
    const assignedNodes = slot?.assignedNodes();
    const containsText = assignedNodes?.some(
      (node) =>
        node.nodeType === Node.TEXT_NODE &&
        node.textContent?.includes('Hello Opanuj Frontend')
    );

    expect(containsText).toBe(true);
  });
});

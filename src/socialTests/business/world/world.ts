import playwright from 'playwright'

import { setWorldConstructor } from '@cucumber/cucumber'

export interface Context {
}

export interface World {
  context: Context
}

declare module '@cucumber/cucumber' {
  interface Context {
    scenario: {
      id: string
      name: string
    }
  }

  interface World {
    context: Context
  }
}

class CustomWorld {
  private page?: playwright.Page
  async openUrl(url: string) {
    const browser = await playwright.chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    await this.page.goto(url);
  }
}

setWorldConstructor(CustomWorld);
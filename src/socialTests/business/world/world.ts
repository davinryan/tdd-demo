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

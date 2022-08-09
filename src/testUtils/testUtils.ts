export const makeGetElementByClassName = (container: HTMLElement) => (className: string): Element | undefined => container.getElementsByClassName(className)[0]
export const getCssVariableValue = (variable: string) => {
    const cssVariable = variable.match(/\((.*)\)/)?.pop() || "";

    return globalThis.getComputedStyle(document.body).getPropertyValue(cssVariable);
  };
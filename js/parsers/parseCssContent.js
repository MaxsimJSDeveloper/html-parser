function parseCssContent(cssText) {
  try {
    const rules = [];
    let ruleStart = 0;
    let nestingLevel = 0;

    for (let i = 0; i < cssText.length; i++) {
      const char = cssText[i];

      if (char === "{") {
        nestingLevel++;
      } else if (char === "}") {
        nestingLevel--;
        if (nestingLevel === 0) {
          const rule = cssText.slice(ruleStart, i + 1);
          rules.push(rule);
          ruleStart = i + 1;
        } else if (nestingLevel < 0) {
          throw new Error(`Unexpected closing brace '}' found in CSS content.`);
        }
      }
    }

    if (nestingLevel > 0) {
      throw new Error("Unclosed brace '{' found in CSS content.");
    }

    return rules
      .map((rule) => rule.trim())
      .filter((rule) => rule)
      .map((rule) => {
        const [selector, styles] = rule.split("{").map((s) => s.trim());

        if (!selector || !styles) {
          throw new Error(
            `Invalid CSS rule structure: selector "${selector}" is missing or incomplete.`
          );
        }

        const declarations = styles
          .slice(0, -1)
          .split(";")
          .filter((style) => style.trim())
          .map((style) => {
            const [property, value] = style.split(":").map((s) => s.trim());
            if (!property || !value) {
              throw new Error(
                `Invalid CSS declaration: property "${property}" or value "${value}" is missing.`
              );
            }
            return { property, value };
          });

        return {
          selector,
          declarations,
        };
      });
  } catch (error) {
    throw new Error(`Error parsing CSS content: ${error.message}`);
  }
}

export default parseCssContent;

/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here

  // if (size === 'small' && type === 'regular') {
  //   return 3.00
  // }

  if (size === "small") {
    if (type === "regular") {
      if (extras.extraShot) return 3.75;
      else if (extras.whippedCream) return 3.5;
      else if (extras.extraShot && extras.whippedCream) return 3.8;
      else return 3.0;
    } else if (type === "latte") {
      if (extras.extraShot) return 4.75;
      else if (extras.whippedCream) return 4.5;
      else if (extras.extraShot && extras.whippedCream) return 4.8;
      else return 4.0;
    } else if (type === "cappuccino") {
      if (extras.extraShot) return 3.0 + 1.5 + 0.5;
      else if (extras.whippedCream) return 3.0 + 1.5 + 0.75;
      else if (extras.extraShot && extras.whippedCream)
        return 3.0 + 1.5 + 0.75 + 0.5;
      else return 3.0 + 1.5;
    } else if (type === "mocha") {
      if (extras.extraShot) return 3.0 + 2.0 + 0.5;
      else if (extras.whippedCream) return 3.0 + 2.0 + 0.75;
      else if (extras.extraShot && extras.whippedCream)
        return 3.0 + 2.0 + 0.75 + 0.5;
      else return 3.0 + 2.0;
    } else return -1;
  } else if (size === "medium") {
    if (type === "regular") {
      if (extras.extraShot) return 4.75;
      else if (extras.whippedCream) return 4.5;
      else if (extras.extraShot && extras.whippedCream) return 4.8;
      else return 4.0;
    } else if (type === "latte") {
      if (extras.extraShot) return 5.75;
      else if (extras.whippedCream) return 5.5;
      else if (extras.extraShot && extras.whippedCream) return 5.8;
      else return 5.0;
    } else if (type === "cappuccino") {
      if (extras.extraShot) return 4.0 + 1.5 + 0.5;
      else if (extras.whippedCream) return 4.0 + 1.5 + 0.75;
      else if (extras.extraShot && extras.whippedCream)
        return 4.0 + 1.5 + 0.75 + 0.5;
      else return 4.0 + 1.5;
    } else if (type === "mocha") {
      if (extras.extraShot) return 4.0 + 2.0 + 0.5;
      else if (extras.whippedCream) return 4.0 + 2.0 + 0.75;
      else if (extras.extraShot && extras.whippedCream)
        return 4.0 + 2.0 + 0.75 + 0.5;
      else return 4.0 + 2.0;
    } else return -1;
  } else if (size === "large") {
    if (type === "regular") {
      if (extras.extraShot) return 5.75;
      else if (extras.whippedCream) return 5.5;
      else if (extras.extraShot && extras.whippedCream) return 5.8;
      else return 5.0;
    } else if (type === "latte") {
      if (extras.extraShot) return 5.5;
      else if (extras.whippedCream) return 5.75;
      else if (extras.extraShot && extras.whippedCream) return 5.8;
      else return 5.0;
    } else if (type === "cappuccino") {
      if (extras.extraShot) return 5.0 + 1.5 + 0.5;
      else if (extras.whippedCream) return 5.0 + 1.5 + 0.75;
      else if (extras.extraShot && extras.whippedCream)
        return 5.0 + 1.5 + 0.75 + 0.5;
      else return 5.0 + 1.5;
    } else if (type === "mocha") {
      if (extras.extraShot && extras.whippedCream) return 8.25;
      else if (extras.whippedCream) return 5.0 + 2.0 + 0.75;
      else if (extras.extraShot) return 5.0 + 2.0 + 0.5;
      else return 5.0 + 2.0;
    } else return -1;
  } else return -1;
}

calculateCoffeePrice("large", "mocha", { whippedCream: true, extraShot: true });

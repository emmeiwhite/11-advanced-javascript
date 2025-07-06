/** Types of Errors:
 * 1) ReferenceError:
 * 2) TypeError:
 * 3) SyntaxError:
 */

// 1. ReferenceError: when a variable is used without declaration
try {
  console.log(c + d) // ReferenceError: c is not defined
} catch (error) {
  console.error(error.message)
}

// 2. SyntaxError: When you write a piece of code that JS cannot understand. Note that we cannot handle these SyntaxErrors due to these errors occuring in the compile phase (Creation Phase)
/*
try {
    let word = "Keep Moving... // SyntaxError: Invalid or unexpected token
} catch (error) {
    console.error(error.message)
}

const phonePrice; // Uncaught SyntaxError: Missing initializer in const declaration
*/

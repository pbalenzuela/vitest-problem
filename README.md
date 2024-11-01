This repository is meant to show a bug that is happening on vitest

## Jest works

### [ESModules support](https://jestjs.io/docs/ecmascript-modules)

*Jest ships with experimental support for ECMAScript Modules (ESM).
The implementation may have bugs and lack features. For the latest status check out the issue and the label on the issue tracker.
Also note that the APIs Jest uses to implement ESM support are still considered experimental by Node (as of version 18.8.0).*

## From GPT, differences between jest and vitest

Jest doesn’t typically encounter issues with functions named then because it doesn’t interpret module exports as promise-like objects. Jest’s environment is set up to handle test files and module imports in a more flexible way, allowing functions named then without interference.

In contrast, Vitest uses a worker-based, Vite-powered environment that closely resembles how ES modules and asynchronous operations work in modern JavaScript. This environment is more strict in handling promise-like behaviors due to the way it optimizes and bundles code. When a function is named then, Vitest’s environment might interpret it as a “thenable,” which is any object or function with a .then method that acts like a Promise.

Why the Difference?

	1.	Module Interpretation: Vitest, running under Vite, is optimized for ES modules and treats any object with a .then as a “thenable,” while Jest’s CommonJS-based approach is less strict about this.
	2.	Environment Setup: Jest doesn’t rely on the same strict module bundling and worker threads that Vitest does, allowing it to bypass this type of interpretation.

So, with Jest, function names like then remain just ordinary exports without being mistaken for promises, while Vitest’s stricter module handling creates a conflict. Renaming the function, if possible, should make it compatible across both testing environments.

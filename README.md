# cookie-genie

Cookie Genie is a lightweight library for managing cookies in browser using JavaScript or TypeScript. It provides methods to get and set cookies with optional parameters such as expiration date, path, domain, and secure.

<mark><b>This package is a revamped version of original [cookie-cutter](https://www.npmjs.com/package/cookie-cutter) package.</b></mark>

# Installation

You can install Cookie Genie via npm or yarn:

```bash
npm install cookie-genie
```

or

```bash
yarn add cookie-genie
```

# Usage

```typescript
import cookieGenie from "cookie-genie";

// Create a cookieGenie instance
const cookie = cookieGenie();

// Set a cookie
cookie.set("cookieName", "cookieValue", {
  expires: new Date(Date.now() + 3600000),
  path: "/",
  domain: "example.com",
});

// Get a cookie
const value = cookie.get("cookieName");
console.log(value); // Outputs: 'cookieValue'
```

See example for commonjs implementation using browserify.

# API

`cookieGenie()`

Creates a new Cookie Genie instance.

`get(key: string): string | undefined`

Retrieves the value of the cookie with the specified key.

key: The name of the cookie.
Returns the value of the cookie if found, otherwise undefined.

`set(key: string, value: string, options?: Options): string`

Sets a new cookie with the specified key, value, and optional options.

`key`: The name of the cookie.
`value`: The value to set for the cookie.
`options` (optional): An object containing additional options for the cookie.
Returns the string representation of the cookie.

`Options`:
`expires`: A Date object representing the expiration date of the cookie.
`path`: The path for which the cookie is valid.
`domain`: The domain for which the cookie is valid.
`secure`: A boolean indicating whether the cookie should only be transmitted over secure channels (HTTPS).

# License

This project is licensed under the MIT License - see the [LICENCE](LICENSE) file for details.

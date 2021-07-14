# postinstall-node-version-check

Logs a message on postinstall if the Node.js version being used is not supported.

## Usage

> The installation instructions mention npm, but you can use other package managers.

- Install the package:
  ```console
  $ npm install postinstall-node-version-check
  ```
- Add it to your postinstall script:
  ```json
  {
    //...
    "scripts": {
      //...
      "postinstall": "npm run postinstall-node-version-check"
    }
  }
  ```

## Output

The following message will be logged on postinstall on unsupported Node.js versions:

```console
The Node.js version vX.Y.Z is no longer supported.
```

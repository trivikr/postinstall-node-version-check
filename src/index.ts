#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).options({
  supportedVersions: {
    describe: "The versions of the supported platforms",
  },
}).argv;

import { satisfies } from "semver";

if (!satisfies(process.version, ">=10.0.0")) {
  process.emitWarning(
    `The Node.js ${process.version} is not supported.`,
    `NodeDeprecationWarning`
  );
}

#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).options({
  supportedVersions: {
    describe: "The versions of the supported platforms",
  },
}).argv;

import { emitWarningIfUnsupportedVersion } from "./emitWarningIfUnsupportedVersion";
emitWarningIfUnsupportedVersion(process.version);

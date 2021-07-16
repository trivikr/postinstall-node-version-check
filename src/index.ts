#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { satisfies } from "semver";

const { supportedVersions } = yargs(hideBin(process.argv))
  .usage(
    "Emits warning on postinstall if the Node.js version being used is not supported.\n\n" +
      "Usage:\n" +
      "  $0\n" +
      "    --supportedVersions <string>"
  )
  .options({
    supportedVersions: {
      alias: "s",
      describe: "The semver range of supported Node.js versions",
      type: "string",
      demandOption: true,
    },
  }).argv;

if (!satisfies(process.version, supportedVersions)) {
  process.emitWarning(
    `The Node.js ${process.version} is not supported.` +
      ` Please use "${supportedVersions}".`,
    `NodeVersionUnsupportedWarning`
  );
}

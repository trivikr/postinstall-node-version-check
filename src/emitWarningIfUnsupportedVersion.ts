export const emitWarningIfUnsupportedVersion = (version: string) => {
  if (version && parseInt(version.substring(1, version.indexOf("."))) < 10) {
    process.emitWarning(
      `The Node.js ${version} is not supported.`,
      `NodeDeprecationWarning`
    );
  }
};

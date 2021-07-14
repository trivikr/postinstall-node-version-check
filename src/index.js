var version = process.version;

if (version && parseInt(version.substring(1, version.indexOf("."))) < 10) {
  console.warn(`The Node.js version ${version} is no longer supported.`);
}

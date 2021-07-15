import { emitWarningIfUnsupportedVersion } from "./emitWarningIfUnsupportedVersion";

describe(emitWarningIfUnsupportedVersion.name, () => {
  const supportedVersion = "10.0.0";

  describe(`emits warning for Node.js <${supportedVersion}`, () => {
    const getPreviousMajorVersion = (major: number) =>
      major === 0 ? 0 : major - 1;

    const getPreviousMinorVersion = ([major, minor]: [number, number]) =>
      minor === 0 ? [getPreviousMajorVersion(major), 9] : [major, minor - 1];

    const getPreviousPatchVersion = ([major, minor, patch]: [
      number,
      number,
      number
    ]) =>
      patch === 0
        ? [...getPreviousMinorVersion([major, minor]), 9]
        : [major, minor, patch - 1];

    const [major, minor, patch] = supportedVersion.split(".").map(Number);
    it.each(
      [
        getPreviousPatchVersion([major, minor, patch]),
        [...getPreviousMinorVersion([major, minor]), 0],
        [getPreviousMajorVersion(major), 0, 0],
      ].map((arr) => `v${arr.join(".")}`)
    )(`%s`, async (unsupportedVersion) => {
      const spy = jest.spyOn(process, "emitWarning");
      emitWarningIfUnsupportedVersion(unsupportedVersion);
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });
  });

  describe(`emits no warning for Node.js >=${supportedVersion}`, () => {});
});

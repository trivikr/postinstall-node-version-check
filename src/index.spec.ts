jest.mock("./emitWarningIfUnsupportedVersion");

it("index", () => {
  require("./index");
});

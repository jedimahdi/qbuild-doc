test("inc", () => {
  document.body.innerHTML = `<button>Clicked 0 times</button>`;
  require("../index");
  expect(document.querySelector("button")?.textContent).toBe("Clicked 0 times");
  document.querySelector("button")?.click();
  expect(document.querySelector("button")?.textContent).toBe("Clicked 1 times");
  document.querySelector("button")?.click();
  expect(document.querySelector("button")?.textContent).toBe("Clicked 2 times");
  document.querySelector("button")?.click();
  expect(document.querySelector("button")?.textContent).toBe("Clicked 3 times");
});

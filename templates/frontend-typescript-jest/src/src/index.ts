let count = 0;
const button = document.querySelector("button");

// _q_solution_begin
button?.addEventListener("click", () => {
  count = count + 1;
  button.textContent = `Clicked ${count} times`;
});
// _q_end

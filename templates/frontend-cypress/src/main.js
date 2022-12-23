function main() {
  const button = document.getElementById("counter");

  let counter = 0;

  button.addEventListener("click", () => {
    counter++;
    button.innerHTML = `${counter}`;
  });
}

main()

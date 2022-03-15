let delay = 100;
let arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n' ]

for (let element of arr) {
  setTimeout(() => {
    process.stdout.write(element);
  }, delay);
  delay += 200;
};
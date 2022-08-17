console.log('test2 start.');

console.log(import.meta);

const css = new URL("test2.css", import.meta.url);
console.log(css);

const res = import.meta.resolve("../importmap.json");
console.log(res);

export function test2() {
  return "test2";
}

console.log('test2 end.');

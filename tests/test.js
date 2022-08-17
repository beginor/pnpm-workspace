const btn = document.getElementById('btn-test');

btn.addEventListener('click', async () => {

  const module = await import('./test2.js');
  const test2 = module.test2();

  console.log(test2);
});

console.log(import.meta.scriptElement);

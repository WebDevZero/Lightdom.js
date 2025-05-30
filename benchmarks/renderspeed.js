console.time('Render speed');

for (let i = 0; i < 10000; i++) {
  const element = document.createElement('div');
  element.textContent = 'Test ' + i;
}

console.timeEnd('Render speed');

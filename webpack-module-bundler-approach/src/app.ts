import { todoTemplate } from './classes/todo';
import { countdown } from './classes/countdown';

const container = document.getElementById('container');

const filtered = [1, 2, 3].filter((x) => x > 0);

countdown({ initial: 10, final: 0 });
console.log(filtered.join());

container.innerHTML = `
 <div>Data</div>
  ${todoTemplate}
`;

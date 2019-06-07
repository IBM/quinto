import { Quinto } from 'quinto';

(() => {
  const quinto = new Quinto({
    onClick: data => {
      console.log('data', data);
    }
  });
})();

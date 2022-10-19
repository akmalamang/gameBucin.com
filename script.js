let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  alert('haloo');
  alert('kamu cantik banget tau');
  alert('dan juga baik');
  alert('aku suka kamu tau');
  let pilih = confirm('maukah kamu menjadi pacar aku? ');
  if (pilih == true) {
    alert('oke makasih telah menerima aku');
    alert('I love YOU ❤️');
    alert('nanti malem minggu kita jalan ya');
    alert('terima kasih SAYANG');
  } else if (pilih == false) {
    let coba = confirm('please mau dong sama aku');
    if (coba == true) {
      alert('nah gitu dong mau');
      alert('kan aku jadi seneng ');
      alert('nanti aku beliin coklat ya');
      alert('I LOVE YOU SO MUCH ❤️❤️❤️');
    } else {
      alert('ko kamu ga mau sama aku');
      alert('aku jelek ya ');
      alert('dasar mandang fisik!🤪🤪🤪🤪');
    }
  }
});

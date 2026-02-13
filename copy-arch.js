document.addEventListener('DOMContentLoaded', function() {
  var btn = document.querySelector('.copy-arch');
  if (!btn) return;
  btn.addEventListener('click', function() {
    var arch = btn.getAttribute('data-arch');
    navigator.clipboard.writeText(arch).then(function() {
      var orig = btn.textContent;
      btn.textContent = 'copied';
      setTimeout(function() { btn.textContent = orig; }, 1500);
    });
  });
});

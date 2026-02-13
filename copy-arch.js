document.addEventListener('DOMContentLoaded', function() {
  var btn = document.querySelector('.copy-arch');
  if (!btn) return;
  var origHTML = btn.innerHTML;
  btn.addEventListener('click', function() {
    var arch = btn.getAttribute('data-arch');
    navigator.clipboard.writeText(arch).then(function() {
      btn.innerHTML = '✓ copied';
      setTimeout(function() { btn.innerHTML = origHTML; }, 1500);
    });
  });
});

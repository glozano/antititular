function save_options() {
  var input = document.getElementById('input').value;
  chrome.storage.sync.set({
    bugged: input,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'interferencia lista';
    setTimeout(function() {
      status.textContent = '';
    }, 3000);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    bugged: "http://www.infobae.com/, http://www.clarin.com/",
  }, function(items) {
    document.getElementById('input').value = items.bugged;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

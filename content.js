
chrome.storage.sync.get({
    bugged: "http://www.infobae.com/, http://www.clarin.com/"
  }, function(bugged) {
    var url = window.location.href;
    if(bugged.bugged) bugged = bugged.bugged;
    bugged = bugged.split(",");
    jQuery(bugged).each(function(k,web){
        if(url.indexOf(web.trim()) >= 0){
            var shuffle = function(array) {
                let counter = array.length;
                while (counter > 0) {
                    let index = Math.floor(Math.random() * counter);
                    counter--;
                    let temp = array[counter];
                    array[counter] = array[index];
                    array[index] = temp;
                }
                return array;
            }

            jQuery('h1,h2,h3,h4,h5,.headline').each(function(k,h){
                h.textContent = shuffle(h.textContent.split(" ")).join(" ")
            });
        }   
    }) 

  });




// "browser_action": {
//     "default_icon": "icon.png"
//   },
// Speaker Cross by Pencil from the Noun Project

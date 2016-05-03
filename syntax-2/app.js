/*
 * Add items to a list - from cssanimation.rocks/list-items/
 */
var counter = 1;

document.getElementById('add-to-list').onclick = function() {
  var list = document.getElementById('list');
  var newLI = document.createElement('li');
  newLI.innerHTML = '<form action="#">'
              + '<p>'
                +  '<label class="label">Movement No. ' + counter + ':     </label>'
                +  '<select class="turnintodropdown">'
                   +   '<option>Please select a level:</option>'
                      +    '<option>High</option>'
                      +    '<option>Medium</option>'
                       +   '<option>Deep</option>'
                  + '</select>'
                +  '<select class="turnintodropdown">'
                  +    '<option>Please select a lateral direction:</option>'
                        +  '<option>Left</option>'
                        +  '<option>Right</option>'
                       +   '<option>None</option>'
                 +  '</select>'
                +   '<select class="turnintodropdown">'
                  +    '<option>Please select a sagittal direction:</option>'
                      +    '<option>Forward</option>'
                       +   '<option>Back</option>'
                       +   '<option>None</option>'
                 +  '</select>'
           +   '</p>'
           + ' Time duration (sec): <input name="username" type="text" class="time"> '
       +   '</form>';
  list.appendChild(newLI);
  counter++;
  setTimeout(function() {
    newLI.className = newLI.className + " show";
  }, 10);
}
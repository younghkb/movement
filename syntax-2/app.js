/*
 * Hannah Young
 * DSL's, Spring 2016
 * Controlling the syntax and grabbing values
 * The IR Level
 */

// Global counter to track each movement
var counter = 2;


/*
 * Anonymous fn that generates the list items where users 
 * can record a new movement in a phrase
 * Reference- from cssanimation.rocks/list-items/
 */
document.getElementById('add-to-list').onclick = function() {
  var list = document.getElementById('list');
  var newLI = document.createElement('li');
  newLI.innerHTML = '<form action="#" id="' + counter +'">'
                  + '<p>'
                  + '<label class="label">Movement No. ' + counter + ':</label>'
                  + '<div class="instruction"> Vertical: </div>'
                  + '<select class="field">'
                  + '<option value="high">High</option>'
                  + '<option value="medium">Medium</option>'
                  + '<option value="deep">Deep</option>'
                  + '</select>'
                  + '<div class="instruction"> Lateral: </div>'
                  + '<select class="field">'
                  + '<option value="left">Left</option>'
                  + '<option value="right">Right</option>'
                  + '<option value="none">None</option>'
                  + '</select>'
                  + '<div class="instruction"> Sagittal: </div>'
                  + '<select class="field">'
                  + '<option value="forward">Forward</option>'
                  + '<option value="back">Back</option>'
                  + '<option value="none">None</option>'
                  + '</select>'
                  + '</p>'
                  + ' <div class="instruction"> Time (sec): </div>'
                  + '<input name="username" type="text" class="field" placeholder="3">'
                  + '</form>';
  list.appendChild(newLI);
  counter++;
  setTimeout(function() {
    newLI.className = newLI.className + " show";
  }, 10);
}


/*
 * createPhrase 
 * Function that will grab the user's entire movement phrase
 * If movement phrase contains invalid values, returns errors
 */




/*
 * Hannah Young
 * DSL's, Spring 2016
 * Controlling the syntax and grabbing values to create the IR
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
                  + '<select class="field" id="vertical' + counter + '">'
                  + '<option value="high">High</option>'
                  + '<option value="medium">Medium</option>'
                  + '<option value="deep">Deep</option>'
                  + '</select>'
                  + '<div class="instruction"> Lateral: </div>'
                  + '<select class="field" id="lateral' + counter + '">'
                  + '<option value="left">Left</option>'
                  + '<option value="right">Right</option>'
                  + '<option value="none">None</option>'
                  + '</select>'
                  + '<div class="instruction"> Sagittal: </div>'
                  + '<select class="field" id="sagittal' + counter +'">'
                  + '<option value="forward">Forward</option>'
                  + '<option value="back">Back</option>'
                  + '<option value="none">None</option>'
                  + '</select>'
                  + '</p>'
                  + ' <div class="instruction"> Time (sec): </div>'
                  + '<input name="username" type="text" class="field" placeholder="3" id="time' + counter + '">'
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
function createPhrase() {
    var phrase = [];

    for (var i = 1; i< counter; i++)
    {
        var vertical = document.getElementById("vertical" + i);
        var verticalSelect = vertical.options[vertical.selectedIndex].text;

        var lateral = document.getElementById("lateral" + i);
        var lateralSelect = lateral.options[lateral.selectedIndex].text;

        var sagittal = document.getElementById("sagittal" + i);
        var sagittalSelect = sagittal.options[sagittal.selectedIndex].text;

        var time = document.getElementById("time" + i);
        var timeSelect = time.value;

        // If the user forgot to input a time, use the default time provided
        if (timeSelect == "")
        {
            timeSelect = 3;
        }

        var movement = [verticalSelect, lateralSelect, sagittalSelect, timeSelect];
        phrase.push(movement);
    }

    // Logged out so that the IR can be viewed since there is no connection 
    // to a display of some sorts right now.
    console.log(phrase);
    return phrase;
}




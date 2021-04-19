function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');
  var latitude = document.querySelector("#latitude").value;
  var longitude = document.querySelector("#longitude").value;
  var invalidLatitude = document.getElementById("Latitude");
  var invalidLongitude = document.getElementById("Longitude");

  if (invalidLatitude.childNodes.length > 1) {
    invalidLatitude.removeChild(invalidLatitude.lastChild);
  }
  
  if (invalidLongitude.childNodes.length > 1) {
    invalidLongitude.removeChild(invalidLongitude.lastChild);
  }

  if(latitude) {
    if (!isNaN(latitude)) {
      var latitudeValue = parseFloat(latitude);

      if (latitudeValue >= -90 && latitudeValue <= 90) {

        if(longitude) {

          if (!isNaN(longitude)) {
            var longitudeValue = parseFloat(longitude);

            if (longitudeValue >= -180 && longitudeValue <= 180) {
              return true;      
            }
            else{
              var text = document.createTextNode(" must be a valid Longitude (-180 to 180)");
              invalidLongitude.appendChild(text);
              return false;
            }
          }
          else{
            var text = document.createTextNode(" must be a valid Longitude (-180 to 180)");
            invalidLongitude.appendChild(text);
            return false;
          }
        }            
      }
      else{
        var text = document.createTextNode(" must be a valid Latitude (-90 to 90)");
        invalidLatitude.appendChild(text);
        return false;
      }
    }
    else{
      var text = document.createTextNode(" must be a valid Latitude (-90 to 90)");
      invalidLatitude.appendChild(text);
      return false;
    }
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};

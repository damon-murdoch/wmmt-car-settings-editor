// By default, no file is selected
document.file = null;

// No recorded file name
document.filename = null;

// File type

// 0: None
// 1: Mini Sticker
// 2: Settings
// 3: GT Wing

// Default: None
document.type = 0;

// setField(id: String, value: Int)
function setField(id, value)
{
    // If file is initialised
    if (document.file)
    {
        // Set the field in the file
        document.file.setField(id, value);

        // Update the value of the input field
        setValue('s_' + id, value);

        // Success code
        return 0;
    }
    else // file not initialised
    {
        console.log("Failed to set value of field '" + id + "' to value '" + value + "'! Reason:", err);

        // Failure code
        return 1;
    }
}

// setValue(id: String, value: Int)
// If it exists, sets the value of a 
// selected menu to the value provided.
function setValue(id, value)
{
    try
    {
        // Set the element with the given id to the provided value
        document.getElementById(id).value = value;

        // Success code
        return 0;
    }
    catch(err) // General failure
    {
        // Report failure to console
        console.log("Failed to set selected value of element with id '" + id + "' to value '" + value + "'! Reason:", err);

        // Failure code
        return 1;
    }
}

// resetPage(void): Void
// Hard reloads the current
// page and empties all of the
// input fields.
function resetPage()
{
    // Page hard reload (clear cache)
    window.location.reload(true);
}


// resetDropdown(id: String): Void
// If it exists, resets the select
// element with the given id to the
// default option.
function resetDropdown(id)
{
  try
  {
    // Get the element with the given id
    let element = document.getElementById(id);

    // Clear the inner html of the element
    element.innerHTML = "";

    // Add the default element to the child
    element.appendChild(newOption(
      'o_' + id + '_default', // Element id
      'default', // Default option
      'Not Available' // Default text
    )); 
  }
  catch
  {
    console.log("Failed: Dropdown '",id,"' does not exist!");
  }
}

// newOption(id: String, value: String, content: String): Element
// Creates a select element with the given id, value and content
// and returns it to the calling process.
function newOption(id, value, content)
{
  // Create a new option
  let option = document.createElement('option');

  // Assign the html content to the innerHTML
  option.innerHTML = content;

  // Set the option value to the value provided
  option.value = value;

  // Set the option id to the id provided
  option.id = id;

  // Return the created option object
  return option;
}

// setSelected(id: String, value: Boolean): Void
// If it exists, sets the selected property for 
// the given element to true. Otherwise, does nothing.
function setSelected(id, value)
{
  try
  {
    // Set the element with the given id to the provided value
    document.getElementById(id).selected = value;

    // Successful assignment
    return true;
  }
  catch(err) // General failure
  {
    // Report failure to console
    console.log("Failed to set selected property of element with id '" + id + "' to value '" + value + "'! Reason:", err);

    // Assignment failed
    return false;
  }
}

// setDisabled(id: String, value: Boolean)
// If it exists, sets the disabled property for 
// the given element to true. Otherwise, does nothing.
function setDisabled(id, value)
{
  try
  {
    // Set the element with the given id to the provided value
    document.getElementById(id).disabled = value;

    // Successful assignment
    return true;
  }
  catch(err) // General failure
  {
    // Report failure to console
    console.log("Failed to set disabled property of element with id '" + id + "' to value '" + value + "'! Reason:", err);

    // Assignment failed
    return false;
  }
}


// handleDownload(Void): Void
// Handle the save file download from the site
function handleDownload()
{
    // downloadBlob(data: Uint8array, filename: String, mimetype: String)
    function downloadBlob(data, filename, mimetype) 
    {
        // downloadURL(data: Uint8array, filename: String): Void
        function downloadURL(data, filename) 
        {
            // Create link element
            const a = document.createElement('a')

            // Point link to the data
            a.href = data

            // Set the download name to the filename
            a.download = filename

            // Add the link to the document
            document.body.appendChild(a)

            // Hide the link
            a.style.display = 'none'

            // Click on the link
            a.click()

            // Remove the link
            a.remove()
        }

        // Create a new blob using the data
        const blob = new Blob([data], {
            // Use given mimetype for data write
            type: mimetype
        });
        
        // Create an object url for the blob data
        const url = window.URL.createObjectURL(blob)
        
        // Download the file
        downloadURL(url, filename)
        
        // Set a download timeout before the url is revoked
        setTimeout(() => window.URL.revokeObjectURL(url), 1000)
    }

    // If a file has been uploaded
    if (this.document.file !== null)
    {
        // Get the UINT8 array, convert to blob data and download the file
        downloadBlob(
            this.document.file.getMap().getUINT8Array(), // Binary Values
            document.filename, // Filename of the uploaded file
            'application/octet-stream' // MIMETYPE for Binary Files
        );
    }
    else // No file uploaded
    {
        // Do nothing
    }
}

// handleUpload(Void): Void
// Handle the file upload to the site
function handleUpload()
{
    // Get the file from the upload 
    let file = document.getElementById('i_file').files[0];
    
    // If a file has been uploaded
    if (file !== undefined)
    {
      // Set the filename variable to the name of the uploaded file
      document.filename = file.name;

      // File reader object for opening user input
      const reader = new FileReader();

      // Code to run if reader succeeds
      reader.onload = function(e) {

        try
        {
          // Null out the existing file object
          document.file = null;

          // Disable all of the select tags
          disableAllWithTag('select');

          // Hide all of the editor divs
          hideEditorDivs();

          // Get the file extension of the filename
          let extension = myString = document.filename.substring(document.filename.indexOf('.')+1)

          // Switch on the file type
          switch(extension)
          {
            case 'ministick': // Mini Sticker
              hideElement('d_ministick', false);
              document.type = 2;
            break;
            case 'gtwing': // GT Wing
              hideElement('d_gtwing', false);
              document.type = 1;
            break;
            default:
              console.log("Unknown extension:", extension);
              break;
          }

          // Get the map from the buffer, and create a new file using the map

          // If file is created successfully, assign to the document
          document.file = new FileObject(
            new Map(e.target.result), // Binary data of thefile
            document.type // Type of file
          );

          // If a file is loaded
          if (document.file)
          {                    
            // Loop over all of the supported fields
            document.file.getFields().forEach(field => {

              // Create the id for the drop-down select
              let id = 's_' + field;

              // Get the select element from the id
              let select = null; 
              
              try
              {
                // Get the select drop-down for the element
                select = document.getElementById(id);
              }
              catch // No select exists
              {
                // Must not be implemented yet, log to console
                console.log('Not implemented:', select);
              }


              // Ensure the select exists before continuing
              if (select)
              {
                // Reset the content of the select
                resetDropdown(id);

                // Get the drop-down with all of the possibilities
                let options = document.file.getOptions(field);

                // Sort the options based on the id
                options.sort(function(a, b){
                  // Compare the value of the hex strings between the objects
                  return Number("0x" + a.id) > Number("0x" + b.id);
                }); 

                // Populate the drop-down with all of the possibilities
                options.forEach(option => {

                  // Create the id for the drop-down option
                  let o_id = 'o_' + field + '_' + option.id;

                  // Append an option element to the select dropdown
                  select.appendChild(newOption(o_id, option.id, option.name));
                }); 

                // Set the current value of the file to the currently selected element
                setSelected('o_' + field + '_' + document.file.getField(field), true);

                // Enable the drop-down for the select field
                setDisabled(id, false);
              }
            });
          }
        }
        catch(err) // Fails to create file object
        {
          // Document file is null
          document.file = null;
          document.filename = null;

          // Disable all of the drop-downs

          // Write error to terminal
          console.error("Error:",err);
        }
      };

      // Read the binary content from the file
      reader.readAsArrayBuffer(file);
    }
}

// randomiseField(field: String): Void
// Given a field, randomises the field if
// it is compatible with the current vehicle.
function randomiseField(field)
{
  // Get locations object
  let locations = document.file.getLocations();

  // Get the random value from the field
  let rand = locations.getRandom(field);

  // Set the value of the file to the random field
  document.file.setField(field, rand.id);

  // Set the selected drop-down option to the new setting
  setSelected('o_' + field + '_' + rand.id, true);
}

// hideElement(id: String): Void
// Given an element id, hides the
// element from the display.
function hideElement(id, hidden=true)
{
  try
  {
    // Get the element with the given id
    let elem = document.getElementById(id);

    // Set the hidden status to the provided status

    // Hidden is true
    if (hidden)
    {
      // Hide the element
      elem.style.display = 'none';
    }
    else // Hidden is false
    {
      // Display the element normally
      elem.style.display = 'block';
    }
  }
  catch(e) // General error
  {
    console.error("Failed to hide element! Reason:" + e.message);
  }
}

// hideEditorDivs(void): Void
// Hide all of the editor divs.
function hideEditorDivs()
{
  // Hide the editor divs
  hideElement('d_ministick');
  hideElement('d_gtwing');
}

// disableDropdowns(tag: String): void
// Given a tag (element type), disables
// all of the elements with that type.
function disableAllWithTag(tag)
{
  // Retrieve all of the elements with the given tag
  let elements = document.getElementsByTagName(tag);

  // Loop over all of the selected elements
  Object.keys(elements).forEach(element => {
       
    // Verify if the element has an id
    let id = elements[element].id;

    // Id is valid
    if (id)
    {
      // Disable the selected element
      setDisabled(id, true);
    }

  });
}

// Hide all of the editor divs
hideEditorDivs();
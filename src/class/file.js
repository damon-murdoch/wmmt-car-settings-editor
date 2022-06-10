class File 
{
    // Constructor
    // Requires a map to get info from
    constructor(map, fileType)
    {
        // Set the map for this car to the given map
        this.map = map;

        // Hex info for file type
        let hexInfo = null;

        // Get the hex table info for the game selected
        switch(fileType)
        {
            case 1: // Settings
                hexInfo = SETTINGS;
                break;

            case 2: // GT Wing
                hexInfo = GTWING;
                break;
            
            case 3: // Mini Sticker
                hexInfo = MINI_STICKER;
                break;

            default: // None / other
                throw "Unknown FileType/No filetype!";
        }

        // Use the location data for maximum tune 6
        this.locations = new Hextable(
            hexInfo.location, // Locations
            hexInfo.value // Values
        )
    }

    // setMap(map: Map): void
    // Given a map, sets the car's 
    // map to the given map object.
    setMap(map)
    {
        // Update the map object
        this.map = map;
    }

    // getMap(void): Map
    // Returns the map stored
    // within the car object.
    getMap()
    {
        // Return the map object
        return this.map;
    }

    // setLocations(locations: Object): Void
    // Given a locations object, sets the
    // hex locations for the car to the 
    // given locations object.
    setLocations(locations)
    {
        // Update the locations object
        this.locations = locations;
    }

    // getLocations(Void): Object
    // Returns the locations object
    // used by the car
    getLocations()
    {
        // Return the locations object
        return this.locations;
    }

    // setField(field: String, value: String)
    // If the field is present, returns the value
    // of the field. Otherwise, returns null.
    setField(field, option)
    {
        // Get the hex index for the field
        let coords = this.getLocations().getLocation(field);

        // Set the element in the element corresponding to the field location
        this.map.setElementAt(coords[0], coords[1], option);
    }

    // getField(field: String)
    // If the field is present, returns
    // the value of the field. Otherwise,
    // returns null.
    getField(field)
    {
        // Get the hex index for the field
        let coords = this.getLocations().getLocation(field);

        // Get the element in the element corresponding to the field location
        return this.map.getElementAt(coords[0], coords[1]);
    }

    // getFields(void): List
    getFields()
    {
        // Return the list of keys for the locations object
        return this.getLocations().getKeys();
    }

    // getOptions(field: String)
    // Gets all of the possible 
    // options which can be applied
    // to this car for this game.
    getOptions(field)
    {
        // List of options to return
        let list = [];

        // Get the list of options for the given field
        let options = this.getLocations().getValues()[field];

        // Loop over all of the options in the values list for the field
        Object.keys(options).forEach(option => {

            list.push({

                // Name of the option
                name: options[option],

                // ID (Hex Value) for the option
                id: option 

            });
        });

        // Return the completed list
        return list;
    }
}
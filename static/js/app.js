function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
};

// select the dropdown menu
    var dropdownMenu = d3.select("#selDataset")

// select the panel body
    var panel = d3.select("#sample-metadata")

d3.json("samples.json").then(function(data) {
    // console.log(data)

    // isoloate the metadata
    var metadata = (data.metadata);
    // console.log(metadata)

    // add participant IDs to drop-down list
    metadata.forEach(function (person) {
        var option = dropdownMenu.append("option");
        option.text(person.id);
    });

    // isoloate the samples data
    var samples = (data.samples);
    // console.log(samples)

    // create the event handler for when a new participant id is selected
    dropdownMenu.on("click", updatePlots);

    // define the function for what happens when a participant id is selected
    function updatePlots() {
        // pull the selected participant ID from the dropdown
        var inputValue = dropdownMenu.property("value"); 
        // console.log(inputValue);

        var selectID = function selectID (participant) {
            return participant.id == inputValue;
        };

        // pull the participant data for the participant ID that was selected in the dropdown
        var selectedMeta = metadata.filter(selectID);
        // console.log(selectedMeta);

        // create variables to hold the participant data
        var id = selectedMeta.map(function(dataPoint) {
            return dataPoint.id});
        var ethnicity = selectedMeta.map(function(dataPoint) {
            return dataPoint.ethnicity});
        var gender = selectedMeta.map(function(dataPoint) {
            return dataPoint.gender });
        var age = selectedMeta.map(function(dataPoint) {
            return dataPoint.age});
        var location = selectedMeta.map(function(dataPoint) {
            return dataPoint.location});
        var bbtype = selectedMeta.map(function(dataPoint) {
            return dataPoint.bbtype});
        var wfreq = selectedMeta.map(function(dataPoint) {
            return dataPoint.wfreq});

        // populate the panel body with the participant data 
        var p = (`ID: ${id}\n
        Ethnicity: ${ethnicity}\n
        Gender: ${gender}\n
        Age: ${age}\n
        Location: ${location}\n
        BB Type: ${bbtype}\n
        Wash Freq: ${wfreq}`)

        panel.text(p)

        var selectedSamples = samples.filter(selectID);
        // console.log(selectedSamples);

        // define bar plot values
        // pull out the IDs, Values, and Labels from the selected particpant ID
        var idsArray = selectedSamples[0].otu_ids
        var valuesArray = selectedSamples[0].sample_values
        var labelsArray = selectedSamples[0].otu_labels

        // narrow selected data down to just the top 10
        var splitIDs = idsArray.slice(0, 10)
        var otu_ids = splitIDs.map(String) 
        var sample_values = valuesArray.slice(0, 10)
        var otu_labels = labelsArray.slice(0, 10)

        console.log(otu_ids)
    
        // define bar plot values
        var barChart = d3.select(".bar");
        
        // set up table data
        var data = [{
            type: 'bar',
            x: sample_values,
            y: otu_labels,
            orientation: 'h'
        }];
  
        Plotly.newPlot('bar', data);

        var bubbleChart = d3.select(".bubble");
        // sample data from plotly
        var trace1 = {
            x: otu_ids,
            y: sample_values,
            mode: 'markers',
            marker: {
            // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
            // opacity: [1, 0.8, 0.6, 0.4],
            size: sample_values
            }
        };
        
        var data = [trace1];
        
        var layout = {
            title: 'Marker Size and Color',
        };
        
        Plotly.newPlot('bubble', data, layout);
    }; 
    
});





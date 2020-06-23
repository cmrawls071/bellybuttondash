// set up table data
var data = [{
    type: 'bar',
    x: [40,40,47,50,51,71,78,113,126,163],
    y: ["OTU: 1977","OTU: 2318","OTU: 189","OTU: 352","OTU: 1189","OTU: 41","OTU: 2264","OTU: 482","OTU: 2859","OTU: 1167"],
    orientation: 'h',
    // text: otu_labels
}];

var layout = {
    title: "Most Common Bacteria Strains"
  };

Plotly.newPlot('bar', data, layout);

var bubbleChart = d3.select(".bubble");
var trace1 = {
    x: [1167,	2859,	482,	2264,	41,	1189,	352,	189,	2318,	1977,	3450,	874,	1959,	2191,	1950,	2077,	2275,	944,	2184,	2244,	2024,	2419,	2811,	165,	2782,	2247,	2011,	2396,	830,	2964,	1795,	2722,	307,	2178,	2908,	1193,	2167,	1208,	2039,	1274,	2739,	2737,	1314,	1962,	2186,	2335,	2936,	907,	833,	2483,	2475,	2491,	2291,	159,	2571,	2350,	2342,	2546,	725,	170,	1505,	513,	259,	1169,	258,	1232,	1497,	1498,	1503,	412,	2235,	1960,	1968,	121,	2065,	340,	2110,	2188,	357,	342],
    y: [163,	126,	113,	78,	71,	51,	50,	47,	40,	40,	37,	36,	30,	28,	25,	23,	22,	19,	19,	14,	13,	13,	13,	12,	12,	11,	11,	11,	10,	10,	10,	8,	7,	7,	7,	6,	5,	5,	5,	4,	4,	4,	3,	3,	3,	3,	3,	3,	3,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2],
    mode: 'markers',
    marker: {
    color: [163,	126,	113,	78,	71,	51,	50,	47,	40,	40,	37,	36,	30,	28,	25,	23,	22,	19,	19,	14,	13,	13,	13,	12,	12,	11,	11,	11,	10,	10,	10,	8,	7,	7,	7,	6,	5,	5,	5,	4,	4,	4,	3,	3,	3,	3,	3,	3,	3,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2],
    size: [163,	126,	113,	78,	71,	51,	50,	47,	40,	40,	37,	36,	30,	28,	25,	23,	22,	19,	19,	14,	13,	13,	13,	12,	12,	11,	11,	11,	10,	10,	10,	8,	7,	7,	7,	6,	5,	5,	5,	4,	4,	4,	3,	3,	3,	3,	3,	3,	3,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2],
    text:  ["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus",	 "Bacteria",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",	 "Bacteria",	 "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas",	 "Bacteria",	 "Bacteria",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales",	 "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter",	 "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum",	 "Bacteria;Firmicutes;Clostridia",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",	 "Bacteria;Firmicutes;Clostridia",	 "Bacteria;Firmicutes;Clostridia;Clostridiales",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",	 "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",	 "Bacteria;Firmicutes;Clostridia;Clostridiales",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus",	 "Bacteria",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",	 "Bacteria;Firmicutes;Clostridia;Clostridiales",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae",	 "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia",	 "Bacteria",	 "Bacteria;Firmicutes;Clostridia;Clostridiales",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus",	 "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas",	 "Bacteria;Firmicutes;Clostridia;Clostridiales",	 "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas",	 "Bacteria;Firmicutes;Clostridia;Clostridiales",	 "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola",	 "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella",	 "Bacteria;Firmicutes;Clostridia",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;Ruminococcaceae",	 "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae",	 "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",	 "Bacteria",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",	 "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales",	 "Bacteria",	 "Bacteria;Firmicutes",	 "Bacteria",	 "Bacteria",	 "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas",	 "Bacteria",	 "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas",	 "Bacteria;Firmicutes",	 "Bacteria;Firmicutes",	 "Bacteria;Firmicutes",	 "Bacteria",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",	 "Bacteria;Firmicutes;Clostridia",	 "Bacteria;Firmicutes;Clostridia",	 "Bacteria",	 "Bacteria;Firmicutes;Clostridia;Clostridiales",	 "Bacteria",	 "Bacteria;Firmicutes;Clostridia;Clostridiales",	 "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI","Bacteria","Bacteria"]

    }
};

var data = [trace1];

var layout = {
    title: "Amount of Bacteria Present",
    xaxis: { title: "OTU ID" }
  };

Plotly.newPlot('bubble', data, layout);

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
        var newidsArray = []
        for (var i = 0; i < idsArray.length; i++) {
            var id = selectedSamples[0].otu_ids[i]
            var idName = `OTU: ${id}`
            newidsArray.push(idName)
        };
        var valuesArray = selectedSamples[0].sample_values
        var labelsArray = selectedSamples[0].otu_labels

        console.log(idsArray)
        console.log(valuesArray)
        console.log(labelsArray)

        // narrow selected data down to just the top 10
        var otu_ids = newidsArray.slice(0, 10).reverse()
        var sample_values = valuesArray.slice(0, 10).reverse()
        var otu_labels = labelsArray.slice(0, 10).reverse()

        // define bar plot values
        var barChart = d3.select(".bar");
        
        // set up table data
        var data = [{
            type: 'bar',
            x: sample_values,
            y: otu_ids,
            orientation: 'h',
            text: otu_labels
        }];

        var layout = {
            title: "Most Common Bacteria Strains"
          };
  
        Plotly.newPlot('bar', data, layout);

        var bubbleChart = d3.select(".bubble");
        // sample data from plotly
        var trace1 = {
            x: idsArray,
            y: valuesArray,
            mode: 'markers',
            marker: {
            color: valuesArray,
            size: valuesArray,
            text: labelsArray
            }
        };
        
        var data = [trace1];
        
        var layout = {
            title: "Amount of Bacteria Present",
            xaxis: { title: "OTU ID" }
          };
        
        Plotly.newPlot('bubble', data, layout);
    }; 
    
});





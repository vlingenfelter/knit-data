
// in inches
// minimum length scarf, maximum length scarf
const scarfLengthRange = [55,82];

// int length => string needle size
// takes in length of csv returns the largest needle size you could use to get all data
const largestNeedleSize = (length) => {

}

// key: int yarn weight
// values: object containing common names for yarn weight
// all recommended needle sizes
// range of how many yards are in 100g
const yarnToNeedle = {
	1: {
		commonNames: ['Fingering', 'Sock'],
		needleUS: ['1', '2', '3'],
		yardsPer100g: [437, 524],
		widths: [30, 45, 60, 90],
		sitchesPerInch: 7,
		rowsPerInch: 9,
	},
	2: {
		commonNames: ['Sport', 'Light DK'],
		needleUS: ['3', '4', '5'],
		yardsPer100g: [328, 437],
		widths: [25, 35, 50, 75],
		sitchesPerInch: 6,
		rowsPerInch: 8,
	},
	3: {
		commonNames: ['DK', 'Light Worsted'],
		needleUS: ['5', '6', '7'],
		yardsPer100g: [262, 328],
		widths: [23, 35, 45, 60],
		sitchesPerInch: 5.5,
		rowsPerInch: 7,
	},
	4: {
		commonNames: ['Worsted', 'Afgan'],
		needleUS: ['7', '8', '9'],
		yardsPer100g: [218, 262],
		widths: [20, 30, 40, 60],
		sitchesPerInch: 5,
		sitchesPerInch: 6.5,
	},
	5: {
		commonNames: ['Chunky', 'Bulky'],
		needleUS: ['9', '10', '11'],
		yardsPer100g: [120, 142],
		widths: [15, 23, 30, 45],
		sitchesPerInch: 4,
		rowsPerInch: 6,
	},
}

// table where RowsPerWeight[Scarf Length][Yarn Weight] = NumberOfRows
const rowsPerWeight = [
	[495, 440, 385, 356, 330],
	[540, 480, 420, 390, 360],
	[630, 560, 490, 455, 420],
	[720, 640, 560, 520, 480],
];

export const scarfWidths = [
		"Skinny (3-4 inches)", 
		"Thin (5-6 inches)", 
		"Standard (7-8 inches)", 
		"Wide (10-12 inches)"
	];

export const scarfLengths = [
		"Very Short (~55 inches)",
		"Short (~60 inches)",
		"Medium (~70 inches)",
		"Long (~80 inches)"
	];


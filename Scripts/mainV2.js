var fourPersonActiveTileArray = [
        $('#hex-32'),
        $('#hex-33'),
        $('#hex-34'),
        $('#hex-41'),
        $('#hex-42'),
        $('#hex-43'),
        $('#hex-44'),
        $('#hex-50'),
        $('#hex-51'),
        $('#hex-52'),
        $('#hex-53'),
        $('#hex-54'),
        $('#hex-60'),
        $('#hex-61'),
        $('#hex-62'),
        $('#hex-63'),
        $('#hex-70'),
        $('#hex-71'),
        $('#hex-72'),
    ];

function addIDToHex() {
	var hexTiles = $('.hex-xs');

    for (i = 0; i < hexTiles.length; i++) {
        var currentTile = hexTiles[i];
        currentTile.setAttribute('id', 'hex-' + i + '');

    }
}



function generateTile(val) {
	return '<li><div id="h" class="hex-xs"><span>' + val + '</span></div></li>';
}

function rowFactory(isEven, length) {
	var evenRowHtml = '<ul class="even-row">';
	var oddRowHtml = '<ul class="odd-row">';
	var rowHtml = '';
	
	if(isEven) {
		rowHtml += evenRowHtml;
		
		for(i=0;i<length-1;i++){
			rowHtml += generateTile(3);
		}
	} 
	if (!isEven) {
		rowHtml += oddRowHtml;
		
		for(i=0;i<length;i++){
			rowHtml += generateTile(8);
		}
		
	}
	rowHtml += '</ul>';
	return rowHtml;
}

function generateHexGrid(height, width) {
    var odd = true; 
    var hexGrid = $('#board-container');

    console.log('entered');

    for(var i=0; i<height; i++){
    	odd =! odd;
        $('#board-container').append(rowFactory(odd, width));
    }

    addIDToHex();
}


$(function ()  {
    
	var gameModeArray = [
		{type: "normal", expansion: false},
		{type: "normal", expansion: true}
	];

    var gridHeight = 13;
    var gridWidth = 13;

    generateHexGrid(gridHeight, gridWidth);
    
});
var PGN_file;

function JS_main(ML_interface) {
    "use strict";
    var offset;
    var limit;
    var needle = "f=";
    var href = ML_interface.location.href;

    offset = href.search(needle);
    if (offset >= 0) {
        limit = href.length; /* To do:  Adjust if '&' occurs. */
        PGN_file = href.substring(offset + needle.length, limit);
    }

new PgnViewer( {
    boardName                      :  "games",
    pgnFile                        :  PGN_file,
    pieceSet                       :  "merida",
    pieceSize                      :  55,
    movesFormat                    :  "main_on_own_line",
    pauseBetweenMoves              :  1000,

 // pollPGNMilliseconds            :  5000,
 // gotoEndOnRefresh               :  true,
    highlightFromTo                :  true,
    showCoordinates                :  true,
    autoScrollMoves                :  true,
 // showBracketsOnVariation        :  false,
    hideBracketsOnTopLevelVariation:  true,
    moveAnimationLength            :  0.3,
    newlineForEachMainMove         :  false,
 // variationStartString           :  "[",
 // variationEndString             :  "]",
} );
    return;
}


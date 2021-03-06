var PGN_file;
var already_init = false;

function JS_main(ML_interface) {
    "use strict";
    var offset;
    var limit;
    var needle = "f=";
    var href = ML_interface.location.href;

    offset = href.search(needle);
    PGN_file = "default.pgn";
    if (offset >= 0) {
        limit = href.length; /* To do:  Adjust if '&' occurs. */
        PGN_file = href.substring(offset + needle.length, limit);
    }
    init_pgn4web(PGN_file);
    return (PGN_file);
}

function init_pgn4web(PGN_location) {
    "use strict";
    if (already_init === true) {
        return;
    }
    SetPgnUrl(PGN_location);

    SetImagePath("../pgn4web/images/alpha/64/");
    SetImageType("png");

    SetShortcutKeysEnabled(true);
    SetAutoplayDelay(2000);
    SetHighlightOption(true);

    SetCommentsIntoMoveText(true);
    SetCommentsOnSeparateLines(true);
    enableAutoScrollToCurrentMove("GameText"); /* undocumented, newer feature */

    SetGameSelectorOptions(
        "     White Player    ||    Black Player    || Score ||   Date",
        false,

        0, // Event
        0, // Site
        0 * 5, // Round
        20, // White
        20, // Black
        7, // Result
        10 //Date
    );
    already_init = true;
    return;
}

function customFunctionOnPgnGameLoad() {
    "use strict";

    customPgnHeaderTag("ECO", "myECO");
    customPgnHeaderTag("Opening", "myOpening");
    customPgnHeaderTag("Variation", "myVariation");

    customPgnHeaderTag("WhiteElo", "myWhiteElo");
    customPgnHeaderTag("BlackElo", "myBlackElo");

    customPgnHeaderTag("TimeControl", "myTimeControl");
    return;
}

var PGN_file = "404.pgn";

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
    SetPgnUrl(PGN_file);

    SetImagePath("../pgn4web/images/alpha/64/");
    SetImageType("png");

    SetShortcutKeysEnabled(true);
    SetAutoplayDelay(2000);
    SetHighlightOption(true);

    SetCommentsIntoMoveText(false);
    SetCommentsOnSeparateLines(true);

    SetGameSelectorOptions(
        "Select a game...",
        true,

        0, // Event
        0, // Site
        1 * 0, // Round
        20, // White
        20, // Black
        7, // Result
        10 //Date
    );
    return;
}

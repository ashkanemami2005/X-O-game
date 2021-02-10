$(function() {

    var player = 1;
    var table = $('table');
    var messages = $('.messages');
    var turn = $('.turn');
    displayNextPlayer(turn, player);

    $('td').click(function() {
        td = $(this);
        var state = getState(td);
        if(!state) {
            var pattern = definePatternForCurrentPlayer(player);
            changeState(td, pattern);
            if(checkIfPlayerWon(table, pattern)) {
                messages.html('Gamer '+player+' won');
                turn.html('');
            } else {
                player = setNextPlayer(player);
                displayNextPlayer(turn, player);
            }
        } else {
            messages.html('ERROR! PLEASE CHOOSE AN EMPTY BOX');
        }
    });

    $('.reset').click(function() {
        player = 1;
        messages.html('');
        reset(table);
        displayNextPlayer(turn, player);
    });

});

function getState(td) {
    if(td.hasClass('cross') || td.hasClass('circle')) {
        return 1;
    }
    else {
        return 0;
    }
}

function changeState(td, pattern) {
    return td.addClass(pattern);
}

function definePatternForCurrentPlayer(player) {
    if(player == 1) {
        return 'cross';
    }
    else {
        return 'circle';
    }
}

function setNextPlayer(player) {
    if(player == 1) {
        return player = 2;
    } else {
        return player = 1;
    }
}

function displayNextPlayer(turn, player) {
    turn.html('Gamer '+player+' turn');
}

function checkIfPlayerWon(table, pattern) {
    var won = 0;
    if(table.find('.item1').hasClass(pattern) && table.find('.item2').hasClass(pattern) && table.find('.item3').hasClass(pattern)) {
        won = 1;
    }
    else if (table.find('.item1').hasClass(pattern) && table.find('.item4').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
        won = 1;
    }
    else if (table.find('.item1').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
        won = 1;
    }
    else if (table.find('.item4').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item6').hasClass(pattern)) {
        won = 1;
    }
    else if (table.find('.item7').hasClass(pattern) && table.find('.item8').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
        won = 1;
    }
    else if (table.find('.item2').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item8').hasClass(pattern)) {
        won = 1;
    }
    else if (table.find('.item3').hasClass(pattern) && table.find('.item6').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
        won = 1;
    }
    else if (table.find('.item3').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
        won = 1;
    }
    return won;
}

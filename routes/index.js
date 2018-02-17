var express = require('express');
var router = express.Router();



/*
// IOTA stuff starts here
var IOTA = require('iota.lib.js/lib/iota');

// Create IOTA instance directly with provider
var iota = new IOTA({
    'provider': 'http://localhost:14265'
});

// now you can start using all of the functions
// iota.api.getNodeInfo(function(error, success) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(success);
//     }
// });

// you can also get the version
console.log(iota.version);

iota.api.getTips( function (error,success) {
    if (error) {
        console.error(error);
    } else {

        console.log(success);
    }
})



iota.api.prepareTransfers("SSEWOZSDXOVIURQRBTBDLQXWIXOLEUXHYBGAVASVPZ9HBTYJJEWBR9PDTGMXZGKPTGSUDW9QLFPJHTIEQZNXDGNRSA",
    [{
        'address': 'SSEWOZSDXOVIURQRBTBDLQXWIXOLEUXHYBGAVASVPZ9HBTYJJEWBR9PDTGMXZGKPTGSUDW9QLFPJHTIEQZNXDGNRJE',
        'value': 10000
    }], {
        'inputs': [
            {
                address: 'XB9IBINADVMP9K9FEIIR9AYEOFUU9DP9EBCKOTPSDVSNRRNVSJOPTFUHSKSLPDJLEHUBOVEIOJFPDCZS9',
                balance: 1500,
                keyIndex: 0,
                security: 3
            }, {
                address: 'W9AZFNWZZZNTAQIOOGYZHKYJHSVMALVTWJSSZDDRVEIXXWPNWEALONZLPQPTCDZRZLHNIHSUKZRSZAZ9W',
                balance: 8500,
                keyIndex: 7,
                security: 2
            }
        ]}, function(e, s) {


            console.log(e,s);
        })









//IOTA stuff ends here
*/






// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index', {username: req.user.username, points: req.user.points, email: req.user.email});
});
router.get('/iota', function(req, res){
    res.render('iota', {iota:iota});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
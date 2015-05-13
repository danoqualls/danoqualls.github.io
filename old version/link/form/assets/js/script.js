var $amex = $("#American-Express"),
$visa = $("#Visa"),
$discover = $("#Discover"),
$mastercard = $("#MasterCard");

$("#card-number").validateCreditCard(function(result) {
	console.log(result.card_type.name);

	if ( result.card_type.name === "amex" ) {

		$amex.attr("checked",true);

	} else if ( result.card_type.name === "visa" ) {

		$visa.attr("checked",true);

	} else if ( result.card_type.name === "discover" ) {

		$discover.attr("checked",true);

	} else if ( result.card_type.name === "mastercard" ) {

		$mastercard.attr("checked",true);
	};
});


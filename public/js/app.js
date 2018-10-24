let $ = require("jquery");

// let Table = function (custName, phone, custEmail, custId) {
//    this.custName = custName;
//    this.phone = phone;
//    this.custEmail = custEmail;
//    this.custId = custId;
// };

// let waitlist = [];
// let tables = [];

// $("#reservation-form").on("submit", () => {
//    let newTable = new Table($("#customer-name").val(), $("#customer-phone").val(), $("#customer-email").val(), $("#customer-id").val());
//    console.log(newTable);
//    if (tables.length < 5) {
//        tables.push(newTable);
//    } else waitlist.push(newTable);
// });

$("#reso-form").on("click", function (e) {

    e.preventDefault();

    // form elements
    var newReservation = {
        customerName: $('#reserve_name').val().trim(),
        phoneNumber: $('#reserve_phone').val().trim(),
        customerEmail: $('#reserve_email').val().trim(),
        customerID: $('#reserve_uniqueID').val().trim()
    };

    console.log(newReservation);

    var currentURL = window.location.origin;

    $.post(currentURL + "/api/tables", newReservation,
        function (data) {

            // If a table is ava. Table is yours...
            if (data == true) {
                alert("The table is yours!")
            }

            // If no table..no table for you...
            if (data == false) {
                alert("No table for you...on a wait list")
            }

            // Clear the form after submit
            $('#reserve_name').val("");
            $('#reserve_phone').val("");
            $('#reserve_email').val("");
            $('#reserve_uniqueID').val("");

        });

    return false;

});
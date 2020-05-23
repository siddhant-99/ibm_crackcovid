const apiUrl = "https://a23f3d63.eu-gb.apigw.appdomain.cloud/guestbook";
const guestbook = {
  // retrieve the existing guestbook entries
  get() {
    return $.ajax({
      type: "GET",
      url: `${apiUrl}/entries`,
      dataType: "json",
    });
  },
  // add a single guestbood entry
  add(sno, hname, hemail, nbeds, testing, haddress, poc, pocemail) {
    console.log("Sending Details");
    return $.ajax({
      type: "PUT",
      url: `${apiUrl}/entries`,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        sno,
        hname,
        hemail,
        nbeds,
        testing,
        haddress,
        poc,
        pocemail,
      }),
      dataType: "json",
    });
  },
};

var no_docs;
var no_of_beds = 0;
var dataStored;

(function () {
  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($("#entries-template").html());
  }

  // retrieve entries and update the UI
  function loadEntries() {
    console.log("Loading entries...");
    $("#entries").html("Loading entries...");
    guestbook
      .get()
      .done(function (result) {
        if (!result.entries) {
          return;
        }

        const context = {
          entries: result.entries,
        };
        no_docs = context.entries.length;
        dataStored = context;
        console.log(dataStored);
        for (var i = 0; i < no_docs; i++) {
          no_of_beds = no_of_beds + Number(context.entries[i].nbeds);
        }
        $("#entries").html(entriesTemplate(context));
        $("#no_hospitals").html(no_docs);
        $("#no_of_beds").html(no_of_beds);
      })
      .error(function (error) {
        $("#entries").html("No entries");
        console.log(error);
      });
  }

  // intercept the click on the submit button, add the guestbook entry and
  // reload entries on success
  $(document).on("submit", "#addEntry", function (e) {
    e.preventDefault();

    var authorized = document.getElementById("user");
    var authorizedEmail = document.getElementById("useremail");
    var revID = null;
    var hval =  null;

    if (authorized.textContent == "Unauthorised") {
      alert("Unauthorized Access!! Please Login to enter details.");
    } else {
      var pocemail = authorizedEmail.textContent;
      var test_y = document.getElementById("test_y");
      var test_n = document.getElementById("test_n");

      for (var i = 0; i < no_docs; i++) {
        if (pocemail == dataStored.entries[i].pocemail && $("#hname").val().trim() == dataStored.entries[i].hname) {
          revID = dataStored.entries[i]._rev;
          hval = dataStored.entries[i].hname;
        } else revID = null;
      }
      if (revID && hval) {
        alert("You have already filled the form!! Kindly write to f20170074@pilani.bits-pilani.ac.in for updating information.");
      } else {
        if (test_y.checked == true) {
          guestbook
            .add(
              no_docs + 1,
              $("#hname").val().trim(),
              $("#hemail").val().trim(),
              $("#nbeds").val().trim(),
              $("#test_y").val().trim(),
              $("#haddress").val().trim(),
              $("#poc").val().trim(),
              pocemail
            )
            .done(function (error) {
              loadEntries();
            })
            .error(function (error) {
              console.log(error);
            });
        } else if (test_n.checked == true) {
          guestbook
            .add(
              no_docs + 1,
              $("#hname").val().trim(),
              $("#hemail").val().trim(),
              $("#nbeds").val().trim(),
              $("#test_n").val().trim(),
              $("#haddress").val().trim(),
              $("#poc").val().trim()
            )
            .done(function (error) {
              loadEntries();
            })
            .error(function (error) {
              console.log(error);
            });
        }
      }
    }
  });

  $(document).ready(function () {
    prepareTemplates();
    loadEntries();
  });
})();

const apiUrl = 'https://a23f3d63.eu-gb.apigw.appdomain.cloud/guestbook';
const guestbook = {
  // retrieve the existing guestbook entries
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/entries`,
      dataType: 'json'
    });
  },
  // add a single guestbood entry
  add(hname, hemail, nbeds, testing, haddress, poc) {
    console.log('Sending Details')
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/entries`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        hname,
        hemail,
        nbeds,
        testing,
        haddress,
        poc,
      }),
      dataType: 'json',
    });
  }
};

(function() {

  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($('#entries-template').html());
  }

  // retrieve entries and update the UI
  function loadEntries() {
    console.log('Loading entries...');
    $('#entries').html('Loading entries...');
    guestbook.get().done(function(result) {
      if (!result.entries) {
        return;
      }

      const context = {
        entries: result.entries
      }
      $('#entries').html(entriesTemplate(context));
    }).error(function(error) {
      $('#entries').html('No entries');
      console.log(error);
    });
  }

  // intercept the click on the submit button, add the guestbook entry and
  // reload entries on success
  $(document).on('submit', '#addEntry', function(e) {
    e.preventDefault();

    var test_y = document.getElementById("test_y");
    var test_n = document.getElementById("test_n");

    if(test_y.checked == true){
      guestbook.add(
        $('#hname').val().trim(),
        $('#hemail').val().trim(),
        $('#nbeds').val().trim(),
        $('#test_y').val().trim(),
        $('#haddress').val().trim(),
        $('#poc').val().trim(),
      ).done(function(error) {
        loadEntries();
      }).error(function(error){
        console.log(error);
      });
    }
    else if(test_n.checked == true){
      guestbook.add(
        $('#hname').val().trim(),
        $('#hemail').val().trim(),
        $('#nbeds').val().trim(),
        $('#test_n').val().trim(),
        $('#haddress').val().trim(),
        $('#poc').val().trim(),
      ).done(function(error) {
        loadEntries();
      }).error(function(error){
        console.log(error);
      });
    }
  });

  $(document).ready(function() {
    prepareTemplates();
    loadEntries();
  });
})();
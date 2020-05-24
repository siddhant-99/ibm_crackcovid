const maskapiUrl = "https://a23f3d63.eu-gb.apigw.appdomain.cloud/maskbook";
const maskbook = {
  get() {
    return $.ajax({
      type: "GET",
      url: `${maskapiUrl}/entries`,
      dataType: "json",
    });
  },
};

var maskdataStored;

(function () {
    // retrieve entries and update the UI
    var no_places=0, avg_score =0;
    function loadMaskEntries() {
      console.log("Loading Mask data entries...");
      maskbook
        .get()
        .done(function (result) {
          if (!result.entries) {
            return;
          }
  
          const context = {
            entries: result.entries,
          };
          no_places = context.entries.length;
          maskdataStored = context;
          console.log(maskdataStored);
          for(var i=0;i<no_places;i++){
              avg_score+=Number(maskdataStored.entries[i].score);
          }

          avg_score = avg_score/no_places;
          $('#places_monitored').text(no_places);
          $('#avsaftey_scoreInfo').text(avg_score);
        })
        .error(function (error) {
          console.log(error);
        });
    }
  
    // intercept the click on the submit button, add the guestbook entry and
    // reload entries on succ
  
    $(document).ready(function () {
      loadMaskEntries();
    });
  })();
  
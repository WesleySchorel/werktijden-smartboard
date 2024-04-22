module.exports =
  // weather API fetch
  function updateLiveWeer(pusher) {
    setInterval(async () => {
      console.log("--weather poll--");
      let res = await fetch(
        `https://weerlive.nl/api/weerlive_api_v2.php?key=demo&locatie=Amsterdam`
      );
      let data = await res.json();

      console.log(data)

      await pusher.trigger("liveweer-channel", "update-liveweer", {
        data: data,
      });

      // setTimeout(updateLiveWeer, 420000);
      // setTimeout(updateLiveWeer, 2000);
    }, 60000);
  };

module.exports =
  // weather API fetch
  function updateLiveWeer(pusher) {
    setInterval(async () => {
      console.log("--weather poll--");
      const res = await fetch(
        `https://weerlive.nl/api/weerlive_api_v2.php?key=${process.env.WEERLIVE}&locatie=Amsterdam`
      );
      const data = await res.json();

      await pusher.trigger("liveweer-channel", "update-liveweer", {
        data: data,
      });

      // setTimeout(updateLiveWeer, 420000);
      // setTimeout(updateLiveWeer, 2000);
    }, 420000);
  };

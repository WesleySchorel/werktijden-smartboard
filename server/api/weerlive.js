module.exports = async function updateLiveWeer(pusher) {
  async function poll(pusher) {
    console.log("--weather poll--");
    const res = await fetch(
      `https://weerlive.nl/api/weerlive_api_v2.php?key=demo&locatie=Amsterdam`
    );
    const data = await res.json();

    await pusher.trigger("liveweer-channel", "update-liveweer", {
      data: data,
    });

    setTimeout(function () { poll(pusher) }, 300000)
  }
  poll(pusher)
};

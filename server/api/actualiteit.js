module.exports =
  // actualiteit API fetch
  function updateActualiteit(pusher) {
    setInterval(async () => {
      console.log("--actualiteit poll--");
      const data = await fetch("https://feeds.nos.nl/nosnieuwsalgemeen")
        .then((response) => {
          return response.text();
        })
        .then((html) => {
          html = html.replace(/\s\s/g, "");

          const titles = [];
          const str = html;

          const parts = str.split(`<title><![CDATA[`);

          for (let i = 1; i < parts.length; i++) {
            const title = parts[i].split(`]]></title>`)[0];
            titles.push(title);
          }

          titles.shift();
          return titles;
        });

      await pusher.trigger("actualiteit-channel", "update-actualiteit", {
        data: data,
      });
    }, 420000);
  };

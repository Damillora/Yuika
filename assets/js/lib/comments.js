
window.remark_config = {
  host: "https://comments.nanao.moe", // hostname of remark server, same as REMARK_URL in backend config, e.g. "https://demo.remark42.com"
  site_id: 'yuika',
  theme: 'light',
  components: ['embed'], // optional param; which components to load. default to ["embed"]
  // to load all components define components as ['embed', 'last-comments', 'counter']
  // available component are:
  //     - 'embed': basic comments widget
  //     - 'last-comments': last comments widget, see `Last Comments` section below
  //     - 'counter': counter widget, see `Counter` section below
  max_shown_comments: 10, // optional param; if it isn't defined default value (15) will be used
  show_email_subscription: false // optional param; by default it is `true` and you can see email subscription feature
  // in interface when enable it from backend side
  // if you set this param in `false` you will get notifications email notifications as admin
  // but your users won't have interface for subscription
};


  remark_config.theme = window.document.body.getAttribute("data-theme");
  (function (c) {
    for (var i = 0; i < c.length; i++) {
      var d = document, s = d.createElement('script');
      s.src = remark_config.host + '/web/' + c[i] + '.js';
      s.defer = true;
      (d.head || d.body).appendChild(s);
    }
  })(remark_config.components || ['embed']);
  document.getElementById("darkMode").addEventListener('click',function () {
    if (window.document.body.getAttribute("data-theme") != "dark") {
      if (window.REMARK42) {
        window.REMARK42.changeTheme('dark');
      }
    } else {
      if (window.REMARK42) {
        window.REMARK42.changeTheme('light');
      }
    }
  });

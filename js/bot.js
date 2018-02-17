(function() {

  var bot = new BotUI('search-repo');
  var key = [];

  //初期メッセージ
  bot.message.bot({
    content: 'こんにちは！'
  }).then(function() {
    bot.message.bot({
      delay: 1000,
      content: '今日は、どんな場所にいましたか？'
    });
  }).then(function() {
    return bot.action.text({
      delay: 1000,
      action: {
        placeholder: 'ここに書いてね！'
      }
    });
  }).then(function(res) {
    key.push(res.value);
  }).then(function() {
    bot.message.bot({
      delay: 1000,
      content: 'そこにいて、楽しかったですか？'
    });
  }).then(function() {
    return bot.action.text({
      delay: 1000,
      action: {
        placeholder: 'ここに書いてね！'
      }
    });
  }).then(function(res) {
    key.push(res.value);
  }).then(function() {
    bot.message.bot({
      delay: 1000,
      content: '楽しくなかった、理由はなんですか？'
    });
  }).then(function() {
    return bot.action.text({
      delay: 1000,
      action: {
        placeholder: 'ここに書いてね！'
      }
    });
  }).then(function(res) {
    key.push(res.value);
  }).then(function() {
    bot.message.bot({
      delay: 1000,
      content: 'その体験を、再びしたいですか？'
    });
  }).then(function() {
    return bot.action.text({
      delay: 1000,
      action: {
        placeholder: 'ここに書いてね！'
      }
    });
  }).then(function(res) {
    key.push(res.value);
  }).then(function() {
    bot.message.bot({
      delay: 1000,
      content: 'その体験を、再びする場合、変更したい事は何かありますか？'
    });
  }).then(function() {
    return bot.action.text({
      delay: 1000,
      action: {
        placeholder: 'ここに書いてね！'
      }
    });
  }).then(function(res) {
    key.push(res.value);
  }).then(function() {
    bot.message.bot({
      delay: 1000,
      content: 'その他、楽しいことは、全くありませんでしたか？'
    });
  }).then(function() {
    return bot.action.text({
      delay: 1000,
      action: {
        placeholder: 'ここに書いてね！'
      }
    });
  }).then(function(res) {
    key.push(res.value);
  }).then(function() {
    bot.message.bot({
      delay: 1000,
      content: '楽しみにしていた理由は何ですか？'
    });
  }).then(function() {
    return bot.action.text({
      delay: 1000,
      action: {
        placeholder: 'ここに書いてね！'
      }
    });
  }).then(function(res) {
    key.push(res.value);
    var text = makedoc(key);
    bot.message.bot({
      delay: 1000,
      content: text
    });
  });

  function makedoc(key) {
    var text = '今日は' + key[1] + key[0] + 'が' + key[2] + key[3] + key[4] + 'でも' + key[5] + key[6]
    return text;
  }

})();

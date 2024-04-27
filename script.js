const randomText = document.getElementById('random-text');

function generateRandomCharacter() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return characters[Math.floor(Math.random() * characters.length)];
}

function generateRandomText(length) {
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += generateRandomCharacter();
  }
  return randomString;
}

randomText.textContent = generateRandomText(10); // 最初に10文字のランダムな文字列を生成して表示

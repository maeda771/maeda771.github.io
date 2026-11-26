/* 個人用の簡易ロック。公開ファイルへのアクセスを制限する認証ではありません。 */
(() => {
  const KEY = 'mogumogu_login_v1';
  const PASSWORD = 'dogFood';
  const unlock = () => { document.body.classList.remove('locked'); document.getElementById('loginGate').hidden = true; };
  if (localStorage.getItem(KEY) === 'yes') unlock();
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const value = document.getElementById('loginPassword').value;
    if (value !== PASSWORD) { document.getElementById('loginError').textContent = 'パスワードが違います'; return; }
    localStorage.setItem(KEY, 'yes');
    document.getElementById('loginPassword').value = '';
    unlock();
  });
  document.getElementById('logoutButton').addEventListener('click', () => {
    localStorage.removeItem(KEY);
    document.getElementById('loginGate').hidden = false;
    document.body.classList.add('locked');
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginError').textContent = '';
  });
})();

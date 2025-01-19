// 必要なモジュールをインポート
  const http = require('http');

  // サーバーを作成
  const server = http.createServer((req, res) => {
    // レスポンスの内容を設定
    res.statusCode = 200; // ステータスコード
    res.setHeader('Content-Type', 'text/plain'); // ヘッダー
    res.end('Hello, World!\n'); // レスポンス本文
  });

  // サーバーを指定したポートで待ち受け
  const PORT = 3000; // 使用するポート番号
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });

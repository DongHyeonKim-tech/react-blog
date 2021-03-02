const express = require('express'); // express 모듈 불러오기

const app = express(); // app 변수에 express 담기->app 변수를 통해 서버 관리

const PORT = process.env.PORT || 4000; // 포트 번호 할당하기-4000

// 서버 응답 출력하기-app.get
app.get('/', (req, res) => { // '/':해당 경로로 이동했을 때에 응답 랜더
    res.send('Welcomt to my first react blog');
})

// 위 설정대로 서버 실행하기(server 디렉토리 이동 후 node server.js)
app.listen(PORT, () => {
    console.log('Server On : http://localhost:${PORT}/');
})
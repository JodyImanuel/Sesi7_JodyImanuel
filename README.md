# Sesi7 - JodyImanuel - API Automation
Step by step untuk run program : 
1. Pastikan sudah melakukan instalasi Node.js
2. Kemudian, setelah instalasi, cek versi dari Node.js dan NPM pada cmd
   - node -v
   - npm -v
3. Kemudian lakukan instalasi Mocha, dengan command :
   - npm install mocha --save-dev
   - npm install -g mocha
   Cek juga versi dari Mocha :
     - npx mocha -version
     - mocha -version

Berikut merupakan cara untuk membuat Request API :
1. Buat folder baru
2. Instal project Node.js dengan command : npm init -y
3. Instal Mocha dengan command : npm install mocha --save-dev
4. Buat folder "TestingAPI" untuk menyimpan file testing
5. Kemudian buatlah file JS untuk melakukan beberapa method : GET, POST, PATCH, DELETE
6. Untuk menjalan file testing, command : npx mocha TestingAPI/getUser.js

Sekian dan Terima Kasih :)

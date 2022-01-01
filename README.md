# Login-server/Back-end

    ## 1. node app.js // app.js파일을 V8엔진으로 해석해달라는 요청과 같은 의미이다

    ## 2. Error: Cannot find module 'express' -> npm install express --save 명령실행 -> node_modules폴더와 package-lock.js파일 자동생성되고 node_modules폴더 내부에  express모듈이 설치되어 있는 것을 확인할 수 있다.

    ## 3. view분리(html문서를 별도분리)모듈화 : view를 담당할 html부분을 app.get(res.send())메소드에 실어 보내는 것이 비효율적이지만 설명이 간편하다. -> 별도의 폴더./views/home에 파일index.ejs & login.ejs로 분리하여 모듈화할 것을 권한다. 즉, view의 html부분을 처리해 줄 수 있는 접근경로와 view engine을 설정하는 것이다. 화면views를 관리해줄 폴더경로를 지정하는 방식이다. 화면을 뿌리는 방식이 app.get(res.render())로 변경된다. -> npm install ejs -s명령실행하여 뷰엔진을 설치한다

    ## 4. 라우팅코드를 별도분리 모듈화: app.get()을 routes/home/index.js경로로 통째로 이동하여 분리, 연동(module.exports=router & const home=require("./routes/home"), app.use("/", home)을 이용하여 미들웨어로 등록해둔다.

    ## 5. controller분리 : router.get("요청경로", 기능수행함수)에서 후자를 분리하는 것이다. 분리연동해야한다. 
   
    ## 6. 서버실행부분 분리 모듈화 : bin폴더 www.js파일로 분리독립
   
    ## 7. 새로운 서버실행명령과 package.json <- 일괄설치명령 npm init -y *** package-lock.json은 package.json의 상세파일이다.
   
    ## 8. 간편 서버실행명령의 설정 : package.json내부의 script{ "start": "node ./bin/www.js"}
    ## 9. nodemon으로 서버실행 설정 : package.json내부의 script{ "start": "nodemon ./bin/www.js"}
    ## 10. cd app -> npm start로 서버실행
    
    ### 1. express로 서버실행해보기 
        create the file of app.js : main file 
        
        const express = require("express");
        const server = express();
        server.listen(PORT, callback);
        
        node app.js -> Error: Cannot find module 'express' - npm install express -s -> node_modules & package-lock.json created 
        node app.js -> Cannot GET / -> add server.get("/", function) in app.js
    ### 2. create a view folder <- making module from HTML files
            view/home/index.ejs
            view/home/login.ejs
            - npm install els -s -> 
    ### 3. create a routes folder
            routes/home/index.js -> routes/home/ctrl.js
            
    ### 4. app.js -> bin/www.js
    ### 5. create app folder <- all folders(bin, routes, views) & files(app.js, package-lock.json, package.json)
    ### 6. create src folder <- routes & views
    ### 7. TREE        
            app
                bin
                src
                    routes
                        index.js -> ctrl.js
                    views
                        index.ejs
                        login.ejs
                app.js
                package-lock.json
                package.json
            .gitignore
            LICENSE
            README.md
    

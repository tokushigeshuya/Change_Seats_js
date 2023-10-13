function main_contents () {
    let timer;
    // 席番号の配列用意
    let studentNumberList = [];
    // -----------htmlの生成------------------
    const Create_html = () => {
        // const studentNumbers = [...Array(target)].map((_, i) => i + 1);
        let insertHTML = ''; 
        // 配列の数字をランダムに入れ替え
        for(let i = studentNumberList.length; i > 0; i--){
            const randomNum = Math.floor(Math.random() * i);
            let tmp = studentNumberList[i - 1]; 
            studentNumberList[i - 1] = studentNumberList[randomNum]; 
            studentNumberList[randomNum] = tmp;
        }
        studentNumberList.forEach(function(num){
            insertHTML += '<div class="seat__item">${num}</div>';
        })
        document.getElementById('seat').innerHTML = insertHTML;
    };
    // --------------------------------------

    // --------音楽を再生するfunction--------
    const SoundPlay = () =>{
        // audioオブジェクトを構築
        const audioElement = new Audio();
        audioElement.src = 'assets/audio/drum.mp3';
        audioElement.play();
        // 音声ファイルが停止されたら実行
        audioElement.addEventListener('ended', function(){
            clearInterval(timer);
        })
    };
    // --------------------------------------

    // --------生成する座席数の管理----------
    const setTargetStudents = (number) => {
        for(let i = 1; i <= number;i++){
            studentNumberList.push(i);
        }
        // 欠席者の番号取得
        const absenteeNumbers = document.getElementById("absence").value;
        const splitedAbsenteeNumbers = absenteeNumbers.split(",").map(function(item, index){
            return parseInt(item);
        });
        // ここで欠席番号を除いた配列に変換しています。
        studentNumberList = studentNumberList.filter(function(student){
            return !splitedAbsenteeNumbers.includes(student);
        })
    };
    // ------------------------------------------

    // --席替えボタンがクリックされたときに実行--
    document.getElementById('btn-start').addEventListener('click',() => {
        const studentNumber = document.getElementById("studentNumber").value;
        // 簡易バリデーションチェックの実行
        if(studentNumber === "" ){
            alert('人数が未入力です！入力してからスタートボタンを押してください。');
            return false;
        };
        if(studentNumber > 50){
            alert('人数は50人以内に設定してください！');
            return false;
        };
        document.getElementById('main_modal').classList.add("is-closed");
        // 座席数取得の実行
        setTargetStudents(studentNumber);
        timer = setInterval(() =>{
            Create_html(studentNumber);
        }, 50);
        SoundPlay();
    })
    // -----------------------------------------
}
main_contents ();
function main_contents () {
    let timer;
    // htmlの生成
    const Create_html = () => {
        // 席番号の配列用意
        const studentNumbers = [...Array(18)].map((_, i) => i + 1);
        let insertHTML = ''; 
        // 配列の数字をランダムに入れ替え
        for(let i = studentNumbers.length; i > 0; i--){
            const randomNum = Math.floor(Math.random() * i);
            let tmp = studentNumbers[i - 1]; 
            studentNumbers[i - 1] = studentNumbers[randomNum]; 
            studentNumbers[randomNum] = tmp;
        }
        studentNumbers.forEach(function(num){
            insertHTML += '<div class="seat__item">' + num + '</div>';
        })
        document.getElementById('seat').innerHTML = insertHTML;
    };
    // 音楽を再生するfunction
    const SoundPlay = () =>{
        // audioオブジェクトを構築
        const audioElement = new Audio();
        audioElement.src = 'assets/audio/drum.mp3';
        audioElement.play();
        // 音声ファイルが停止されたら実行
        audioElement.addEventListener('ended', function(){
            clearInterval(timer);
        })
    }
    // 席替えボタンがクリックされたときに実行
    document.getElementById('btn-start').addEventListener('click', function(){
        document.getElementById('main_modal').classList.add("is-closed");
        timer = setInterval(() =>{
            Create_html();
        }, 50);
        SoundPlay();
    })
}
main_contents ();
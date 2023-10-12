function main_contents () {
    // htmlの生成
    function create_html(){
        let insertHTML = ''; 
        for (let i = 0; i<=20; i++){
            insertHTML += '<div class="seat__item">' + i + '</div>';
        };
        document.getElementById('seat').innerHTML = insertHTML;
    };
    create_html()
}

main_contents ();
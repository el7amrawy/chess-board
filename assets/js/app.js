chessBoard();

//functions
function chessBoard() {
    const tbl = document.querySelector("table tbody");
    for (let i = 1; i <= 8; i++) {
        tbl.innerHTML += `<tr id="tr${i}"></tr>`;
        let el = document.querySelector(`#tr${i}`);
        // console.log(el);
        if (i % 2 != 0) {
            for (let x = 1; x <= 8; x++) {
                if (x % 2 != 0) {
                    el.innerHTML += '<td class="white"></td>';
                } else {
                    el.innerHTML += '<td class="black"></td>';
                }
            }
        } else {
            for (let x = 0; x < 8; x++) {
                if (x % 2 != 0) {
                    el.innerHTML += '<td class="white"></td>';
                } else {
                    el.innerHTML += '<td class="black"></td>';
                }
            }
        }
    }
}
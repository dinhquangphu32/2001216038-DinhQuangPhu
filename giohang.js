document.getElementById("")

function themvaogiohang(x)
{
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong = boxsp[3].value;
    var sp = new Array(hinh, gia, tensp, soluong);
    
    giohang.push(sp);

    console.log(giohang);
    showcountsp();
}

function showcountsp()
{
    document.getElementById("countsp"). innerHTML = giohang.length;
}
function showmycart()
{
        <div>
        <main>
            <div class="count">
            <h1>Số lượng</h1>
            <span id="value">0</span>
            <div class="button-count">
            <button class="btn decrease">-</button>
            <button class="btn reset">resert</button>
            <button class="btn increase">+</button>
            </div>
            </div>
        </main>

        <script>
    let count = 0;
    const value = document.querySelector("#value");
    const btns = document.querySelectorAll(".btn");
    btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
    count++;
    } else if (styles.contains("decrease")) {
    count--;
    } else {
    count = 0;
    }
    if (count > 0) {
    value.style.color = "green";
    }
    if (count < 0) {
    BREAK;
    }
    if (count === 0) {
    value.style.color = "#222";
    }
    value.textContent = count;
    });
    });
        </script>
    </div>
}
function showcart()
{
    document.getElementById("showcart").style.display = "block";
}
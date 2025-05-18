
var lagu=[
    ['Mangu', 'Fortwnty', 4000,8000, 'image.png','Mangu.png'],
    ['Slalu ada dihatimu', 'BCL', 2000, 4000, 'image.png','slalu.png'],
    ['Lesung Pipi', 'Raim Laode', 2000, 4000,'image.png','lesung.png'],
    ['Ribuan Memori', 'Lomba Sihir', 4000, 82311,'image.png','Lomba.jpeg']


]

var konten = document.getElementById("container")



for( var i=0;i<lagu.length;i++){
    var judul = lagu[i][0]
    var pembuat = lagu[i][1]
    var like = lagu[i][2]
    var view = lagu[i][3]
    var img = lagu[i][4]
    var cover = lagu[i][5]
 


  const card =  ` <div class="card" style="background-image:url(${cover});">
        <h3>${judul}</h3>
        <p><small>
            <i>${pembuat}</i>
        </small>
        </p>
        <img class="image1" src="${img}" alt="" )"> 
        <div class="bawah">
            <div class="kanan">
                    ${like}
            </div>
         <div class="kiri">
            ${view}
         </div>
        </div>
       </div> `;

konten.innerHTML += card

}


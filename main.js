// let penghasilan = parseInt(prompt("Berapa penghasilan anda pertahunnya?"))

// if(penghasilan < 50000000){
//     total_kurang = penghasilan * 0.05
//     console.log(`Total pajak yang harus dibayar sebesar Rp.${total_kurang}`)
// }
// else{
//     total_lebih = penghasilan * 0.1
//     console.log(`Total pajak yang harus dibayar sebesar Rp.${total_lebih}`)
// }

// let penjualan = parseInt(prompt("Berapa hasil penjualan anda?"))
 
// if(penjualan < 20000){
//     gaji = 10000 + (penjualan * 0.1)
//     console.log(`Gaji anda sebesar Rp.${gaji}`)
// }
// else if (penjualan >= 20000 && penjualan <= 50000){
//     gaji = 20000 + (penjualan * 0.15)
//     console.log(`Gaji anda sebesar Rp.${gaji}`)
// }
// else{
//     gaji = 30000 + (penjualan * 0.2)
//     console.log(`Gaji anda sebesar Rp.${gaji}`)
// }

// let gajiPokok = parseInt(prompt("Berapa gaji pokok anda?"))
// let masaKerja = parseInt(prompt("Berapa lama anda telah bekerja?"))
// let manajer = false

// if(manajer == true){
//     if(masaKerja >= 5){
//         tunjangan = gajiPokok + (gajiPokok * 0.2)
//         console.log(`Tunjangan anda sebesar ${tunjangan}`)
//     }
// }
// else if (manajer == false){
//     if(masaKerja >= 3){
//         tunjangan = gajiPokok + (gajiPokok * 0.1)
//         console.log(`Tunjangan anda sebesar ${tunjangan}`)
//     }
// }

// let rumus = prompt("1.Luas persegi panjang 2.Luas lingkaran 3. Volume kubus 4. Keluar")

// switch(rumus){
//     case "1":
//         panjang = parseInt(prompt("Panjang"))
//         lebar = parseInt(prompt("Lebar"))
//         luas = panjang * lebar
//         console.log(luas)
//     break
//     case "2":
//         jariJari = parseInt(prompt("Jari-jari"))
//         luas = 3.14 * (jariJari*jariJari)
//         console.log(luas)
//     break
//     case "3":
//         sisi = parseInt(prompt("Sisi"))
//         volume = sisi**3
//         console.log(volume)
//     break
//     case "4":
//         console.log("Terima kasih")
//     break

//     case "":
//         console.log("Input tidak valid")
//     break
// }


// let pertama = parseInt(prompt("Angka pertama"))
// let kedua = parseInt(prompt("Angka kedua"))
// let ketiga = parseInt(prompt("Angka ketiga"))

// let angkaTerkecil = pertama < kedua ? (pertama < ketiga ? pertama : ketiga) : (kedua < ketiga ? kedua : ketiga)
// console.log(angkaTerkecil)

// let lulus, score = 70 
// lulus = (score>=75) ? "Y": "N"
// score += 5
// lulus = (score>=75) ? "yes": "no"

// console.log(lulus)

// let nilai = 0, jawaban, kunci, point_benar, point_salah
// jawaban = "Jakarta"
// kunci = "Bandung"
// point_benar = 5
// point_salah = -3

// if(jawaban == kunci){
//     nilai += point_benar
// }
// else{
//     nilai -= point_salah
// }

// console.log(nilai)

// let kelas = '10 SIJA A'

// console.log(typeof(kelas))


// let x = 1
// x += 1
// console.log(x)

// var number = ""
// var hitung = 8**2

// if(hitung){
//     result = "Genap"
//     console.log(hitung)
// } else{
//     result = "Ganjil"
// // }
//  var x = 50 
//     x =+ 1



// let bil1 = 50
// let bil2 = Math.random()
// let bil3 = bil1 + Math.floor(Math.random()*100)

// let angkaBesar = Math.max(bil1,bil2,bil3)
// if(bil1 > bil2 && bil1 > bil3){
//     console.log(bil1)
// }
// else if(bil2 > bil1 && bil2 > bil3){
//     console.log(bil2)
// }
// else if(bil3 > bil1 && bil3 > bil1){
//     console.log(bil3)
// }
// if(bil1 > bil2 && bil1 > bil3){
//     console.log(bil1)
// }
// else if (bil2 > bil3){
//     console.log(bil2)
// }
// else{
//     console.log(bil3)
// }

// let angkaBesar = bil1 > bil2 ? (bil1 > bil3 ? bil1:bil3) : (bil2 > bil3 ? bil2 : bil3)
// console.log(bil1, bil2,bil3)
// console.log(angkaBesar)
// let angkaTerkecil = pertama < kedua ? (pertama < ketiga ? pertama : ketiga) : (kedua < ketiga ? kedua : ketiga)
// console.log(angkaTerkecil)




// function sapa(nama){
// console.log(`Halo, ${nama}!`)
// }
// sapa('Prabowo')
// let nama = 'Gibran'
// sapa(nama)

// function luasSegitiga(lebar,tinggi){
//     return 0.5 * lebar * tinggi
// }
// console.log(luasSegitiga(10,20))

// function cekKelipatan3(angka){
//     if(angka % 3 === 0 ){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(cekKelipatan3(300))  
// console.log(cekKelipatan3(Math.floor(Math.random()*100)))

// function masa_jenis(m,v){
//     return m / v
// }

// console.log(masa_jenis(10,200))
// let massa = Math.floor(Math.random()*10)

// let volume = 1000
// console.log(masa_jenis(massa,volume))

// function kelipatan(x,y){
//     if(x % y === 0){
//         console.log("Ya")
//     }
//     else{
//         console.log("Tidak")
//     }
// }

// kelipatan(4,2)

// let x = parseInt(prompt("Masukkan angka pertama"))
// let y = parseInt(prompt("Masukkan angka kedua"))

// let pertambahan = (x,y) => x + y 
// let pengurangan = (x,y) => x - y 
// let perkalian = (x,y) => x * y 
// let pembagian = (x,y) => x / y 

// let pemilihan = prompt("1.Pertambahan 2. Pengurangan 3.Perkalian 4.Pembagian")

// switch(pemilihan){
//     case "1":
//         console.log(pertambahan(x,y))
//     break
//     case "2":
//         console.log(pengurangan(x,y))
//     break
//     case "3":
//         console.log(perkalian(x,y))
//     break
//     case "4":
//         console.log(pembagian(x,y))
//     break
//     default:
//         console.log("Anda harus memilih!")
// }

// let musik = [
//     ["NdarBoy Genk","Anak Lanang", 240, 35],
//     ["Wames","Dumes", 123, 65],
//     ["Happy Asmara","Kalah", 107, 50],
//     ["Denny Caknan","Sigar", 278, 142],
//     ["Gilga Sahid","Nemu", 351, 184],
// ]

// musik.push(["Masddho", "Kisinan 2", 347, 23],["Aftershine", "Kalah", 101,54])

// for(let x=0;x<=6;x++){
//     if(musik[x][2]>200){
//         console.log(musik[x])
    
//     }
    
// }

// for(let x=6;x>=0;x--){
//     console.log(musik[x])
    
// }


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



// var element = ` <div class="card">
//         <h3>Judul ${lagu[0][0]}</h3>
//         <p><small>
//             <i>Pembuat ${lagu[0][1]}</i>
//         </small>
//         </p>
//         <img src="${lagu[0][4]}" alt=""> 
//         <div class="bawah">
//             <div class="kanan">
//                     ${lagu[0][2]}
//             </div>
//          <div class="kiri">
//             ${lagu[0][3]}
//          </div>
//         </div>
//        </div>
//        <div class="card">
//         <h3>Judul ${lagu[1][0]}</h3>
//         <p><small>
//             <i>Pembuat${lagu[1][1]}</i>
//         </small>
//         </p>
//         <img src="${lagu[1][4]}" alt="">
//         <div class="bawah">
//             <div class="kanan">
//                 ${lagu[0][2]}
//             </div>
//          <div class="kiri">
//             ${lagu[0][3]}
//          </div>
//         </div>
//        </div>
//        <div class="card">
//         <h3>Judul</h3>
//         <p><small>
//             <i>Pembuat</i>
//         </small>
//         </p>
//         <img src="code9.png" alt="">
//         <div class="bawah">
//             <div class="kanan">
//                 1000
//             </div>
//          <div class="kiri">
//             2000
//          </div>
//         </div>
//        </div>
// `

// konten.innerHTML= element
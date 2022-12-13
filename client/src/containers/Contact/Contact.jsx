import React from 'react'
import './styles.css'

const Contact = () => {
  return (
    <div>

      <div className='project'>
        <h1>About This Project</h1>

        <p>LaBuena Cafe merupakan website Cafe yang saya buat menggunakan React, MongoDB, Node.js, dan Express.js (MERN Stack). LaBuena juga menggunakan API lain seperti Mapbox untuk memudahkan user menemukan lokasi cabang cafe pada map. API google oauth juga digunakan untuk memungkinkan user untuk dapat login dengan akun google mereka.</p>

         
        <p>
        Pada bagian autentikasi, user dibagi menjadi 2 jenis role yaitu role admin dan role user. Admin dapat menambahkan menu baru, menambahkan cabang cafe pada map, mengedit dan menghapus data pada cafe dan melakukan registrasi untuk akun admin lainnya. Sedangkan user hanya dapat melihat informasi cafe. Token untuk menyimpan informasi user dibuat dengan menggunakan JWT. 
        </p>

        <p>
        LaBuena cafe menggunakan RESTful API untuk mempermudah proses pembuatan website. Untuk request dan response data melalui http, saya menggunakan Axios. </p>

        <p><b>The idea behind LaBuena Cafe:</b><br/> LaBuena adalah nama perusahaan fiksi yang artinya perusahaan ini tidak nyata dan merupakan hasil dari pemikiran saya. Ide nama LaBuena saya dapat dari salah satu judul lagu favorit saya yaitu Labuena vida yang artinya "kehidupan yang lebih baik". Selain itu saya memutuskan untuk membuat konsep cafe karena saya sangat amat menyukai kopi. Saya benar-benar tidak bisa hidup tanpa kopi! meskipun saya punya asam lambung tapi saya minum kopi setiap hari (jangan dicontoh). I love coffee so muchh. Konsep warna dalam website ini yaitu warna hijau karena adik saya yang paling kecil sangat suka warna hijau. Warna hijau juga memberikan konsep segar yang bisa bikin stress hilang. Saya pernah membaca sebuah artikel kalau kita lagi stress, coba lihat yang hijau-hijau seperti pohon-pohonan dan daun-daunan dan lupa lagi. Semoga suatu hari nanti LaBuena cafe bisa saya realisasikan menjadi cafe sungguhan!!! aaa tidak sabar untuk minum kopi dan makan kue yang enak setiap hari hehehe . AMINNN AMINNNNN AMINNN BANGET.</p>
        

      </div>

    </div>
  )
}

export default Contact
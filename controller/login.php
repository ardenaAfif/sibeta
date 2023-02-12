<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sibeta";

// Membuat koneksi
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Mengecek koneksi
if (!$conn) {
  die("Koneksi gagal: " . mysqli_connect_error());
}

// Mengambil data dari form
$email = $_POST['email'];
$password = $_POST['password'];

// Validasi data
if (empty($email) || empty($password)) {
  echo "Email dan password harus diisi";
} else {
  // Cek username dan password di database
  $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
    //Login berhasil
echo "Login berhasil";
} else {
// Login gagal
echo "Email atau password salah";
}
}

// Menutup koneksi
mysqli_close($conn);
?>

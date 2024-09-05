<?php
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <script src="js/validate.js"></script>
</head>
<body>
<form action="login.php" id="loginForm" method="post" onsubmit="return" novalidate class="needs-validation">
    <label for="username">Usuario:</label>
    <input type="text" id="username" required>
    <br><br>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" required>
    <br><br>
    <input type="submit" value="Iniciar Sesión">
</form>

</body>
</html>

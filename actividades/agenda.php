<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Agenda de contactos</title>
</head>

<body>
    <main style="width: 1200px; margin: 0 auto;">
        <div class="container-fluid">
            <a href="../index.php">Volver al índice</a>
            <h1>Agenda</h1>
            <?php
            if (isset($_GET['contactos'])) $contactos = $_GET['contactos'];
            else $contactos = array();

            if (isset($_GET['submit'])) {
                $nuevo_nombre = filter_input(INPUT_GET, 'nombre');
                $nuevo_telefono = filter_input(INPUT_GET, 'telefono');
                if (empty($nuevo_nombre)) {
                    echo "<p style='color:red'>Debe introducir un nombre.</p>";
                } elseif (empty($nuevo_telefono)) {
                    unset($contactos[$nuevo_nombre]);
                } else {
                    $contactos[$nuevo_nombre] = $nuevo_telefono;
                }
            }
            ?>
            <div style="display: flex; justify-content: flex-start; gap: 4rem;">
                <div>
                    <h2>Añadir contacto</h2>
                    <form>
                        <div style="display: flex; flex-direction: column; max-width: 30em; gap: 1em;">
                            <?php
                            foreach ($contactos as $n => $tel) {
                                echo '<input type="hidden" name="contactos[' . $n . ']" ';
                                echo 'value="' . $tel . '"/>';
                            }
                            ?>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" maxlength="25" />
                            <label for="telefono">Telefono</label>
                            <input type="number" name="telefono" />
                            <input type="submit" name='submit' value="Ejecutar" />
                        </div>
                    </form>
                </div>

                <div>
                    <h2>Contactos</h2>
                    <?php
                    if (count($contactos) == 0) {
                        echo "<p>La agenda está vacía.</p>";
                    } else {
                        echo "<div style='display: flex; gap: 2em; flex-wrap: wrap;'>";
                        foreach ($contactos as $n => $tel) {
                            echo "<div style='display:flex; flex-direction: column; gap: 1em align-items:center; justify-content:center; padding: 1em; min-width: 10em; min-height: 5em; position: relative; border: 1px solid black;'><p><strong>" . $n . '</strong></p><p>' . $tel . "</p></div>";
                        }
                        echo "</div>";
                    }
                    ?>
                </div>
            </div>
        </div>
    </main>
</body>
<?php
/*
Template Name: Ejercicios JavaScript tema 3
*/

get_header();
$ejercicio_seleccionado = tema_plaiaundi_obtener_ejercicio_seleccionado();
$titulos_ejercicios = array(
    '¿Prueba de ejercicio Tema 3',

);
?>

<main class="ejercicios">
    <h2><?php the_title(); ?></h2>
    <p>Tema 2 · Fundamentos y particularidades de JavaScript</p>

    <nav aria-label="Ejercicios de JavaScript">
        <ul class="ejercicios__lista">
            <?php foreach ($titulos_ejercicios as $indice => $titulo) { ?>
                <?php $numero = $indice + 1; ?>
                <li>
                    <a
                        class="ejercicios__enlace"
                        href="<?php echo esc_url(add_query_arg('ejercicio', $numero, get_permalink())); ?>"
                        <?php if ($ejercicio_seleccionado === $numero) { ?>aria-current="page"<?php } ?>
                    >
                        <?php echo esc_html(sprintf('%02d - %s', $numero, $titulo)); ?>
                    </a>
                </li>
            <?php } ?>
        </ul>
    </nav>
</main>

<?php get_footer(); ?>
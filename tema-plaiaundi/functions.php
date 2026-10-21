<?php

add_theme_support('post-thumbnails');
function tema_plaiaundi_estilos() {

    wp_enqueue_style(
        'tema-plaiaundi-style',
        get_stylesheet_uri()
    );

}

add_action('wp_enqueue_scripts', 'tema_plaiaundi_estilos');
register_nav_menus(
    array(
        'menu-principal' => 'Menú principal'
    )
);
function tema_plaiaundi_obtener_tema_actual(){
    if (is_page_template('page-tema1.php')) {
        return 'tema1';
    } elseif (is_page_template('page-tema2.php')) {
        return 'tema2';
    } elseif (is_page_template('page-tema3.php')) {
        return 'tema3';
    } else {
        return null;
    }
}

function tema_plaiaundi_obtener_ejercicio_seleccionado() {
     $tema = tema_plaiaundi_obtener_tema_actual();

    if (
        $tema === null ||
        !isset($_GET['ejercicio']) ||
        !is_scalar($_GET['ejercicio'])
    ) {
        return null;
    }

    $ejercicio = filter_var(
        wp_unslash($_GET['ejercicio']),
        FILTER_VALIDATE_INT
    );

    if ($ejercicio === false || $ejercicio < 1) {
        return null;
    }

    return $ejercicio;
}

function tema_plaiaundi_encolar_ejercicio() {
    $tema = tema_plaiaundi_obtener_tema_actual();
    $ejercicio = tema_plaiaundi_obtener_ejercicio_seleccionado();
        if ($tema === null || $ejercicio === null) {
        return;
    }

    if ($tema === 'tema4') {


        wp_enqueue_script_module(
            'tema-plaiaundi-ejercicio',
            get_theme_file_uri($archivo),
            array(),
            null
        );


    } else {


    wp_enqueue_script(
        'tema-plaiaundi-ejercicio',
        get_theme_file_uri($archivo),
        array(),
        null,
        true
    );}

    if ($ejercicio === null) {
        return;
    }

    $archivo = sprintf(
        '/js/%s/ejercicio%02d.js',
        $tema,
        $ejercicio
    );

    wp_enqueue_script(
        'tema-plaiaundi-ejercicio',
        get_theme_file_uri($archivo),
        array(),
        null,
        true
    );
}

add_action('wp_enqueue_scripts', 'tema_plaiaundi_encolar_ejercicio');
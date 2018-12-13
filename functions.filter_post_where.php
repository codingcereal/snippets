<?php
add_filter( 'posts_where', 'codingcereal_posts_where' );
function codingcereal_posts_where( $where ) {
    global $pagenow, $wpdb;
    if ( is_admin() && $pagenow=='edit.php' &&  ($_GET['post_type']=='post') && $_GET['s'] != '') {
        $where = preg_replace(
            "/\(\s*" . $wpdb->posts . ".post_title\s+LIKE\s*(\'[^\']+\')\s*\)/",
            "(" . $wpdb->posts . ".post_title LIKE $1) OR (" . $wpdb->posts . ".ID LIKE $1)", $where );
    }
    return $where;
}

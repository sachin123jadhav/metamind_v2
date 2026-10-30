<?php
// Sends the site's 404 page with a real 404 status. .htaccess routes URLs with no matching file here,
// because this host ignores ErrorDocument and answers wrong URLs with a bare "404 Not Found".
http_response_code(404);
header('Content-Type: text/html; charset=utf-8');
readfile(__DIR__ . '/404.html');

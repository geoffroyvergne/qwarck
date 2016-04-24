
<?php
error_reporting(E_ALL); 
ini_set("display_errors", 1); 

function getCommonHtml($lang, $title, $description, $keywords, $urlImage, $frUrl, $enUrl, $ogUrlImage, $ogUrl, $ogSiteName, $fbApId) { 

$commonHtml = '
<html lang="' . $lang . '">

<head>
<meta charset="utf-8" />

<title>' . $title . '</title>

<meta name="description" content="' . $description . '" />
<meta name="keywords" content="' . $keywords . '" />

<link rel="alternate" href="' . $frUrl . '" hreflang="fr" />
<link rel="alternate" href="' . $enUrl . '" hreflang="en" />
';

if($fbApId != null) {
	$commonHtml .= '<meta property="fb:app_id" content="' . $fbApId . '" />';
}

$commonHtml .= '<meta property="og:site_name" content="' . $ogSiteName . '"/>
<meta property="og:url" content="' . $ogUrl . '" />
<meta property="og:image" content="' . $ogUrlImage . '" />
<meta property="og:title" content="' . $title . '" />
<meta property="og:description" content="' . $description . '" />
</head>

<body>
<p>' . $title . '</p>	
<img src="' . $urlImage . '" />
<p>' . $description . '</p>	

</body>

</html>
'; 

return $commonHtml;
}
?>
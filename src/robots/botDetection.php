<?php
function crawlerDetect($USER_AGENT)
{
    $crawlers = array(
    'Googlebot',
    'google', 
    'Bingbot', 
    'bing', 
    'Adidxbot', 
    'MSNBot', 
    'msn', 
    'BingPreview', 
    'Yahoo! Slurp', 
    'yahoo', 
    'Baiduspider', 
    'baidu'
    );
 
    foreach ($crawlers as $crawler)
    {
        if (stristr($USER_AGENT, $crawler))
        {
            return true;
        }
    }
 
    return false;
}
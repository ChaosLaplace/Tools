<?php
// An example of using php-webdriver.
// Do not forget to run composer install before and also have Selenium server started and listening on port 4444.
namespace Facebook\WebDriver;
require_once('../vendor/autoload.php');

use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
// this is the default
$host = 'http://localhost:4444/wd/hub';
// Set Chrome options
$options = new ChromeOptions();
// Enable headless mode and disable GPU
$options->addArguments(['--headless', '--disable-gpu']);
// Set desired capabilities
$capabilities = DesiredCapabilities::chrome();
$capabilities->setCapability(ChromeOptions::CAPABILITY, $options);
// Start the WebDriver
$driver = RemoteWebDriver::create($host, $capabilities);
$driver->get('https://www.youtube.com/channel/UC2fskEap4fde27rGId76Hig');
// print the pagesource of the current page
$html_selenium = $driver->getPageSource();
echo $html_selenium;
$driver->quit();

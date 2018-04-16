<?php
/**
 * Created by PhpStorm.
 * User: fredy
 * Date: 27/03/2018
 * Time: 9:46 PM
 */
require_once APPPATH . 'libraries/REST_Controller.php';

class MY_Controller extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();
        $files = glob(APPPATH . 'modelo/*');
        foreach ($files as $file_path) {
            require_once $file_path;
        }
    }
}
<?php

class Home extends Controller {
    public function index(){
        $data['title']='Home';
        $data['dd'] = date('l');
        $data['d'] = date('d');
        $data['m'] = date('F');
        $data['y'] = date('Y');
        $data[' '] = date('H:i:s');
        $this->view('templates/header',$data);
        $this->view('home/index');
        $this->view('templates/footer');
    }
}
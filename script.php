<?php
    function get(){
        foreach (glob("*.txt") as $filename) {
            echo $filename;
        }
    }
?>
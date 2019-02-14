package com.sbwh2.springbootwebh2;
 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class RestApiController {

    @RequestMapping("/spring/boot/web/server")
    public String hi() {
        return "Hello world!";
    }
}
package com.ll.exam.nsp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // @RestController = @Controller + @ResponseBody
public class HomeMainController {

  @GetMapping("/hello")
  public String hello() {
    return "Hello, world!";
  }
}

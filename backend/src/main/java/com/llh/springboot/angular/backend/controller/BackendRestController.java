package com.llh.springboot.angular.backend.controller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author lorenzo
 */
@RestController
@RequestMapping("/api/rest")
public class BackendRestController {

    @RequestMapping(value = "/get-test", method = RequestMethod.GET)
    public Map<String, Object> getTestInfo1() {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("code", 1);
        map.put("description", "test services rest");
        map.put("name", "test service");
        return map;
    }
    
     @RequestMapping(value = "/get-info", method = RequestMethod.GET)
    public Map<String, Object> getTestInfo2() {
        Map<String, Object> map = new HashMap<String, Object>();
         map.put("info", "welcome spring boot + angular");
        return map;
    }
}

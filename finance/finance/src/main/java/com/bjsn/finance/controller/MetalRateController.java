package com.bjsn.finance.controller;

import com.bjsn.finance.Service.MetalRateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class MetalRateController {

    @Autowired
    private MetalRateService metalRateService;

    @GetMapping("/metal-rates")
    public ResponseEntity<Map<String, Double>> getRates() {
        return ResponseEntity.ok(metalRateService.fetchRates());
    }
}
package com.example.airline_backend.web.rest;

import com.example.airline_backend.model.dto.UserDto;
import com.example.airline_backend.model.dto.UserRegisterForm;
import com.example.airline_backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/api/auth")
public class AuthRestController {
    private final UserService userService;

    public AuthRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody UserRegisterForm userRegisterForm) {
        UserDto user = this.userService.registerUser(userRegisterForm);

        return ResponseEntity.created(URI.create("")).body(user);
    }
}

package com.example.airline_backend.service;

import com.example.airline_backend.model.dto.UserDto;
import com.example.airline_backend.model.dto.UserRegisterForm;
import com.example.airline_backend.model.entity.UserEntity;
import com.example.airline_backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDto registerUser(UserRegisterForm userRegisterForm) {
        UserEntity user = new UserEntity();
        user.setFirstName(userRegisterForm.getFirstName())
                .setLastName(userRegisterForm.getLastName())
                .setEmail(userRegisterForm.getEmail())
                .setPassword(passwordEncoder.encode(userRegisterForm.getPassword()));



        return UserDto.mapToUserDto(this.userRepository.save(user));
    }
}

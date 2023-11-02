package com.example.airline_backend.service;

import com.example.airline_backend.model.entity.UserEntity;
import com.example.airline_backend.repository.UserRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthenticatedUserService implements UserDetailsService {
    private final UserRepository userRepository;

    public AuthenticatedUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity userEntity = this.userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User with email " + email + "doesn't exist"));
        User user = new User(email, userEntity.getPassword(), List.of(new SimpleGrantedAuthority("ROLE_")));

        return user;
    }
}

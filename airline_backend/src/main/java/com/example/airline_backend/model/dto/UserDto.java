package com.example.airline_backend.model.dto;

import com.example.airline_backend.model.entity.UserEntity;

public class UserDto {
    private Long id;
    private String email;

    public Long getId() {
        return id;
    }

    public UserDto setId(Long id) {
        this.id = id;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public UserDto setEmail(String email) {
        this.email = email;
        return this;
    }

    public static UserDto mapToUserDto(UserEntity userEntity) {
        UserDto user = new UserDto();
        user.setId(userEntity.getId())
                .setEmail(userEntity.getEmail());

        return user;
    }
}

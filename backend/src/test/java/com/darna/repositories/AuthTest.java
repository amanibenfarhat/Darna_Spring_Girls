package com.darna.repositories;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertNotSame;
import static org.junit.jupiter.api.Assertions.assertSame;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.ServletContext;

import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;

import com.darna.models.ERole;
import com.darna.models.Role;
import com.darna.models.User;
import com.darna.repository.RoleRepository;
import com.darna.repository.UserRepository;
import com.darna.request.LoginRequest;
import com.darna.security.jwt.JwtUtils;
import com.darna.security.services.UserDetailsImpl;
import com.darna.security.services.UserDetailsServiceImpl;
import com.darna.services.UserService;


@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@EnableAutoConfiguration
public class AuthTest {
	
	

	@Autowired
	AuthenticationManager authenticationManager;


	@Autowired
	ModelMapper modelMapper;
	@Autowired
	UserService userService;
	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	ServletContext context;
	
	
	private static String UPLOAD_DIR ="C:\\wamp64\\www\\imageDarna";
	
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	// Create new user's account
	//User user = new User(null, "moufi","Adem","Chakroun","moufi@gmail.com", encoder.encode("123456"), true,null,"prof", null, null,  null );
	//User user = new User(null, "yosra","Adem","Chakroun","chii@gmail.com", encoder.encode("123456"), true,null,"prof", null, null,  null );

	
	@Test
	@Rollback(false)	
    public void registerUser() {
		User user = new User(null, "rawsen","Adem","Chakroun","rawesn@gmail.com", encoder.encode("123456"), false,null,"prof", "32/02/2012", null,  "32/02/2012",null );
		//test pour attributs
		assertThat(user.getEmail()).isNotEmpty();
		assertThat(user.getUsername()).isNotEmpty();		
		assertThat(userRepository.existsByUsername(user.getUsername()));
		assertThat(userRepository.existsByEmail(user.getEmail()));
		assertNotSame(user.getPassword(),encoder.encode("123456"));
		assertSame(user.isEnabled(),false);			
		Set<String> strRoles = new HashSet<>(Arrays.asList("admin", "visiteur"));
		Set<Role> roles = new HashSet<>();		
		//test pour role
		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	        assertThat(userRole);
			roles.add(userRole);
		}
		
		else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			        assertThat(adminRole);
					roles.add(adminRole);
					break;
				case "visiteur":
					Role visiteurRole = roleRepository.findByName(ERole.ROLE_VISITEUR)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			        assertThat(visiteurRole);
					roles.add(visiteurRole);
					break;
				case "membre":
					Role membreRole = roleRepository.findByName(ERole.ROLE_MEMBRE)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			        assertThat(membreRole);
					roles.add(membreRole);

					break;
				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			        assertThat(userRole);
					roles.add(userRole);				
				}
			});
		}
		user.setRoles(roles);		 	
		userRepository.save(user);
	
	}
	
	@Test
	@Rollback(false)		
	public void authenticateUser() {
		//bad credentials
		//LoginRequest loginRequest = new LoginRequest("yosra","45687");	
		
		//!bad credentials
		LoginRequest loginRequest = new LoginRequest("yosra","123456");		
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());
		
		//tester que celui authentifié a le meme id expected
		User user = userService.getAUserById((long) 11);	
		assertThat(user.getUsername()).isEqualToIgnoringCase(loginRequest.getUsername());
		assertTrue(user.isEnabled()==false);
	}
	
	

}

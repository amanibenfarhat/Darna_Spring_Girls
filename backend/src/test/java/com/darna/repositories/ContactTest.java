package com.darna.repositories;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;



import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.annotation.Order;
import org.springframework.test.annotation.Rollback;

import com.darna.models.Contact;
import com.darna.services.ContactService;

@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@EnableAutoConfiguration
public class ContactTest {

	
	 @Autowired
	 ContactService contactService ;
	
	 
	  @Test
	  @Rollback(false)
	  @Order(1)
	  public void addContact() {
			// TODO Auto-generated method stub
	        long expected = 1;

			Contact contact = (new Contact((long) 1, "jihen","ben mohamed","jiehnbenmed@gmail.com","message fkf","123456"));
			assertThat(contact.getId()).isGreaterThan(0);
			assertThat(contact.getId()).isNotNull();
			assertThat(contact.getId()).isEqualByComparingTo(expected);
			assertThat(contact.getNom()).isNotEmpty();
			assertThat(contact.getEmail()).isNotEmpty();
			assertThat(contact.getPrenom()).isNotEmpty();
			
			contactService.addContact(contact);

		}
	  
	  
	  @Test
	  @Rollback(false)
	  @Order(2)
	  public void testFindContactById() {
		  String expected ="jiehnbenmed@gmail.com" ; 
		  Contact contact = contactService.findbyid((long) 1);   
		
		// if( assertThat(rebriqueAider.getId()).isEqualTo(6) != null) {
		if( assertThat(contact.getId()).isEqualTo(1) != null) {

			  System.out.println(contact.StringtoString());
	     };
		  assertThat(contact.getEmail()).isEqualToIgnoringCase(expected);
	  }
	  
	  @Test
	  @Rollback(false)
	  @Order(3)
	  public void testUpdateContact() {
		  String Expected ="emna"; 
		  String NotExpected ="mohamed"; 
		  
		  Contact contact = contactService.findbyid((long) 1);
		  contact.setNom("emna");	       
		  contactService.addContact(contact);
		  System.out.println(contact.getNom());
		  //*****************2chaines egaux******************//
				  assertThat(contact.getNom()).isEqualToIgnoringCase(Expected);
				//  assertThat(contact.getNom()).isEqualToIgnoringCase(NotExpected);

		  //*******************2objet eguax******************//
					Contact contactUpdated = (new Contact((long) 1, "emna","ben mohamed","jiehnbenmed@gmail.com","message fkf","123456"));

					//Contact contactUpdated = (new Contact((long) 1, "jihen","ben mohamed","jiehnbenmed@gmail.com","message fkf","123456"));

		
				  assertThat(contactUpdated.StringtoString()).isEqualTo(contact.StringtoString());
				  		  System.out.println(contactUpdated.StringtoString());
						  System.out.println(contact.StringtoString());
	  }
	 
	  @Test
	   @Rollback(false)
	   @Order(4)
	   public void testListContact() {
		  
		    assertThat(contactService.findAllItems()).size().isGreaterThan(0);
		    assertNotNull(contactService.findAllItems());		

		}

	   @Test
	   @Rollback(false)
	   @Order(5)
	   public void testDeleteContact() {
		   Contact contact = contactService.findbyid((long) 1);
	        
		   contactService.deleteContact(contact.getId());
	        
		   Contact deletedcontact = contactService.findbyid((long) 1);
	        
	       assertThat(deletedcontact).isNull();   
	        
	   }
	

	  
}



package com.darna.repositories;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.annotation.Order;
import org.springframework.test.annotation.Rollback;

import com.darna.models.RebriqueAider;
import com.darna.services.RebriqueAiderService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@EnableAutoConfiguration
public class AiderTest {

	
	
	 @Autowired
	 RebriqueAiderService rebriqueAiderService ;
	
	 
	  @Test
	  @Rollback(false)
	  @Order(1)
	  public void addRebriqueAider() {
			// TODO Auto-generated method stub
	        long expected = 1;
			RebriqueAider rebriqueAider = (new RebriqueAider((long) 1, "aider les autres est noble","par collecte","en groupe"));
			assertThat(rebriqueAider.getId()).isGreaterThan(0);
			assertThat(rebriqueAider.getId()).isNotNull();
			assertThat(rebriqueAider.getId()).isEqualByComparingTo(expected);
			assertThat(rebriqueAider.getPk_aider()).isNotEmpty();
			assertThat(rebriqueAider.getComment_aider()).isNotEmpty();
			assertThat(rebriqueAider.getVolontariat()).isNotEmpty();
			
			rebriqueAiderService.addRebriqueAider(rebriqueAider);

		}
	  @Test
	  @Rollback(false)
	  @Order(2)
	  public void testFindRebriqueAiderById() {
		  String expected ="aider les autres est noble" ; 
		 RebriqueAider rebriqueAider = rebriqueAiderService.findbyid((long) 1);   
		
		// if( assertThat(rebriqueAider.getId()).isEqualTo(6) != null) {
		if( assertThat(rebriqueAider.getId()).isEqualTo(1) != null) {

			  System.out.println(rebriqueAider.StringtoString());
	     };
		  assertThat(rebriqueAider.getPk_aider()).isEqualToIgnoringCase(expected);
	  }
	  
	  @Test
	  @Rollback(false)
	  @Order(3)
	  public void testUpdateRebriqueAider() {
		  String Expected ="besoin d aide pauvre"; 
		  String NotExpected ="besoin d aid"; 
		  
		  RebriqueAider rebriqueAider = rebriqueAiderService.findbyid((long) 1);
		  rebriqueAider.setPk_aider("besoin d aide pauvre");	       
		  rebriqueAiderService.addRebriqueAider(rebriqueAider);
		  System.out.println(rebriqueAider.getPk_aider());
		  //*****************2chaines egaux******************//
				  assertThat(rebriqueAider.getPk_aider()).isEqualToIgnoringCase(Expected);
				 //assertThat(rebriqueAider.getPk_aider()).isEqualToIgnoringCase(NotExpected);		 
		  //*******************2objet eguax******************//
				  RebriqueAider rebriqueAiderUpdated = (new RebriqueAider((long) 1, "besoin d aide pauvre","par collecte","en groupe"));
				 //RebriqueAider rebriqueAiderUpdated = (new RebriqueAider((long) 27, "besoin d aid","par collecte","en groupe"));
		
				  assertThat(rebriqueAiderUpdated.StringtoString()).isEqualTo(rebriqueAider.StringtoString());
				  		  System.out.println(rebriqueAiderUpdated.StringtoString());
						  System.out.println(rebriqueAider.StringtoString());
	  }
	 
	  
	  Object[] expectedEmps = new Object[3];
	     
	    @Before
	    public void initInputs(){
	    expectedEmps[0] =new RebriqueAider((long) 6, "iPhone 10","iPhone 10","iPhone 10");
	    expectedEmps[1] =new RebriqueAider((long) 7, "besoin d aide pauvre","iPhone 10","iPhone 10");
    	expectedEmps[2] =new RebriqueAider((long) 11, "iPhone 10","iPhone 10","iPhone 10");

	    }
	     
	   @Test
	   @Rollback(false)
	   @Order(4)
	   public void testListAider() {
		  
		    assertThat(rebriqueAiderService.findAllItems()).size().isGreaterThan(0);
		    assertNotNull(rebriqueAiderService.findAllItems());		

		}

	   @Test
	   @Rollback(false)
	   @Order(5)
	   public void testDeleteRebriqueAidert() {
		   RebriqueAider rebriqueAider = rebriqueAiderService.findbyid((long) 1);
	        
		   rebriqueAiderService.deleteRebriqueAider(rebriqueAider.getId());
	        
		   RebriqueAider deletedRebriqueAider = rebriqueAiderService.findbyid((long) 1);
	        
	       assertThat(deletedRebriqueAider).isNull();   
	        
	   }
	

}

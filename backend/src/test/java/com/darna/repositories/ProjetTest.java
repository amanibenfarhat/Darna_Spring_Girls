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
import com.darna.models.Projet;
import com.darna.services.ProjetService;

@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@EnableAutoConfiguration
public class ProjetTest {
	
	
	 @Autowired
	 ProjetService projetService ;
	
	 
	  @Test
	  @Rollback(false)
	  @Order(1)

	  public void addprojett() {
			// TODO Auto-generated method stub
	        long expected = 1;
	        String ExpectedStatus="En cours";
			Projet projet = (new Projet((long) 1, "ce projet est  en cours","En cours",null,"Lenovo_A1000_IMG_20190409_125147_1610892616886.jpg"));
			assertThat(projet.getId_projet()).isGreaterThan(0);
			assertThat(projet.getId_projet()).isNotNull();
			assertThat(projet.getId_projet()).isEqualByComparingTo(expected);
			assertThat(projet.getDescription_projet()).isNotEmpty();
			  assertThat(projet.getStatus_projet()).isEqualToIgnoringCase(ExpectedStatus);

			
			projetService.addProjet(projet);

		}
	  
	  
	  @Test
	  @Rollback(false)
	  @Order(2)
	  public void testFindprojetById() {
		  String expected ="En cours" ; 
		  Projet projet = projetService.getProjetById((long) 1);   
		
		// if( assertThat(rebriqueAider.getId()).isEqualTo(6) != null) {
		if( assertThat(projet.getId_projet()).isEqualTo(1) != null) {

			  System.out.println(projet.StringtoString());
	     };
		  assertThat(projet.getStatus_projet()).isEqualToIgnoringCase(expected);
	  }
	  
	  @Test
	  @Rollback(false)
	  @Order(3)
	  public void testUpdateprojet() {
		  String Expected ="En attente"; 
		  String NotExpected ="En cours"; 
		  
		  Projet projet = projetService.getProjetById((long) 1);
		  projet.setStatus_projet("En attente");	       
		  projetService.addProjet(projet);
		  System.out.println(projet.getStatus_projet());
		  //*****************2chaines egaux******************//
				  assertThat(projet.getStatus_projet()).isEqualToIgnoringCase(Expected);
				//  assertThat(projet.getStatus_projet()).isEqualToIgnoringCase(NotExpected);

		  //*******************2objet eguax******************//
					Projet projetUpdated = (new Projet((long) 1, "ce projet est  en cours","En attente",null,"Lenovo_A1000_IMG_20190409_125147_1610892616886.jpg"));

				//	Projet projetUpdated = (new Projet((long) 4, "ce projet est  en cours","En cours",null,"Lenovo_A1000_IMG_20190409_125147_1610892616886.jpg"));

		
				  assertThat(projetUpdated.StringtoString()).isEqualTo(projet.StringtoString());
				  		  System.out.println(projetUpdated.StringtoString());
						  System.out.println(projet.StringtoString());
	  }
	 

	  @Test
	   @Rollback(false)
	   @Order(4)
	   public void testListprojet() {
		  
		    assertThat(projetService.getAllProjet()).size().isGreaterThan(0);
		    assertNotNull(projetService.getAllProjet());		

		}

	   @Test
	   @Rollback(false)
	   @Order(5)
	   public void testDeleteprojet() {
		   Projet projet = projetService.getProjetById((long) 1);
	        
		   projetService.deleteProjet(projet.getId_projet());
	        
		   Projet deletedProjet = projetService.getProjetById((long) 1);
	        
	       assertThat(deletedProjet).isNull();   
	        
	   }
	



}

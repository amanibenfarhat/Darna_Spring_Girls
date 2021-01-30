package com.darna.repositories;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertNotNull;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import com.darna.models.Presentation;
import com.darna.repository.PresentationRepository;

@AutoConfigureTestDatabase(replace = Replace.NONE)
@DataJpaTest
@EnableAutoConfiguration
public class PresentationRepositoryTest {

	@Autowired 
	private PresentationRepository presentationRepo;
	
	@Test
	@Rollback(false)
	public void addPresentation() {
		
		Presentation presentation=new Presentation();
		presentation.setDescription_presentation("L’association Darna a été créée au mois de mars 2014, par un groupe d’amis ayant une expérience dans le milieu associatif. Le nombre d’enfants abandonnés est en nette progression ces 3 dernières années. Les 2/3 de ces enfants sont placés à l’institut national de la protection de l’enfance. Le tiers restant est placé dans des pouponnières associatives jusqu’à l’âge de 2 ans.\r\n" + 
				"La plupart des enfants sont placés dans des familles de substitution (familles adoptives, familles d’accueil, Kafela). Certains enfants ayant un handicap léger ne trouvent malheureusement pas de familles de substitution. Ils restent à l’INPE jusqu’à l’âge de 6 ans. Ils sont placés par la suite à Sidi Thabet au centre « Sanad » pour les handicaps lourds.\r\n" + 
				"Notre principal objectif est de créer des unités de vie pour ces enfants-là en leur offrant une maison et une prise en charge complète pour qu’ils aient une vie normale. Une mère de substitution s’occupe de les élever et de leur offrir l’amour qui leur a toujours manqué.\r\n");
		Presentation savedpresentation=presentationRepo.save(presentation);
		assertThat(savedpresentation).isNotNull();
	}
	@Test
	@Rollback(false)
	public void updatePresentation() {
		
		long idoldpres=2;
		
		Presentation presentation=new Presentation();
		presentation.setDescription_presentation("L’association Darna a été créée au mois de mars 2014");
		presentation.setIdPresentation(idoldpres);
		
		Presentation updatedpres=presentationRepo.save(presentation);
		
		assertThat(updatedpres.getDescription_presentation()).isEqualTo(presentation.getDescription_presentation());


	}
	@Test
	@Rollback(false)
	public void getAllPresentation() {
		
		List<Presentation> listpres=(List<Presentation>) presentationRepo.findAll();
		assertThat(listpres.size()).isGreaterThan(0);
		assertNotNull(listpres);


	}
	@Test
	@Rollback(false)
	public void deletePresentationById() {
		long idpre=4;
		presentationRepo.deleteById(idpre);
		Optional<Presentation> pres=presentationRepo.findById(idpre);
		assertThat(pres).isEmpty();
		
	}
	
	
}

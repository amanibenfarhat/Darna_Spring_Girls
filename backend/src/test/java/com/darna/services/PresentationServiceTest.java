package com.darna.services;

import static org.assertj.core.api.Assertions.assertThat;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import com.darna.models.Presentation;
import com.darna.repository.PresentationRepository;
import com.darna.services.impl.PresentationServiceImpl;



@ExtendWith(MockitoExtension.class)
@ExtendWith(SpringExtension.class)
public class PresentationServiceTest {
	
	@MockBean
	private PresentationRepository presentRepo;
	@InjectMocks
	private PresentationServiceImpl presentService;
	
	@Test
	public void addPresentation() {
		Presentation presentation=new Presentation(18,"L’association Darna a été créée au mois de mars 2014, par un groupe d’amis ayant une expérience dans le milieu associatif. Le nombre d’enfants abandonnés est en nette progression ces 3 dernières années. Les 2/3 de ces enfants sont placés à l’institut national de la protection de l’enfance. Le tiers restant est placé dans des pouponnières associatives jusqu’à l’âge de 2 ans.\r\n" + 
				"La plupart des enfants sont placés dans des familles de substitution (familles adoptives, familles d’accueil, Kafela). Certains enfants ayant un handicap léger ne trouvent malheureusement pas de familles de substitution. Ils restent à l’INPE jusqu’à l’âge de 6 ans. Ils sont placés par la suite à Sidi Thabet au centre « Sanad » pour les handicaps lourds.\r\n" + 
				"Notre principal objectif est de créer des unités de vie pour ces enfants-là en leur offrant une maison et une prise en charge complète pour qu’ils aient une vie normale. Une mère de substitution s’occupe de les élever et de leur offrir l’amour qui leur a toujours manqué.\r\n" + 
				"\r\n" + 
				"");
		
		Mockito.when(presentRepo.save(presentation)).thenReturn(presentation);
		
		Presentation savedpresentation=presentService.addPresentation(presentation);
		
		assertThat(savedpresentation).isEqualTo(presentation);
		
	}
	@Test
	public void updatePresentation() {
		Presentation oldpresentation=new Presentation(18,"L’association Darna a été créée au mois de mars 2014, par un groupe d’amis ayant une expérience dans le milieu associatif. Le nombre d’enfants abandonnés est en nette progression ces 3 dernières années. Les 2/3 de ces enfants sont placés à l’institut national de la protection de l’enfance. Le tiers restant est placé dans des pouponnières associatives jusqu’à l’âge de 2 ans.\r\n" + 
				"La plupart des enfants sont placés dans des familles de substitution (familles adoptives, familles d’accueil, Kafela). Certains enfants ayant un handicap léger ne trouvent malheureusement pas de familles de substitution. Ils restent à l’INPE jusqu’à l’âge de 6 ans. Ils sont placés par la suite à Sidi Thabet au centre « Sanad » pour les handicaps lourds.\r\n" + 
				"Notre principal objectif est de créer des unités de vie pour ces enfants-là en leur offrant une maison et une prise en charge complète pour qu’ils aient une vie normale. Une mère de substitution s’occupe de les élever et de leur offrir l’amour qui leur a toujours manqué.\r\n" + 
				"\r\n" + 
				"");
		Presentation newpresentation=new Presentation(18,"L’association Darna a été créée au mois de mars 2014, par un groupe d’amis ayant une expérience dans le milieu associatif. Le nombre d’enfants abandonnés est en nette progression ces 3 dernières années. Les 2/3 de ces enfants sont placés à l’institut national de la protection de l’enfance. Le tiers restant est placé dans des pouponnières associatives jusqu’à l’âge de 2 ans.");
				
		
		Mockito.when(presentRepo.save(newpresentation)).thenReturn(newpresentation);
		
		Presentation savedpresentation=presentService.updatePresentation(newpresentation, oldpresentation.getIdPresentation());
		
		assertThat(savedpresentation).isEqualTo(newpresentation);
		
	}
	@Test
	public void getPresentation() {
		
		List<Presentation> presentation=new ArrayList<>();
		presentation.add(new Presentation(5,""));
		Mockito.when(presentRepo.findAll()).thenReturn(presentation);
		List<Presentation> listpres=presentService.getAllPresentation();
		assertThat(presentation).isEqualTo(listpres);
		
	}
	

}

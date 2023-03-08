package com.springboot.boardweb;

import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.springboot.boardweb.domain.BoardEntitiy;

public class JPAClient {

	public static void main() {
		// 1. EntityManagerFactory
		// 2. EntityManager
		// 3. EntityTranjection
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("BoardWeb");
		EntityManager em = emf.createEntityManager();
		EntityTransaction tx = em.getTransaction();
		
		try {
			tx.begin();
			
			BoardEntitiy board = new BoardEntitiy();
			board.setSeq(0L);
			board.setCnt(1L);
			board.setContent("content1");
			board.setTitle("title1");
			board.setWirter("writer1");
			board.setWriteDate(new Date());
			em.persist(board);
			
			
			tx.commit();
		}catch(Exception e) {
			
		}
		
	}	

}

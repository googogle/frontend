package com.springboot.map.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.map.boardweb.entity.Member;


@Repository
public interface BoardRepository extends JpaRepository<Member, String> {

}
